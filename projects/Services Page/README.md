# Utah Water Gardens - Services Page

A modern React website for Utah Water Gardens, showcasing their professional pond services including cleanings, maintenance, construction, repair, and dredging.

## Features

- **Professional Design**: Modern, responsive design with beautiful UI
- **Service Showcase**: Detailed service cards with pricing and features
- **Contact Forms**: Integrated contact forms for service requests
- **SEO Optimized**: Proper meta tags, structured data, and semantic HTML
- **Mobile Responsive**: Works perfectly on all device sizes
- **Fast Loading**: Optimized for performance

## Services Offered

- **Pond Cleanings**: Comprehensive cleaning services
- **Pond Maintenance**: Customized maintenance plans
- **Pond Construction**: Professional pond building
- **Pond Repair & Rebuild**: Expert repair services
- **Pond Dredging**: Professional dredging for larger water features
- **Pond Consultations**: Expert assessment and recommendations

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd "Services Page"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

To create a production build:

```bash
npm run build
```

This creates an optimized build in the `build` folder.

## Project Structure

```
Services Page/
├── public/
│   ├── index.html
│   └── images/
│       └── utahWaterGardensLogoHoriz.webp
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── Services.js
│   │   ├── Results.js
│   │   ├── Process.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Customization

### Updating Services

Edit the `services` array in `src/components/Services.js` to modify service offerings, pricing, and features.

### Contact Information

Update contact details in `src/components/Contact.js` and `public/index.html`.

### Styling

Modify `src/index.css` to customize colors, fonts, and layout. The site uses CSS custom properties for easy theming.

### Form Integration

The contact forms are currently set up to work with Formspree. To use a different form service:

1. Update the form action URLs in the components
2. Modify the form submission handlers in `App.js`

## Technologies Used

- **React 18**: Modern React with hooks
- **CSS3**: Custom styling with CSS Grid and Flexbox
- **Google Fonts**: Inter font family
- **Formspree**: Form handling (can be replaced with any form service)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for Utah Water Gardens. All rights reserved.

## Contact

For questions about this website or Utah Water Gardens services:

- **Phone**: (801) 590-8516
- **Email**: contact@utahwatergardens.com
- **Address**: 5911 S 1300 E, Salt Lake City, Utah 84121
- **Website**: https://utahwatergardens.com 