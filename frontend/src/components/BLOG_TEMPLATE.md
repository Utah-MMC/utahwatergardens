# Utah Water Gardens Blog Template

## Overview
This document outlines the complete blog template system for Utah Water Gardens, including all visual effects, styling, and functionality.

## Visual Effects

### 1. Gradient Wipe Down Effect
**Purpose**: Creates an elegant visual transition from the top of every blog page.

**Implementation**:
```css
/* Gradient Wipe Effect from Top */
.blog-page::before,
.blog-post-page::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 200px;
  background: linear-gradient(180deg, 
    rgba(30, 64, 175, 0.1) 0%, 
    rgba(59, 130, 246, 0.08) 25%, 
    rgba(96, 165, 250, 0.05) 50%, 
    rgba(147, 197, 253, 0.03) 75%, 
    rgba(219, 234, 254, 0.01) 90%, 
    transparent 100%
  );
  z-index: 1;
  pointer-events: none;
  animation: gradientWipeDown 1.2s ease-out;
}

@keyframes gradientWipeDown {
  0% {
    height: 0;
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    height: 200px;
    opacity: 0.8;
  }
}
```

**Features**:
- **Duration**: 1.2 seconds
- **Easing**: ease-out for smooth deceleration
- **Colors**: Blue gradient matching site branding
- **Height**: 200px coverage area
- **Non-intrusive**: `pointer-events: none` ensures no interaction blocking

## Page Structure

### 1. Blog Main Page (`/blog`)
**File**: `frontend/src/pages/BlogPage.js`
**Styling**: `frontend/src/pages/BlogPage.css`

**Components**:
- Hero section with statistics
- Featured articles grid
- Category filtering system
- All articles grid
- Newsletter signup section

**Features**:
- Responsive grid layouts
- Category filtering with JavaScript
- Featured post highlighting
- Social sharing integration

### 2. Individual Blog Post (`/blog/:slug`)
**File**: `frontend/src/pages/BlogPost.js`
**Styling**: `frontend/src/pages/BlogPost.css`

**Components**:
- Article header with metadata
- Featured image
- Article content
- Author section
- Social sharing
- Related posts
- Back to blog navigation

## Styling System

### Color Palette
```css
:root {
  --primary: #1e40af;        /* Main blue */
  --primary-dark: #1e3a8a;   /* Darker blue */
  --secondary: #059669;      /* Green accent */
  --accent: #dc2626;         /* Red accent */
  --text-primary: #1f2937;   /* Dark gray text */
  --text-secondary: #6b7280; /* Medium gray text */
  --bg-primary: #ffffff;     /* White background */
  --bg-secondary: #f8fafc;   /* Light gray background */
}
```

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: 700-800 font weight
- **Body Text**: 400 font weight
- **Line Height**: 1.6 for readability

### Spacing System
- **Header Offset**: 120px padding-top (desktop)
- **Mobile Header Offset**: 100px (tablet), 90px (mobile)
- **Section Spacing**: 4rem between major sections
- **Card Padding**: 2rem internal padding

## Responsive Design

### Breakpoints
```css
/* Desktop */
@media (min-width: 769px) {
  /* Full desktop layout */
}

/* Tablet */
@media (max-width: 768px) {
  /* Tablet optimizations */
}

/* Mobile */
@media (max-width: 480px) {
  /* Mobile optimizations */
}
```

### Mobile Optimizations
- Reduced padding for header offset
- Stacked layouts for cards
- Touch-friendly button sizes
- Optimized font sizes
- Centered author sections

## Author Section Template

### Standard Author Information
```javascript
{
  author: 'Utah Water Gardens Team',
  bio: 'Utah Water Gardens is Utah\'s premier pond and water feature company, specializing in design, construction, and maintenance of beautiful water gardens throughout the state. With years of experience in Utah\'s unique climate, we provide expert guidance and professional services for all your pond needs.',
  avatar: '/images/utahWaterGardensLogo500x463.png',
  links: [
    { text: 'Contact Us', href: '/contact' },
    { text: 'Our Services', href: '/pond-services' },
    { text: 'View Our Work', href: '/pond-gallery' }
  ]
}
```

### Author Section Styling
- Circular avatar with blue border
- Professional bio text
- Call-to-action buttons
- Responsive layout (stacks on mobile)

## Content Structure

### Blog Post Data Format
```javascript
{
  id: 'unique-slug',
  title: 'Article Title',
  excerpt: 'Brief description...',
  slug: 'url-friendly-slug',
  date: 'YYYY-MM-DD', // Dynamic: today's date
  category: 'Category Name',
  readTime: 'X min read',
  image: '/images/image-path.webp',
  author: 'Utah Water Gardens Team',
  featured: true/false,
  tags: ['tag1', 'tag2', 'tag3'],
  content: 'HTML content...'
}
```

### Categories
- Maintenance
- Construction
- Design
- Plants
- Fish Care
- Climate
- Supplies
- Features

## Navigation Integration

### Header Menu
- Blog link added to main navigation
- Mobile-responsive hamburger menu
- Consistent with site navigation

### Breadcrumbs
- Home > Blog > Category (on post pages)
- Home > Blog (on main blog page)

## SEO Optimization

### Meta Tags
```javascript
<Helmet>
  <title>Article Title | Utah Water Gardens Blog</title>
  <meta name="description" content="Article excerpt" />
  <meta name="keywords" content="comma, separated, tags" />
  <link rel="canonical" href="https://utahwatergardens.com/blog/slug" />
</Helmet>
```

### Social Sharing
- Facebook sharing
- Twitter sharing
- LinkedIn sharing
- Dynamic URL and title sharing

## Performance Features

### Lazy Loading
- React.lazy() for component loading
- Suspense fallbacks
- Optimized image loading

### Animation Performance
- CSS animations (hardware accelerated)
- Smooth transitions
- Non-blocking animations

## Implementation Notes

### Adding New Blog Posts
1. Add post data to `BlogPage.js` posts array
2. Add content to `BlogPost.js` blogPosts object
3. Ensure proper image paths
4. Set date to `today` variable
5. Add appropriate category and tags

### Customizing Gradient Effect
- Modify colors in gradient array
- Adjust animation duration
- Change height coverage
- Modify easing function

### Responsive Adjustments
- Update breakpoints as needed
- Adjust padding values for different screens
- Test on various devices
- Ensure touch-friendly interactions

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid and Flexbox support required
- CSS animations support required
- ES6+ JavaScript features

## Maintenance
- Regular content updates
- Image optimization
- Performance monitoring
- SEO audit compliance
- Mobile responsiveness testing

---

**Last Updated**: January 2025
**Version**: 1.0
**Maintainer**: Utah Water Gardens Development Team
