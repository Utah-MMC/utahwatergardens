# Utah Water Gardens - Complete Project

This repository contains a modern React web application and comprehensive web scraping tools for Utah Water Gardens, a premier pond and water feature company serving Salt Lake City and surrounding areas.

## 🏗️ Project Structure

```
utahwatergardens/
├── frontend/                 # React web application
│   ├── src/
│   │   ├── components/       # Reusable React components
│   │   ├── pages/           # Page components (4000+ files)
│   │   ├── data/            # Plant and service data
│   │   └── styles/          # CSS and styling
│   ├── public/
│   │   ├── images/          # Optimized images and assets
│   │   └── videos/          # Video content
│   ├── build/               # Production build
│   ├── package.json
│   └── vercel.json          # Deployment configuration
├── uwgscrape/               # Web scraping tools
│   ├── uwg_content_scraper.py
│   ├── uwg_image_scraper.py
│   ├── uwg_data/            # Scraped content
│   └── uwg_images/          # Downloaded images
├── docs/                    # Project documentation
├── assets/                  # Shared assets
└── README.md                # This file
```

## 🚀 Quick Start

### Frontend (React App)
```bash
cd frontend
npm install
npm start
# App runs on http://localhost:3000
```

### Web Scraper
```bash
cd uwgscrape
python uwg_content_scraper.py    # Scrape full content
python uwg_image_scraper.py      # Download all images
```

### Production Deployment
```bash
cd frontend
npm run build
vercel --prod                    # Deploy to https://utahwatergardens.com
```

## 📁 Detailed Structure

### Frontend (`/frontend`)
- **React 19** application with modern routing and React Router
- **Mobile-optimized design** with responsive breakpoints
- **Component-based architecture** with 23+ reusable components
- **SEO optimized** with meta tags, structured data, and sitemap
- **Performance optimized** with lazy loading and image optimization
- **Accessibility compliant** with ARIA labels and keyboard navigation

### Web Scraper (`/uwgscrape`)
- **Content Scraper** - Extracts HTML, text, and metadata
- **Image Scraper** - Downloads all website images
- **Data Export** - JSON, HTML, and text formats
- **Respectful scraping** with delays and error handling
- **URL resolution** for relative and absolute links

## 🛠️ Development

### Frontend Development
- Built with Create React App and React 19
- React Router for client-side navigation
- Mobile-first responsive design with CSS Grid and Flexbox
- SEO optimization with React Helmet Async
- Performance optimization with lazy loading and code splitting
- Accessibility features with ARIA labels and keyboard navigation

### Scraper Development
- Python 3.8+ required
- BeautifulSoup4 for HTML parsing
- Requests library for HTTP operations
- Modular architecture with error handling
- Respectful scraping with rate limiting

## 📊 Features

### Frontend
- **Homepage** - Hero section, About section, Services overview, and CTAs
- **Services Pages** - 6 main services with detailed descriptions
- **Plant & Fish Pages** - Comprehensive catalog with 4000+ pages
- **Service Area Pages** - Location-specific landing pages
- **Contact Page** - Forms and business information
- **Resources** - Care guides, tips, and troubleshooting
- **Mobile Optimized** - Compact design with hidden/minimized elements

### Scraper
- **Content Extraction** - HTML structure, text, and metadata
- **Image Downloading** - All website images with original filenames
- **Data Organization** - Structured output in multiple formats
- **Error Handling** - Continues processing despite individual failures
- **Rate Limiting** - Respectful scraping with delays

## 🔧 Configuration

### Frontend
- **SEO Configuration** - Meta tags, structured data, and sitemap
- **Domain Setup** - Configured for https://utahwatergardens.com
- **Redirects** - 307 redirects for www subdomain
- **Build Optimization** - Webpack configuration for production
- **Deployment** - Vercel configuration with proper headers

### Scraper
- **Output Directories** - Configurable folder structure
- **Request Headers** - Customizable user agents and headers
- **Download Delays** - Adjustable rate limiting
- **Error Handling** - Comprehensive logging and retry logic

## 📈 Deployment

### Frontend
- **Production Build**: `npm run build`
- **Deploy to Vercel**: `vercel --prod`
- **Live Site**: https://utahwatergardens.com
- **Features**: HTTPS, CDN, automatic deployments

### Scraper
- **Local Execution**: Run Python scripts directly
- **Scheduled Tasks**: Use cron jobs for regular scraping
- **Cloud Ready**: Compatible with AWS, GCP, Azure
- **Output**: Organized folders with scraped content

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary to Utah Water Gardens.

## 📞 Support

For technical support or questions:
- **Utah Water Gardens**: (801) 590-8516
- **Email**: contact@utahwatergardens.com
- **Address**: 5911 S 1300 E, Salt Lake City, UT 84121
- **Website**: https://utahwatergardens.com

## 🎯 Recent Updates

### Mobile Optimization (Latest)
- **Compact Hero Section** - Reduced from 100vh to 250px on mobile
- **Hidden Elements** - Subtitle, buttons, and indicators hidden on mobile
- **Optimized Content** - Smaller fonts and tighter spacing
- **Better UX** - More content visible without scrolling

### SEO & Performance
- **Domain Configuration** - Set up for https://utahwatergardens.com
- **Redirects** - 307 redirects for www subdomain
- **Structured Data** - Updated business information and hours
- **Mobile-First Design** - Responsive breakpoints and optimizations
