# Utah Water Gardens - Development Guide

## CTA Component System

To ensure consistency across all pages, we've created a reusable CTA component system that automatically uses the correct pond image.

### CTA Component

The `CTA` component automatically uses the pond image (`IMG_8910-rotated-topaz-enhance-2.1x.jpeg`) and provides consistent styling.

#### Usage:

```jsx
import CTA from '../components/CTA.js';

// Basic usage
<CTA />

// Customized usage
<CTA 
  title="Ready to Get Started?"
  subtitle="Contact us today for a consultation"
  cityName="Salt Lake City" // Optional - customizes title
  primaryButtonText="Call (801) 590-8516"
  primaryButtonHref="tel:(801) 590-8516"
  secondaryButtonText="Send Message"
  secondaryButtonLink="/contact"
  className="contact-cta"
/>
```

#### Props:
- `title` (string): CTA heading (default: "Ready to Get Started?")
- `subtitle` (string): CTA description (default: "Contact us today for a consultation or quote on your pond project.")
- `cityName` (string): If provided, customizes title to "Ready to Get Started in [City]?"
- `primaryButtonText` (string): Primary button text (default: "Call (801) 590-8516")
- `primaryButtonHref` (string): Primary button link (default: "tel:(801) 590-8516")
- `secondaryButtonText` (string): Secondary button text (default: "Send Message")
- `secondaryButtonLink` (string): Secondary button link (default: "/contact")
- `className` (string): CSS class name (default: "contact-cta")

### Page Template

For new pages, use the `PageTemplate` component to ensure consistency:

```jsx
import PageTemplate from '../templates/PageTemplate.js';

const MyNewPage = () => {
  return (
    <PageTemplate
      title="My New Page"
      subtitle="Description of my new page"
      backgroundImage="/images/my-hero-image.jpg"
      backgroundImageAlt="Description of hero image"
      ctaTitle="Ready to Get Started?"
      ctaSubtitle="Contact us today for a consultation"
      ctaCityName="Salt Lake City" // Optional
      ctaSecondaryButtonText="Get Quote" // Optional
    >
      <section className="my-content">
        <h2>My Content Section</h2>
        <p>Your page content goes here...</p>
      </section>
    </PageTemplate>
  );
};
```

### Service Area Pages

Service area pages are automatically generated using the `ServiceAreaGenerator.js` file. The generator now uses the CTA component, so all new service area pages will automatically have the correct pond image.

### Important Notes:

1. **Always use the CTA component** instead of creating custom CTA sections
2. **The pond image is automatically applied** - no need to specify it manually
3. **Full-width styling is included** - the CTA will extend to screen edges on desktop
4. **Responsive design is built-in** - works on all device sizes
5. **Consistent branding** - all CTAs will have the same look and feel

### Migration Guide:

If you're updating existing pages:

1. Import the CTA component: `import CTA from '../components/CTA.js';`
2. Replace existing CTA sections with: `<CTA cityName="City Name" />`
3. Remove any custom background image styling
4. Remove any custom CTA CSS (the component includes all necessary styles)

This system ensures that all pages maintain visual consistency and automatically use the correct pond image for their CTA sections.
