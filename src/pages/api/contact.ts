import { Resend } from 'resend';

export const prerender = false;

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  message: string;
  referral?: string;
  honeypot?: string;
}

export async function POST({ request }: { request: Request }) {
  try {
    // Get environment variables
    const resendApiKey = import.meta.env.RESEND_API_KEY;
    const contactEmail = import.meta.env.CONTACT_EMAIL || 'sales@synchronylabs.com';
    const siteUrl = import.meta.env.SITE_URL || 'https://synchronylabs.com';

    // Validate required environment variables
    if (!resendApiKey) {
      console.error('RESEND_API_KEY is not set');
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Server configuration error. Please try again later.' 
        }),
        { 
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Parse request body
    const body: ContactFormData = await request.json();

    // Honeypot check - if filled, it's spam
    if (body.honeypot && body.honeypot.trim() !== '') {
      // Silently reject spam submissions
      return new Response(
        JSON.stringify({ success: true, message: 'Thank you for your inquiry.' }),
        { 
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Server-side validation
    if (!body.name || !body.email || !body.message) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Name, email, and message are required fields.' 
        }),
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Please provide a valid email address.' 
        }),
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Sanitize inputs (basic sanitization)
    const sanitize = (str: string | undefined): string => {
      if (!str) return '';
      return str.trim().replace(/[<>]/g, '');
    };

    const name = sanitize(body.name);
    const email = sanitize(body.email);
    const phone = sanitize(body.phone);
    const company = sanitize(body.company);
    const service = sanitize(body.service);
    const message = sanitize(body.message);
    const referral = sanitize(body.referral);

    // Initialize Resend
    const resend = new Resend(resendApiKey);

    // Format email content
    const emailSubject = `New Inquiry from Synchrony Labs Website`;
    const emailBody = `
New contact form submission from ${siteUrl}

From: ${name}
Email: ${email}
${company ? `Company: ${company}` : ''}
${phone ? `Phone: ${phone}` : ''}
${service ? `Service Interest: ${service}` : ''}
${referral ? `How did you hear about us: ${referral}` : ''}

Message:
${message}

---
Submitted at: ${new Date().toISOString()}
    `.trim();

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: 'Synchrony Labs Website <onboarding@resend.dev>', // Update this with your verified domain
      to: contactEmail,
      replyTo: email,
      subject: emailSubject,
      text: emailBody,
    });

    if (error) {
      console.error('Resend API error:', error);
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Failed to send email. Please try again later or contact us directly.' 
        }),
        { 
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Success response
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Thank you for your inquiry. We will get back to you soon!' 
      }),
      { 
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: 'An unexpected error occurred. Please try again later.' 
      }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}





