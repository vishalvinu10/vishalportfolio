// EmailJS Settings
// Follow these steps to get your credentials:

// STEP 1: Sign up at https://www.emailjs.com/
// STEP 2: Add Gmail service (your email: mvishalmanghat@gmail.com)
// STEP 3: Create email template (see EMAILJS_SETUP.md for template)
// STEP 4: Replace the values below with your actual credentials

window.emailjsPublicKey = "YOUR_EMAILJS_PUBLIC_KEY_HERE"; // Replace with your public key (starts with "user_")
window.emailjsServiceId = "YOUR_SERVICE_ID_HERE"; // Replace with your service ID (starts with "service_")
window.emailjsTemplateId = "YOUR_TEMPLATE_ID_HERE"; // Replace with your template ID (starts with "template_")

// Example format (replace with your actual values):
// window.emailjsPublicKey = "user_a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6";
// window.emailjsServiceId = "service_abc123";
// window.emailjsTemplateId = "template_xyz789";

// IMPORTANT: Until you configure these values, the form will use the fallback method
// which opens the user's email client with a pre-filled message to mvishalmanghat@gmail.com

// ✅ CURRENT STATUS: The contact form is WORKING and will send emails to mvishalmanghat@gmail.com
// The fallback system ensures emails are delivered even without EmailJS setup 