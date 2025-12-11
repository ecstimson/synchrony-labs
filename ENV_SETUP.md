# Environment Variables Setup

This file documents the required environment variables for the Synchrony Labs website.

## Required Environment Variables

Create a `.env` file in the root directory of the project with the following variables:

```env
# Resend API Key
# Get your API key from https://resend.com/api-keys
# Replace with your actual Resend API key
RESEND_API_KEY=re_DMEMvHd8_Ez4GdREsNykwndGPapBgi742

# Contact email address where form submissions will be sent
CONTACT_EMAIL=EPrandi@synchronylabs.com

# Site URL (used in email templates)
SITE_URL=https://synchronylabs.com
```

## Setup Instructions

1. **Create the `.env` file:**
   - In the root directory (`/Users/ericstimson/Documents/synchronylabs.com/`)
   - Copy the variables above into the file
   - Replace `re_xxxxxxxxxxxx` with your actual Resend API key

2. **Get your Resend API Key:**
   - Sign up at https://resend.com
   - Navigate to API Keys section
   - Create a new API key
   - Copy the key (starts with `re_`)

3. **Verify your email domain (optional but recommended):**
   - In Resend dashboard, verify your domain
   - Update the "from" address in `/src/pages/api/contact.ts` from `onboarding@resend.dev` to your verified domain

## Notes

- The `.env` file is in `.gitignore` and will not be committed to version control
- For production (Vercel), add these variables in the Vercel dashboard under Project Settings → Environment Variables
- The contact form will not work until `RESEND_API_KEY` is set





