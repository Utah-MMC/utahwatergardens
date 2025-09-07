import React from 'react';
import './ImageModal.css';

const ImageModal = ({ isOpen, onClose, imageSrc, imageAlt }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  React.useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <div className="image-modal-overlay" onClick={handleOverlayClick}>
      <div className="image-modal-content">
        <button className="image-modal-close" onClick={onClose}>
          ×
        </button>
        <img 
          src={imageSrc} 
          alt={imageAlt} 
          className="image-modal-image"
        />
        <div className="image-modal-caption">
          {imageAlt}
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
