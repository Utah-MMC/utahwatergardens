# Page Template Migration Guide

## Overview

This guide helps you migrate existing pages to use the new `PageTemplate` component, which standardizes hero sections, wave effects, and gradient wrappers across all pages.

## Benefits of Using PageTemplate

1. **Consistent Design**: All pages will have the same hero structure, wave effects, and gradient
2. **Easier Maintenance**: Update hero styles in one place (PageTemplate.css) instead of 40+ individual CSS files
3. **Mobile Optimization**: Built-in mobile responsive styles
4. **SEO Integration**: Automatic SEO component integration
5. **Reduced Code Duplication**: Eliminate duplicate hero, wave, and gradient code

## Migration Steps

### Step 1: Import PageTemplate

Replace your existing imports:
```javascript
// OLD
import SEO from '../components/SEO';
import StandardHero from '../components/StandardHero';

// NEW
import PageTemplate from '../components/PageTemplate';
```

### Step 2: Replace Page Structure

**BEFORE (Example from AboutPage.js):**
```javascript
return (
  <>
    <SEO 
      title="About Us - Utah Water Gardens"
      description="Learn about Utah Water Gardens..."
      keywords="about, team, mission"
      canonical="https://utahwatergardens.com/about"
    />
    
    <div className="about-page">
      <StandardHero
        title="About Utah Water Gardens"
        subtitle="Your trusted pond and water feature specialists"
        backgroundImage="/images/about-hero.jpg"
      />
      
      <div className="hero-wave-attached">
        {/* Wave SVG */}
      </div>
      
      <div className="main-content-gradient">
        {/* Page content */}
      </div>
    </div>
  </>
);
```

**AFTER:**
```javascript
return (
  <PageTemplate
    title="About Us - Utah Water Gardens"
    description="Learn about Utah Water Gardens..."
    keywords="about, team, mission"
    canonical="https://utahwatergardens.com/about"
    heroTitle="About Utah Water Gardens"
    heroSubtitle="Your trusted pond and water feature specialists"
    heroBackgroundImage="/images/about-hero.jpg"
    heroBackgroundImageAlt="About Utah Water Gardens team"
    primaryButtonText="CONTACT US"
    primaryButtonLink="/contact"
    secondaryButtonText="OUR SERVICES"
    secondaryButtonLink="/pond-services"
    className="about-page"
  >
    {/* Page content goes here - no need for wave or gradient wrapper */}
  </PageTemplate>
);
```

### Step 3: Remove Duplicate CSS

After migrating, you can remove these CSS classes from your page-specific CSS files:

**Remove from page CSS files:**
- `.hero-section`, `.page-hero`, `.standard-hero` styles
- `.hero-wave-attached` styles
- `.main-content-gradient` styles
- Mobile hero override styles
- Wave animation styles

**Keep in page CSS files:**
- Page-specific content styles
- Unique layout styles
- Custom component styles

### Step 4: Update CSS Imports

Add the global styles to your main CSS file:
```javascript
// In your main App.js or index.js
import './styles/global.css';
```

## PageTemplate Props Reference

### Required Props
- `title` - Page title for SEO
- `description` - Meta description
- `heroTitle` - Main hero heading

### Optional Props
- `keywords` - SEO keywords
- `canonical` - Canonical URL
- `heroSubtitle` - Hero subtitle text
- `heroBackgroundImage` - Hero background image (default: main pond image)
- `heroBackgroundImageAlt` - Alt text for hero image
- `showHeroButtons` - Show/hide hero buttons (default: true)
- `primaryButtonText` - Primary button text (default: "TALK TO EXPERT")
- `primaryButtonLink` - Primary button link (default: phone number)
- `secondaryButtonText` - Secondary button text (default: "POND SERVICES")
- `secondaryButtonLink` - Secondary button link (default: "/pond-services")
- `showWave` - Show/hide wave divider (default: true)
- `showGradient` - Show/hide gradient wrapper (default: true)
- `className` - Additional CSS class for the page

## Migration Examples

### Simple Page (like FAQ)
```javascript
<PageTemplate
  title="FAQ - Utah Water Gardens"
  description="Frequently asked questions about pond services"
  heroTitle="Frequently Asked Questions"
  heroSubtitle="Get answers to common pond and water feature questions"
>
  <div className="faq-content">
    {/* FAQ content */}
  </div>
</PageTemplate>
```

### Service Page (like Pond Services)
```javascript
<PageTemplate
  title="Pond Services - Utah Water Gardens"
  description="Professional pond design, construction, and maintenance"
  heroTitle="Professional Pond Services"
  heroSubtitle="From design to maintenance, we handle all your pond needs"
  primaryButtonText="GET FREE ESTIMATE"
  primaryButtonLink="/free-estimate"
  secondaryButtonText="VIEW GALLERY"
  secondaryButtonLink="/pond-gallery"
>
  <div className="services-content">
    {/* Services content */}
  </div>
</PageTemplate>
```

### Page Without Hero Buttons
```javascript
<PageTemplate
  title="Contact - Utah Water Gardens"
  description="Contact us for pond services"
  heroTitle="Contact Us"
  heroSubtitle="Get in touch for your pond project"
  showHeroButtons={false}
>
  <div className="contact-content">
    {/* Contact form */}
  </div>
</PageTemplate>
```

### Page Without Gradient
```javascript
<PageTemplate
  title="Blog - Utah Water Gardens"
  description="Pond care tips and guides"
  heroTitle="Pond Care Blog"
  showGradient={false}
>
  <div className="blog-content">
    {/* Blog content */}
  </div>
</PageTemplate>
```

## Files to Update

### High Priority (Most Common Patterns)
1. `AboutPage.js` - Already uses StandardHero
2. `ResourcesPage.js` - Has custom hero
3. `ShopPage.js` - Has custom hero
4. `PlantsFishPage.js` - Has custom hero
5. `PondServicesPage.js` - Has custom hero

### Medium Priority
6. `ContactPage.js`
7. `FAQPage.js`
8. `PondGalleryPage.js`
9. `BlogPage.js`
10. All service area pages in `ServiceAreas/`

### Low Priority (Simple Pages)
11. Individual service pages (PondMaintenancePage.js, etc.)
12. Plant detail pages
13. Blog post pages

## Testing Checklist

After migrating each page:

- [ ] Hero section displays correctly
- [ ] Wave effect appears under hero
- [ ] Gradient background shows
- [ ] Mobile responsive design works
- [ ] SEO meta tags are correct
- [ ] Hero buttons work (if enabled)
- [ ] Page content displays properly
- [ ] No console errors
- [ ] Page loads without issues

## Rollback Plan

If you need to rollback a page:

1. Keep a backup of the original page file
2. Revert the import changes
3. Restore the original page structure
4. Re-add any page-specific CSS that was removed

## Benefits After Migration

1. **Consistent Updates**: Change hero styles once, apply everywhere
2. **Better Mobile Experience**: Standardized mobile optimizations
3. **Easier Maintenance**: One place to update common elements
4. **Reduced Bundle Size**: Less duplicate CSS
5. **Better Performance**: Optimized animations and styles

## Support

If you encounter issues during migration:

1. Check the console for errors
2. Verify all required props are provided
3. Ensure CSS imports are correct
4. Test on mobile devices
5. Compare with working pages like HomePage.js

## Next Steps

After completing the migration:

1. Update the global CSS file with any new common patterns
2. Create additional template variants if needed (e.g., PageTemplateNoHero)
3. Document any page-specific customizations
4. Set up automated testing for the template system
