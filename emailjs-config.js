// EmailJS Configuration
// Replace the values below with your actual EmailJS credentials

const EMAILJS_CONFIG = {
    // Your EmailJS Public Key (from EmailJS Dashboard → Account → API Keys)
    PUBLIC_KEY: "YOUR_EMAILJS_PUBLIC_KEY_HERE",
    
    // Your Email Service ID (from EmailJS Dashboard → Email Services)
    SERVICE_ID: "YOUR_SERVICE_ID_HERE",
    
    // Your Email Template ID (from EmailJS Dashboard → Email Templates)
    TEMPLATE_ID: "YOUR_TEMPLATE_ID_HERE",
    
    // Recipient Email (your email address)
    TO_EMAIL: "mvishalmanghat@gmail.com"
};

// Initialize EmailJS with your public key
emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

// Function to send email
function sendEmail(formData) {
    return emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATE_ID, {
        to_email: EMAILJS_CONFIG.TO_EMAIL,
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        reply_to: formData.email
    });
}

// Export for use in main script
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { EMAILJS_CONFIG, sendEmail };
} 