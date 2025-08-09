// Critical CSS for above-the-fold content
export const criticalCSS = `
  /* Essential styles for initial render */
  :root {
    --radius: 0.625rem;
    --background: oklch(0.3947 0.1932 309.79);
    --foreground: oklch(0.985 0 0);
    --primary: oklch(0.8 0.25 309.79);
    --primary-foreground: oklch(0.3947 0.1932 309.79);
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
`;
