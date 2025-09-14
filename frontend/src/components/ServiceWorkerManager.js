import React, { useEffect, useState } from 'react';

/**
 * Advanced Service Worker Manager
 * Provides offline functionality, background sync, and push notifications
 */
const ServiceWorkerManager = ({ 
  enabled = true,
  enableOfflineSupport = true,
  enableBackgroundSync = true,
  enablePushNotifications = false,
  cacheStrategy = 'staleWhileRevalidate',
  offlinePage = '/offline.html',
  onUpdateAvailable = null,
  onOfflineStatusChange = null
}) => {
  const [swState, setSwState] = useState({
    isRegistered: false,
    isOnline: navigator.onLine,
    isUpdateAvailable: false,
    registration: null,
    updateError: null
  });

  // Register service worker
  useEffect(() => {
    if (!enabled || !('serviceWorker' in navigator)) return;

    const registerServiceWorker = async () => {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js', {
          scope: '/',
          updateViaCache: 'none'
        });

        setSwState(prev => ({
          ...prev,
          isRegistered: true,
          registration
        }));

        // Handle service worker updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              setSwState(prev => ({
                ...prev,
                isUpdateAvailable: true
              }));
              onUpdateAvailable?.();
            }
          });
        });

        // Handle service worker messages
        navigator.serviceWorker.addEventListener('message', (event) => {
          handleServiceWorkerMessage(event.data);
        });

        // Handle controller change
        navigator.serviceWorker.addEventListener('controllerchange', () => {
          window.location.reload();
        });

      } catch (error) {
        console.error('Service Worker registration failed:', error);
        setSwState(prev => ({
          ...prev,
          updateError: error.message
        }));
      }
    };

    registerServiceWorker();
  }, [enabled, onUpdateAvailable]);

  // Handle online/offline status
  useEffect(() => {
    if (!enabled) return;

    const handleOnline = () => {
      setSwState(prev => ({ ...prev, isOnline: true }));
      onOfflineStatusChange?.(true);
      
      // Sync any pending background sync requests
      if (enableBackgroundSync && 'serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then(registration => {
          registration.sync.register('background-sync');
        });
      }
    };

    const handleOffline = () => {
      setSwState(prev => ({ ...prev, isOnline: false }));
      onOfflineStatusChange?.(false);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [enabled, enableBackgroundSync, onOfflineStatusChange]);

  // Handle service worker messages
  const handleServiceWorkerMessage = (data) => {
    switch (data.type) {
      case 'CACHE_UPDATED':
        console.log('Cache updated:', data.url);
        break;
      case 'OFFLINE_READY':
        console.log('App is ready for offline use');
        break;
      case 'SYNC_COMPLETE':
        console.log('Background sync completed');
        break;
      case 'PUSH_RECEIVED':
        handlePushNotification(data.payload);
        break;
      default:
        console.log('Unknown message from service worker:', data);
    }
  };

  // Handle push notifications
  const handlePushNotification = (payload) => {
    if (!enablePushNotifications) return;

    const options = {
      body: payload.body,
      icon: payload.icon || '/images/icon-192x192.png',
      badge: payload.badge || '/images/badge-72x72.png',
      tag: payload.tag,
      data: payload.data,
      actions: payload.actions,
      requireInteraction: payload.requireInteraction || false
    };

    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification(payload.title, options);
    }
  };

  // Request push notification permission
  const requestNotificationPermission = async () => {
    if (!enablePushNotifications || !('Notification' in window)) return false;

    if (Notification.permission === 'default') {
      const permission = await Notification.requestPermission();
      return permission === 'granted';
    }

    return Notification.permission === 'granted';
  };

  // Subscribe to push notifications
  const subscribeToPush = async () => {
    if (!enablePushNotifications || !swState.registration) return null;

    try {
      const permission = await requestNotificationPermission();
      if (!permission) return null;

      const subscription = await swState.registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: process.env.REACT_APP_VAPID_PUBLIC_KEY
      });

      // Send subscription to server
      await fetch('/api/push/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(subscription)
      });

      return subscription;
    } catch (error) {
      console.error('Push subscription failed:', error);
      return null;
    }
  };

  // Update service worker
  const updateServiceWorker = async () => {
    if (!swState.registration) return;

    try {
      const registration = await navigator.serviceWorker.getRegistration();
      if (registration && registration.waiting) {
        registration.waiting.postMessage({ type: 'SKIP_WAITING' });
      }
    } catch (error) {
      console.error('Service worker update failed:', error);
    }
  };

  // Clear cache
  const clearCache = async () => {
    if (!swState.registration) return;

    try {
      const cacheNames = await caches.keys();
      await Promise.all(
        cacheNames.map(cacheName => caches.delete(cacheName))
      );
      
      // Notify service worker to clear its cache
      swState.registration.active?.postMessage({ type: 'CLEAR_CACHE' });
    } catch (error) {
      console.error('Cache clearing failed:', error);
    }
  };

  // Background sync for forms
  const registerBackgroundSync = async (tag, data) => {
    if (!enableBackgroundSync || !swState.registration) return;

    try {
      const registration = await navigator.serviceWorker.ready;
      await registration.sync.register(tag);
      
      // Store data for background sync
      const syncData = {
        tag,
        data,
        timestamp: Date.now()
      };
      
      localStorage.setItem(`sync_${tag}`, JSON.stringify(syncData));
    } catch (error) {
      console.error('Background sync registration failed:', error);
    }
  };

  // Preload critical resources
  const preloadCriticalResources = async () => {
    if (!swState.registration) return;

    const criticalResources = [
      '/',
      '/styles/critical.css',
      '/images/logo.png',
      '/manifest.json'
    ];

    try {
      const cache = await caches.open('critical-v1');
      await cache.addAll(criticalResources);
    } catch (error) {
      console.error('Critical resource preloading failed:', error);
    }
  };

  // Expose service worker API
  useEffect(() => {
    if (enabled) {
      window.serviceWorkerManager = {
        update: updateServiceWorker,
        clearCache,
        subscribeToPush,
        registerBackgroundSync,
        preloadCriticalResources,
        isOnline: () => swState.isOnline,
        isRegistered: () => swState.isRegistered,
        getState: () => swState
      };
    }
  }, [enabled, swState]);

  return null; // This component doesn't render anything
};

export default ServiceWorkerManager;
