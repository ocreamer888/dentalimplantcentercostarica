/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // Purge unused styles in production
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './src/**/*.{js,ts,jsx,tsx}',
    ],
    options: {
      safelist: [
        // Add any classes that should never be purged
        'dark',
        'antialiased',
      ],
    },
  },
  theme: {
    extend: {
      // Your existing theme configuration
    },
  },
  plugins: [],
  // Optimize for production
  corePlugins: {
    // Disable unused features
    preflight: true,
    container: false,
  },
};
