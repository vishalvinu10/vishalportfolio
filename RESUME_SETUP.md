# Resume Setup Instructions

## Adding Your Resume

To enable the "Download Resume" functionality:

1. **Copy your resume file** from:
   ```
   C:\Users\mvish\OneDrive\Desktop\vishal\Vishal's Resume.pdf
   ```

2. **Paste it into your portfolio directory**:
   ```
   C:\Users\mvish\vishal-portfolio\Vishal's Resume.pdf
   ```

3. **Verify the file name** matches exactly:
   - File should be named: `Vishal's Resume.pdf`
   - Make sure the apostrophe and spaces are preserved

## Resume Button Locations

The download resume button has been added to:

1. **Hero Section**: Main call-to-action area alongside "Get In Touch" and "View Projects"
2. **Contact Section**: In the contact information area with other contact details

## Button Features

- **Download attribute**: Forces download instead of opening in browser
- **Icon**: Download icon from Font Awesome
- **Styling**: Green color to distinguish from other buttons
- **Hover effects**: Smooth animations and color changes
- **Responsive**: Works on all device sizes

## Testing

After adding the resume file:

1. Open `index.html` in your browser
2. Click the "Download Resume" button in the hero section
3. Or scroll to the contact section and click the resume link
4. The PDF should download to your default downloads folder

## File Requirements

- **Format**: PDF (recommended for professional use)
- **Size**: Keep under 5MB for fast loading
- **Naming**: Use the exact filename: `Vishal's Resume.pdf`
- **Location**: Place in the same directory as `index.html`

## Troubleshooting

If the download doesn't work:

1. **Check file path**: Ensure the PDF is in the same folder as `index.html`
2. **Check filename**: Verify it matches exactly: `Vishal's Resume.pdf`
3. **Browser settings**: Some browsers may block downloads - check your browser settings
4. **File permissions**: Ensure the PDF file is not read-only

## Alternative Setup

If you prefer a different filename or location:

1. Rename your resume file to `Vishal's Resume.pdf`
2. Or update the HTML links to match your preferred filename:
   ```html
   <a href="your-resume-filename.pdf" download>
   ``` 