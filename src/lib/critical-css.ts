// Critical CSS for above-the-fold content
export const criticalCSS = `
  /* Essential styles for initial render */
  :root {
    --radius: 0.625rem;
    --background: oklch(0.3947 0.1932 309.79);
    --foreground: oklch(0.985 0 0);
    --primary: oklch(0.8 0.25 309.79);
    --primary-foreground: oklch(0.3947 0.1932 309.79);
    --card: oklch(0.45 0.15 309.79);
    --card-foreground: oklch(0.985 0 0);
    --muted: oklch(0.42 0.1 309.79);
    --muted-foreground: oklch(0.8 0 0);
    --accent: oklch(0.5 0.12 309.79);
    --accent-foreground: oklch(0.985 0 0);
    --destructive: oklch(0.577 0.245 27.325);
    --border: oklch(0.55 0.08 309.79);
    --input: oklch(0.55 0.08 309.79);
    --ring: oklch(0.8 0.25 309.79);
  }
  
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  body {
    font-family: var(--font-geist-sans), system-ui, sans-serif;
    background: var(--background);
    color: var(--foreground);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  /* Critical layout styles */
  .antialiased {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  /* Essential component styles for hero section */
  .hero-container {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .hero-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  
  /* Critical button styles */
  .bg-gradient-to-t {
    background-image: linear-gradient(to top, var(--tw-gradient-stops));
  }
  
  .from-purple-800 {
    --tw-gradient-from: #5b21b6;
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(91, 33, 182, 0));
  }
  
  .via-purple-600 {
    --tw-gradient-stops: var(--tw-gradient-from), #9333ea, var(--tw-gradient-to, rgba(147, 51, 234, 0));
  }
  
  .to-purple-600 {
    --tw-gradient-to: #9333ea;
  }
`;
