# WordPress Subdomain Setup Guide for Utah Water Gardens Blog

## Overview
This guide will help you set up your Utah Water Gardens blog as a subdomain (blog.utahwatergardens.com) using WordPress. The blog is designed to be easily integrated with WordPress while maintaining the custom water garden theme.

## Prerequisites
- Domain: utahwatergardens.com
- Web hosting with cPanel or similar control panel
- WordPress installed on your main domain (optional but recommended)

## Step 1: Create the Subdomain

### Option A: Using cPanel
1. Log into your hosting control panel (cPanel)
2. Find "Subdomains" in the Domains section
3. Create a new subdomain:
   - Subdomain: `blog`
   - Domain: `utahwatergardens.com`
   - Document Root: `public_html/blog` (or your preferred directory)
4. Click "Create"

### Option B: Using DNS Management
1. Access your domain's DNS settings
2. Add a new A record:
   - Name: `blog`
   - Value: Your server's IP address
   - TTL: 3600 (or default)

## Step 2: Install WordPress on the Subdomain

### Method 1: One-Click Install (Recommended)
1. In cPanel, find "WordPress" or "Website" section
2. Click "Install WordPress"
3. Choose your subdomain: `blog.utahwatergardens.com`
4. Set up admin credentials
5. Choose a theme (you can customize later)

### Method 2: Manual Installation
1. Download WordPress from wordpress.org
2. Upload files to your subdomain directory
3. Create a MySQL database for the blog
4. Run the WordPress installation script

## Step 3: Customize the Theme

### Option A: Use a Custom Theme
1. Upload the custom blog files to your WordPress theme directory:
   ```
   wp-content/themes/utah-water-gardens-blog/
   ```

2. Files to upload:
   - `index.html` → `index.php` (convert to WordPress template)
   - `styles.css` → `style.css` (WordPress theme stylesheet)
   - `theme.css` → `theme.css`
   - Create `functions.php` for WordPress integration

### Option B: Customize Existing Theme
1. Choose a WordPress theme (Twenty Twenty-Four recommended)
2. Use the Customizer to:
   - Upload your logo
   - Set colors to match your brand (blue/green theme)
   - Customize typography
   - Add custom CSS

## Step 4: WordPress Theme Integration

### Create WordPress Template Files

#### 1. style.css (Theme Header)
```css
/*
Theme Name: Utah Water Gardens Blog
Description: Custom theme for Utah Water Gardens blog
Author: Utah Water Gardens
Version: 1.0
*/

/* Import your existing styles */
@import url('theme.css');
```

#### 2. functions.php
```php
<?php
// Theme setup
function utah_water_gardens_setup() {
    // Add theme support
    add_theme_support('post-thumbnails');
    add_theme_support('title-tag');
    add_theme_support('custom-logo');
    
    // Register navigation menus
    register_nav_menus(array(
        'primary' => 'Primary Menu',
        'footer' => 'Footer Menu'
    ));
}
add_action('after_setup_theme', 'utah_water_gardens_setup');

// Enqueue scripts and styles
function utah_water_gardens_scripts() {
    wp_enqueue_style('utah-water-gardens-style', get_stylesheet_uri());
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
}
add_action('wp_enqueue_scripts', 'utah_water_gardens_scripts');

// Custom post types for blog categories
function create_water_garden_post_types() {
    register_post_type('pond_design', array(
        'labels' => array(
            'name' => 'Pond Design',
            'singular_name' => 'Pond Design Article'
        ),
        'public' => true,
        'has_archive' => true,
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt')
    ));
    
    register_post_type('fish_care', array(
        'labels' => array(
            'name' => 'Fish Care',
            'singular_name' => 'Fish Care Article'
        ),
        'public' => true,
        'has_archive' => true,
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt')
    ));
}
add_action('init', 'create_water_garden_post_types');
?>
```

#### 3. index.php (Main Template)
```php
<?php get_header(); ?>

<main class="blog-post">
    <div class="container">
        <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
            <article>
                <header class="article-header">
                    <div class="article-meta">
                        <span class="article-category"><?php the_category(', '); ?></span>
                        <span class="article-date"><?php the_date(); ?></span>
                    </div>
                    <h1><?php the_title(); ?></h1>
                    <p class="article-excerpt"><?php the_excerpt(); ?></p>
                </header>

                <div class="article-content">
                    <?php if (has_post_thumbnail()) : ?>
                        <?php the_post_thumbnail('large', array('class' => 'article-hero-image')); ?>
                    <?php endif; ?>
                    
                    <?php the_content(); ?>
                </div>
            </article>
        <?php endwhile; endif; ?>
    </div>
</main>

<?php get_footer(); ?>
```

#### 4. header.php
```php
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

<header class="site-header">
    <div class="header-flex">
        <div class="logo">
            <?php if (has_custom_logo()) : ?>
                <?php the_custom_logo(); ?>
            <?php else : ?>
                <img src="<?php echo get_template_directory_uri(); ?>/images/utahWaterGardensLogoHoriz.webp" alt="Utah Water Gardens" class="logo-img">
                <span class="logo-text">Blog</span>
            <?php endif; ?>
        </div>
        
        <nav>
            <?php
            wp_nav_menu(array(
                'theme_location' => 'primary',
                'container' => false,
                'menu_class' => 'nav-menu'
            ));
            ?>
        </nav>
    </div>
</header>
```

#### 5. footer.php
```php
<footer class="site-footer">
    <div class="container">
        <div class="footer-content">
            <div class="footer-section">
                <h3>Utah Water Gardens</h3>
                <p>Creating beautiful water gardens and ponds throughout Utah since 2010.</p>
                <div class="footer-links">
                    <a href="https://utahwatergardens.com">Main Website</a>
                    <a href="https://utahwatergardens.com/contact">Contact Us</a>
                    <a href="https://utahwatergardens.com/services">Services</a>
                </div>
            </div>
            <!-- Add more footer sections as needed -->
        </div>
        <div class="footer-bottom">
            <p>&copy; <?php echo date('Y'); ?> Utah Water Gardens. All rights reserved.</p>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
```

## Step 5: Content Migration

### 1. Create Blog Categories
In WordPress Admin:
1. Go to Posts → Categories
2. Create categories matching your blog structure:
   - Pond Design
   - Water Features
   - Fish Care
   - Aquatic Plants
   - Maintenance
   - Utah Climate

### 2. Import Content
1. Convert your HTML articles to WordPress posts
2. Use the WordPress editor to format content
3. Add featured images for each post
4. Assign appropriate categories and tags

### 3. Set Up Navigation
1. Go to Appearance → Menus
2. Create a primary menu with your blog categories
3. Add links to your main website

## Step 6: SEO Optimization

### 1. Install SEO Plugin
- Install Yoast SEO or RankMath
- Configure for your blog subdomain
- Set up XML sitemap

### 2. Update Meta Information
- Update site title and description
- Configure Open Graph settings
- Set up canonical URLs

### 3. Google Analytics
- Add Google Analytics tracking code
- Set up goals for blog engagement
- Monitor traffic from main website

## Step 7: Cross-Domain Integration

### 1. Link Between Sites
- Add blog link to main website navigation
- Include "Back to Main Site" links in blog
- Cross-link related content

### 2. Consistent Branding
- Use same logo and colors
- Maintain consistent messaging
- Share contact information

### 3. Newsletter Integration
- Set up email list signup
- Connect to your main business email system
- Create automated email sequences

## Step 8: Testing and Launch

### 1. Test All Functionality
- Check all links work correctly
- Test contact forms
- Verify mobile responsiveness
- Test newsletter signup

### 2. Performance Optimization
- Optimize images
- Enable caching
- Minify CSS/JS
- Test page load speeds

### 3. Launch Checklist
- [ ] Subdomain is working
- [ ] WordPress is installed and configured
- [ ] Theme is customized
- [ ] Content is migrated
- [ ] SEO is configured
- [ ] Analytics is tracking
- [ ] Links to main site are working
- [ ] Mobile responsive
- [ ] Contact forms working
- [ ] Newsletter signup working

## Maintenance

### Regular Tasks
1. **Content Updates**: Post new articles regularly
2. **Plugin Updates**: Keep WordPress and plugins updated
3. **Backup**: Regular backups of database and files
4. **Security**: Monitor for security issues
5. **Performance**: Regular speed testing and optimization

### Content Strategy
1. **Weekly Posts**: Aim for 1-2 posts per week
2. **Seasonal Content**: Create content relevant to Utah seasons
3. **Local Focus**: Emphasize Utah-specific water garden topics
4. **Expert Content**: Share your knowledge and experience
5. **Customer Stories**: Feature successful projects

## Support Resources

- WordPress.org documentation
- Your hosting provider's support
- Utah Water Gardens team for content guidance
- SEO best practices for local businesses

## Next Steps

1. Set up the subdomain following this guide
2. Install and configure WordPress
3. Customize the theme to match your brand
4. Migrate existing content
5. Create a content calendar for regular posts
6. Monitor performance and engagement
7. Continuously improve based on analytics

This blog will help establish Utah Water Gardens as the go-to resource for water garden information in Utah, driving traffic to your main website and generating leads for your business. 