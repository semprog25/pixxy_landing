# Pixxy Waitlist Landing Page

This folder contains the standalone landing page for Pixxy.

## Files
- `index.html`: The complete, standalone landing page.
- `PixxyLandingPage.tsx`: The React component version used within the Pixxy App.

## How to Host on GitHub Pages

1. Create a new repository on GitHub (e.g., `pixxy-landing`).
2. Upload the `index.html` file to the repository.
3. Go to Settings > Pages.
4. Select the `main` branch as the source.
5. Your landing page will be live!

## Configuration

The `index.html` file is pre-configured to connect to your Supabase backend to collect emails.

It uses the following API endpoint:
`https://fjygzpjvvoqmjafnpheb.supabase.co/functions/v1/make-server-e0d353ca/join-waitlist`

Emails are stored in your Supabase KV Store with the key format `waitlist:{email}`.

## Assets

The images are loaded from your Supabase Storage. If the tokens expire, you may need to update the `LOGO_URL` and `THUMB_URL` variables in the `index.html` script section.
