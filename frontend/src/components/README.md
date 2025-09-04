# PageHero Component

The `PageHero` component provides a consistent hero section for all pages except the home page. It creates a professional, visually appealing header with customizable content.

## Usage

```jsx
import PageHero from '../components/PageHero.js';

// Basic usage with title only
<PageHero title="Page Title" />

// With subtitle
<PageHero 
  title="Page Title"
  subtitle="Page subtitle or description"
/>

// With custom background image
<PageHero 
  title="Page Title"
  subtitle="Page subtitle"
  backgroundImage="/images/custom-image.jpg"
  backgroundImageAlt="Description of the background image"
/>

// Without background image (solid color background)
<PageHero 
  title="Page Title"
  subtitle="Page subtitle"
  showBackgroundImage={false}
/>
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `title` | string | Yes | - | The main heading for the page |
| `subtitle` | string | No | - | Optional subtitle text below the title |
| `backgroundImage` | string | No | `/images/pondMaintenance.webp` | Path to background image |
| `backgroundImageAlt` | string | No | `'Beautiful water garden maintenance'` | Alt text for background image |
| `showBackgroundImage` | boolean | No | `true` | Whether to show background image or use solid color |

## Features

- **Responsive Design**: Automatically adjusts for different screen sizes
- **Consistent Styling**: Matches the site's blue theme colors
- **Accessibility**: Includes proper alt text for images
- **Flexible**: Can be used with or without background images
- **Professional Look**: Clean, modern design that enhances page appearance

## Examples

### Services Page
```jsx
<PageHero 
  title="Our Services"
  subtitle="Complete pond and water feature solutions for Utah properties"
  backgroundImage="/images/IMG_2770.jpg"
  backgroundImageAlt="Professional pond construction services"
/>
```

### About Page
```jsx
<PageHero 
  title="About Utah Water Gardens"
  subtitle="Your trusted partner for pond and water feature solutions in Utah"
  backgroundImage="/images/IMG_2770.jpg"
  backgroundImageAlt="Beautiful backyard pond with stone bridge"
/>
```

### Contact Page
```jsx
<PageHero 
  title="Contact Us"
  subtitle="Get in touch for a consultation or quote on your pond project"
  backgroundImage="/images/IMG_2770.jpg"
  backgroundImageAlt="Professional pond consultation services"
/>
```

## Styling

The component uses CSS classes that can be customized in `PageHero.css`:

- `.page-hero`: Main container
- `.page-hero-background`: Background image container
- `.page-hero-image`: Background image styling
- `.page-hero-overlay`: Overlay for text readability
- `.page-hero-content`: Content container
- `.page-hero-title`: Main title styling
- `.page-hero-subtitle`: Subtitle styling

## Notes

- The component automatically includes proper padding to account for the fixed header
- Background images are automatically cropped and centered for optimal display
- The overlay ensures text remains readable over any background image
- Responsive breakpoints are included for mobile and tablet devices
