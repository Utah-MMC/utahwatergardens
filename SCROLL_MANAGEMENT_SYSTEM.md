# Scroll Management System

## Overview

This system provides comprehensive scroll management for your website, automatically handling:
- **Scroll to top** for general navigation
- **Scroll to forms** on form pages
- **Smart scroll behavior** based on page type
- **Manual scroll control** for specific elements

## 🚀 Features

### Automatic Scroll Behavior
- ✅ **Route changes**: Automatically scrolls based on page type
- ✅ **Button clicks**: All buttons scroll to top (except form elements)
- ✅ **Link clicks**: All internal links scroll to top
- ✅ **Form pages**: Automatically scroll to form on form pages
- ✅ **Smart detection**: Automatically detects page type and scrolls appropriately

### Manual Scroll Control
- ✅ **Utility functions**: Easy-to-use scroll functions
- ✅ **React hooks**: Custom hook for scroll behavior
- ✅ **Components**: Pre-built scroll-aware components
- ✅ **Flexible targeting**: Scroll to any element by CSS selector

## 📁 Files Created

### Core Components
1. **`AdvancedScrollManager.js`** - Main scroll management component
2. **`ScrollManager.js`** - Basic scroll management component
3. **`ScrollButton.js`** - Button component with scroll behavior
4. **`ScrollLink.js`** - Link component with scroll behavior

### Utilities
5. **`scrollUtils.js`** - Utility functions for scroll control
6. **`useScrollBehavior.js`** - React hook for scroll behavior

## 🎯 How It Works

### Automatic Behavior
The system automatically handles scroll behavior based on:

**Form Pages** (scroll to form):
- `/contact`
- `/free-estimate` 
- `/schedule`
- `/pond-consultations`

**All Other Pages** (scroll to top):
- Service pages
- Gallery pages
- Blog pages
- Any other page

### Click Handling
- **Buttons**: All buttons scroll to top (except form inputs)
- **Links**: All internal links scroll to top
- **External links**: No scroll behavior (mailto:, tel:, http:)
- **Form elements**: No scroll behavior (inputs, textareas, selects)

## 🛠️ Usage Examples

### 1. Automatic Behavior (Already Active)
The system is already active in your App.js and will handle all navigation automatically.

### 2. Using Scroll Utilities
```javascript
import { scrollToTop, scrollToForm, smartScroll } from '../utils/scrollUtils';

// Scroll to top
scrollToTop();

// Scroll to form
scrollToForm();

// Smart scroll (auto-detects page type)
smartScroll();

// Scroll to specific element
scrollToElement('.hero-section');
```

### 3. Using the Hook
```javascript
import { useScrollBehavior } from '../hooks/useScrollBehavior';

const MyComponent = () => {
  const { scrollToTop, scrollToForm, smartScroll } = useScrollBehavior({
    autoScroll: true,
    scrollType: 'smart',
    delay: 100
  });

  return (
    <div>
      <button onClick={scrollToTop}>Scroll to Top</button>
      <button onClick={scrollToForm}>Scroll to Form</button>
      <button onClick={smartScroll}>Smart Scroll</button>
    </div>
  );
};
```

### 4. Using Scroll Components
```javascript
import ScrollButton from '../components/ScrollButton';
import ScrollLink from '../components/ScrollLink';

const MyComponent = () => {
  return (
    <div>
      {/* Button that scrolls to top */}
      <ScrollButton scrollType="top" className="btn btn-primary">
        Scroll to Top
      </ScrollButton>
      
      {/* Button that scrolls to form */}
      <ScrollButton scrollType="form" className="btn btn-secondary">
        Go to Form
      </ScrollButton>
      
      {/* Link with scroll behavior */}
      <ScrollLink to="/contact" scrollType="form" className="nav-link">
        Contact Us
      </ScrollLink>
    </div>
  );
};
```

### 5. Manual Scroll Handler
```javascript
import { addScrollHandler } from '../utils/scrollUtils';

const MyComponent = () => {
  const buttonRef = useRef(null);

  useEffect(() => {
    if (buttonRef.current) {
      const cleanup = addScrollHandler(buttonRef.current, 'smart');
      return cleanup;
    }
  }, []);

  return (
    <button ref={buttonRef}>
      Custom Scroll Button
    </button>
  );
};
```

## ⚙️ Configuration

### Scroll Types
- **`'top'`** - Always scroll to top
- **`'form'`** - Scroll to form (or top if no form)
- **`'smart'`** - Auto-detect based on page type
- **CSS Selector** - Scroll to specific element (e.g., `'.hero-section'`)

### Form Page Detection
The system automatically detects form pages by URL:
- `/contact` → scrolls to form
- `/free-estimate` → scrolls to form
- `/schedule` → scrolls to form
- `/pond-consultations` → scrolls to form

### Scroll Behavior
- **Smooth scrolling** by default
- **Instant scrolling** available as option
- **Configurable delays** for page rendering
- **Fallback behavior** if target elements not found

## 🎨 Customization

### Adding New Form Pages
Edit `AdvancedScrollManager.js`:
```javascript
const pageScrollTargets = {
  '/contact': 'form, .contact-form, .contact-section',
  '/free-estimate': 'form, .estimate-form, .estimate-section',
  '/your-new-form-page': 'form, .your-form-class', // Add here
  // ...
};
```

### Custom Scroll Targets
```javascript
// Scroll to specific section
scrollToElement('.pricing-section');

// Scroll to element with custom alignment
scrollToElement('.hero', true, 'center');
```

### Disabling Auto-Scroll
```javascript
// In component
const { scrollToTop } = useScrollBehavior({ autoScroll: false });

// Or use ScrollToTop component for route-only scrolling
import ScrollToTop from './components/ScrollToTop';
```

## 🧪 Testing

### Test URLs
1. **Form Pages** (should scroll to form):
   - http://localhost:3000/contact
   - http://localhost:3000/free-estimate

2. **Regular Pages** (should scroll to top):
   - http://localhost:3000/pond-services
   - http://localhost:3000/pond-gallery
   - http://localhost:3000/blog

### Test Behaviors
- ✅ Click any button → should scroll to top
- ✅ Click any internal link → should scroll to top
- ✅ Navigate to form page → should scroll to form
- ✅ Navigate to regular page → should scroll to top
- ✅ Click form inputs → should NOT scroll

## 🚀 Benefits

### User Experience
- **Consistent behavior** across all pages
- **Smooth scrolling** for better UX
- **Smart form navigation** for better conversions
- **No jarring scroll jumps**

### Developer Experience
- **Easy to use** utility functions
- **Flexible configuration** options
- **React hooks** for component integration
- **Pre-built components** for common use cases

### SEO Benefits
- **Better user engagement** with smooth navigation
- **Improved form completion** rates
- **Consistent page behavior** for better UX signals

## 🔧 Troubleshooting

### Scroll Not Working
1. Check if `AdvancedScrollManager` is imported in App.js
2. Verify the component is rendered in the Router
3. Check browser console for JavaScript errors
4. Ensure target elements exist on the page

### Form Not Scrolling
1. Verify the page URL is in the form pages list
2. Check if form elements have the correct CSS selectors
3. Add custom selectors if needed

### Performance Issues
1. Reduce scroll delay if pages load quickly
2. Use instant scrolling for better performance
3. Disable auto-scroll for specific components if needed

The scroll management system is now fully implemented and will provide smooth, intelligent scrolling behavior throughout your website!
