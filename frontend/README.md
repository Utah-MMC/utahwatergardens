# Utah Water Gardens - Frontend

A modern React web application for Utah Water Gardens, featuring responsive design and comprehensive business information.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test
```

## 🏗️ Project Structure

```
frontend/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Header.js       # Navigation header
│   │   └── Footer.js       # Site footer
│   ├── pages/              # Page components
│   │   ├── HomePage.js     # Landing page
│   │   ├── ServicesPage.js # Services overview
│   │   ├── AboutPage.js    # Company information
│   │   ├── ContactPage.js  # Contact forms
│   │   ├── ShopPage.js     # Product catalog
│   │   └── ResourcesPage.js # Customer resources
│   ├── App.js              # Main application component
│   ├── App.css             # Global styles
│   └── index.js            # Application entry point
├── public/                 # Static assets
├── blog/                   # Blog content
├── package.json            # Dependencies and scripts
└── README.md               # This file
```

## 🎨 Features

- **Responsive Design**: Optimized for all device sizes
- **Modern React**: Built with React 19 and latest features
- **Routing**: Client-side routing with React Router
- **Component Architecture**: Modular, reusable components
- **SEO Optimized**: Meta tags and structured content
- **Performance**: Optimized loading and rendering

## 🛠️ Technologies

- **React 19.1.1** - Modern React with latest features
- **React Router 7.8.2** - Client-side routing
- **CSS3** - Modern styling with responsive design
- **Create React App** - Build tooling and configuration

## 📱 Pages

### Home Page (`/`)
- Company overview and value proposition
- Featured services and products
- Call-to-action sections
- Customer testimonials

### Services (`/services`)
- Comprehensive service offerings
- Service descriptions and pricing
- Portfolio examples
- Service area information

### About (`/about`)
- Company history and mission
- Team information
- Company values and culture
- Certifications and awards

### Contact (`/contact`)
- Contact forms and information
- Service area map
- Business hours
- Emergency contact options

### Shop (`/shop`)
- Product catalog
- Pricing information
- Order forms
- Product categories

### Resources (`/resources`)
- Customer guides and tips
- Maintenance information
- FAQ section
- Educational content

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:
```env
REACT_APP_API_URL=your_api_url
REACT_APP_GOOGLE_ANALYTICS_ID=your_ga_id
```

### Build Configuration
- Production builds are optimized for performance
- Static assets are automatically optimized
- Service worker ready for PWA features

## 📊 Performance

- **Lighthouse Score**: Optimized for 90+ scores
- **Bundle Size**: Optimized and code-split
- **Loading Speed**: Fast initial page loads
- **SEO**: Search engine optimized

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
vercel --prod
```

### Netlify
```bash
npm run build
# Upload build folder to Netlify
```

### Traditional Hosting
```bash
npm run build
# Upload build folder to your web server
```

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Generate coverage report
npm test -- --coverage
```

## 📝 Development Guidelines

### Code Style
- Use functional components with hooks
- Follow React best practices
- Maintain consistent naming conventions
- Add proper PropTypes or TypeScript

### Component Structure
```jsx
import React from 'react';
import './ComponentName.css';

const ComponentName = ({ prop1, prop2 }) => {
  // Component logic here
  
  return (
    <div className="component-name">
      {/* JSX content */}
    </div>
  );
};

export default ComponentName;
```

### CSS Organization
- Use component-specific CSS files
- Follow BEM methodology for class naming
- Maintain consistent spacing and typography
- Use CSS variables for theme colors

## 🔍 SEO Features

- Meta tags for all pages
- Structured data markup
- Semantic HTML structure
- Optimized images with alt text
- Sitemap generation ready

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: 320px, 768px, 1024px, 1440px
- Touch-friendly interface
- Optimized for all screen sizes

## 🚀 Future Enhancements

- [ ] Blog system integration
- [ ] E-commerce functionality
- [ ] Customer portal
- [ ] Appointment booking system
- [ ] Live chat integration
- [ ] Advanced analytics dashboard

## 📞 Support

For technical support or questions:
- Email: icondumpsters@gmail.com
- Phone: (801) 918-6000
- Website: www.icondumpsters.com

## 📄 License

This project is proprietary to Utah Water Gardens.
