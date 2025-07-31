# EmailJS Setup Guide

This guide will help you set up EmailJS to enable actual email sending from your contact form to `mvishalmanghat@gmail.com`.

## 🚀 **Step-by-Step Setup**

### **Step 1: Create EmailJS Account**

1. **Go to EmailJS**: Visit [emailjs.com](https://www.emailjs.com/)
2. **Sign Up**: Create a free account
3. **Verify Email**: Check your email and verify your account

### **Step 2: Add Email Service**

1. **Login to EmailJS Dashboard**
2. **Go to "Email Services"** in the left sidebar
3. **Click "Add New Service"**
4. **Choose your email provider**:
   - **Gmail** (Recommended for your Gmail account)
   - **Outlook**
   - **Yahoo**
   - **Custom SMTP**

#### **For Gmail Setup:**
1. Select **"Gmail"** as service
2. **Connect your Gmail account** (`mvishalmanghat@gmail.com`)
3. **Authorize EmailJS** to send emails on your behalf
4. **Note the Service ID** (you'll need this later)

### **Step 3: Create Email Template**

1. **Go to "Email Templates"** in the left sidebar
2. **Click "Create New Template"**
3. **Template Name**: "Portfolio Contact Form"
4. **Subject**: "New Message from Portfolio: {{subject}}"
5. **Content**: Use this template:

```html
<!DOCTYPE html>
<html>
<head>
    <title>New Portfolio Message</title>
</head>
<body>
    <h2>New Message from Portfolio Contact Form</h2>
    
    <table style="width: 100%; border-collapse: collapse;">
        <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Name:</td>
            <td style="padding: 10px; border: 1px solid #ddd;">{{from_name}}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Email:</td>
            <td style="padding: 10px; border: 1px solid #ddd;">{{from_email}}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Subject:</td>
            <td style="padding: 10px; border: 1px solid #ddd;">{{subject}}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Message:</td>
            <td style="padding: 10px; border: 1px solid #ddd;">{{message}}</td>
        </tr>
    </table>
    
    <p style="margin-top: 20px; color: #666;">
        This message was sent from your portfolio contact form.
        You can reply directly to this email to respond to {{from_name}}.
    </p>
</body>
</html>
```

6. **Save the template** and note the Template ID

### **Step 4: Get Your Public Key**

1. **Go to "Account"** in the left sidebar
2. **Click "API Keys"**
3. **Copy your Public Key** (starts with "user_")

### **Step 5: Update Your JavaScript**

1. **Open `script.js`** in your portfolio
2. **Replace the placeholder values**:

```javascript
// Replace these values in script.js:

// Your EmailJS Public Key
emailjs.init("YOUR_ACTUAL_PUBLIC_KEY_HERE");

// Your Service ID (from Step 2)
emailjs.send('YOUR_SERVICE_ID_HERE', 'YOUR_TEMPLATE_ID_HERE', {
    // ... rest of the code
});
```

### **Step 6: Test the Setup**

1. **Open your portfolio** in a browser
2. **Go to the contact section**
3. **Fill out the form** with test data
4. **Click "Send Message"**
5. **Check your email** (`mvishalmanghat@gmail.com`) for the test message

## 🔧 **Configuration Details**

### **Required Values to Replace:**

| Placeholder | What to Replace | Where to Find |
|-------------|----------------|---------------|
| `YOUR_EMAILJS_PUBLIC_KEY` | Your public key | EmailJS Dashboard → Account → API Keys |
| `YOUR_SERVICE_ID` | Your service ID | EmailJS Dashboard → Email Services |
| `YOUR_TEMPLATE_ID` | Your template ID | EmailJS Dashboard → Email Templates |

### **Example Configuration:**

```javascript
// Initialize EmailJS
emailjs.init("user_a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6");

// Send email
emailjs.send('service_abc123', 'template_xyz789', {
    to_email: 'mvishalmanghat@gmail.com',
    from_name: formData.name,
    from_email: formData.email,
    subject: formData.subject,
    message: formData.message,
    reply_to: formData.email
});
```

## 📧 **Email Features**

### **What You'll Receive:**
- **From**: Your portfolio contact form
- **To**: `mvishalmanghat@gmail.com`
- **Subject**: "New Message from Portfolio: [User's Subject]"
- **Content**: Formatted table with all form data
- **Reply-to**: Set to sender's email for easy replies

### **Email Content Includes:**
- ✅ Sender's name
- ✅ Sender's email address
- ✅ Message subject
- ✅ Full message content
- ✅ Professional formatting
- ✅ Easy reply functionality

## 🛠 **Troubleshooting**

### **Common Issues:**

1. **"Failed to send message"**
   - Check your EmailJS credentials
   - Verify service and template IDs
   - Ensure EmailJS is properly initialized

2. **"EmailJS is not defined"**
   - Make sure EmailJS CDN is loaded in HTML
   - Check browser console for errors

3. **Emails not received**
   - Check spam folder
   - Verify email service connection
   - Test with different email provider

### **Testing Steps:**
1. **Console Logs**: Check browser console for errors
2. **Network Tab**: Verify EmailJS API calls
3. **EmailJS Dashboard**: Check for successful sends
4. **Email Inbox**: Look for received messages

## 🔒 **Security & Best Practices**

### **Free Plan Limits:**
- **200 emails per month** (free plan)
- **Upgrade available** for more emails
- **No spam protection** needed (handled by EmailJS)

### **Privacy:**
- **No data stored** by EmailJS
- **Emails sent directly** to your inbox
- **GDPR compliant** service

## 🎯 **Benefits of EmailJS**

### **Why EmailJS:**
- ✅ **No backend required**
- ✅ **Easy to set up**
- ✅ **Reliable delivery**
- ✅ **Professional templates**
- ✅ **Free tier available**
- ✅ **Mobile responsive**

### **Alternative Solutions:**
- **Formspree**: Another popular option
- **Netlify Forms**: If hosting on Netlify
- **Backend API**: Custom server solution

## 🚀 **Next Steps**

1. **Follow the setup guide** above
2. **Test the contact form**
3. **Monitor your email inbox**
4. **Customize the email template** if needed
5. **Consider upgrading** if you need more emails

Your contact form will now send real emails to `mvishalmanghat@gmail.com`! 📧✨ 