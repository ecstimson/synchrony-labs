import { Resend } from 'resend';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFileSync } from 'fs';

// Load environment variables
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const envPath = join(__dirname, '..', '.env');

// Simple .env parser
const envContent = readFileSync(envPath, 'utf-8');
const envVars = {};
envContent.split('\n').forEach(line => {
  const trimmed = line.trim();
  if (trimmed && !trimmed.startsWith('#')) {
    const [key, ...valueParts] = trimmed.split('=');
    if (key && valueParts.length > 0) {
      envVars[key.trim()] = valueParts.join('=').trim();
    }
  }
});

const resendApiKey = envVars.RESEND_API_KEY;
// For testing, use the account owner's email (Resend requirement)
// In production with verified domain, this will use CONTACT_EMAIL
const testEmail = 'ecstimson@gmail.com'; // Your Resend account email
const contactEmail = envVars.CONTACT_EMAIL || 'EPrandi@synchronylabs.com';
const siteUrl = envVars.SITE_URL || 'https://synchronylabs.com';

if (!resendApiKey) {
  console.error('❌ RESEND_API_KEY not found in .env file');
  process.exit(1);
}

console.log('📧 Sending test email...');
console.log(`   To: ${testEmail} (test mode - Resend requires verified domain for ${contactEmail})`);
console.log(`   Production recipient: ${contactEmail}`);
console.log(`   API Key: ${resendApiKey.substring(0, 10)}...`);

const resend = new Resend(resendApiKey);

const emailSubject = `Test Email from Synchrony Labs Website`;
const emailBody = `
This is a test email from the Synchrony Labs contact form API.

Test Details:
- From: Test Script
- Email: test@example.com
- Company: Test Company
- Phone: (555) 123-4567
- Service Interest: Test Service
- Message: This is a test message to verify the contact form email functionality.

---
Test sent at: ${new Date().toISOString()}
Site URL: ${siteUrl}
`.trim();

async function sendTestEmail() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Synchrony Labs Website <onboarding@resend.dev>',
      to: testEmail,
      replyTo: 'test@example.com',
      subject: emailSubject,
      text: emailBody,
    });

    if (error) {
      console.error('❌ Error sending email:', error);
      process.exit(1);
    }

    console.log('✅ Test email sent successfully!');
    console.log(`   Email ID: ${data?.id || 'N/A'}`);
    console.log(`   Check inbox: ${testEmail}`);
    console.log(`\n⚠️  Note: To send to ${contactEmail} in production:`);
    console.log(`   1. Verify your domain at resend.com/domains`);
    console.log(`   2. Update the 'from' address in /src/pages/api/contact.ts`);
  } catch (error) {
    console.error('❌ Unexpected error:', error);
    process.exit(1);
  }
}

sendTestEmail();

