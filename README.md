# Vishal M - QA Test Engineer Portfolio

A modern, responsive portfolio website showcasing my skills and experience as a QA Test Engineer.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean and professional design with smooth animations
- **Contact Form**: Functional contact form with email integration
- **Smooth Scrolling**: Enhanced navigation experience
- **Interactive Elements**: Hover effects and animations

## Contact Form Setup

The contact form is currently set up with a simulation mode for testing. To enable actual email sending, follow these steps:

### Option 1: EmailJS (Recommended)

1. **Sign up for EmailJS**:
   - Go to [emailjs.com](https://www.emailjs.com/)
   - Create a free account

2. **Set up Email Service**:
   - In EmailJS dashboard, go to "Email Services"
   - Add a new service (Gmail, Outlook, etc.)
   - Configure your email service

3. **Create Email Template**:
   - Go to "Email Templates"
   - Create a new template with variables:
     - `{{to_email}}` - recipient email
     - `{{from_name}}` - sender name
     - `{{from_email}}` - sender email
     - `{{subject}}` - email subject
     - `{{message}}` - email message

4. **Update JavaScript**:
   - Open `script.js`
   - Replace `YOUR_EMAILJS_PUBLIC_KEY` with your actual public key
   - Replace `YOUR_SERVICE_ID` with your service ID
   - Replace `YOUR_TEMPLATE_ID` with your template ID
   - Uncomment the EmailJS implementation section

### Option 2: Backend Service

For production use, consider implementing a backend service (Node.js, PHP, Python) to handle email sending more securely.

## File Structure

```
vishal-portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
├── README.md           # This file
├── vishal pic.jpg      # Profile image
└── Vishal passport picture.jpg
```

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript**: Interactive functionality
- **Font Awesome**: Icons
- **Google Fonts**: Typography (Poppins)
- **EmailJS**: Email service integration

## Customization

### Colors
The color scheme can be modified in `styles.css`:
- Primary: `#3498db`
- Secondary: `#2c3e50`
- Accent: `#f39c12`
- Gradient: `#667eea` to `#764ba2`

### Content
Update the following sections in `index.html`:
- Personal information
- Work experience
- Skills and technologies
- Projects
- Contact details

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

The website can be deployed to any static hosting service:
- GitHub Pages
- Netlify
- Vercel
- AWS S3
- Any web hosting provider

## Contact

For questions or support, contact me at: mvishalmanghat@gmail.com

## License

This project is open source and available under the [MIT License](LICENSE). 