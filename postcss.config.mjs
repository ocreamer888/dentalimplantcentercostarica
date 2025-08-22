const config = {
  plugins: {
    "@tailwindcss/postcss": {
      // Tailwind v4 specific options
      config: "./tailwind.config.ts",
    },
    autoprefixer: {},
  },
};

export default config;
