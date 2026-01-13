# Dental Implant Center Costa Rica

A modern, high-performance Next.js website for a dental tourism center in Costa Rica, specializing in dental implants, All-On-4/All-On-6 procedures, and comprehensive dental care packages.

![Dental Implant Center Costa Rica](./public/images/DentalImplantSocials.png)

## 🌟 Overview

This website serves as a complete digital solution for dental tourism, featuring:
- 🦷 Detailed treatment information (All-On-4, All-On-6, Dental Implants)
- 💰 Interactive pricing calculator with cost estimates
- 📍 Location information and accommodation details
- 📋 Free estimate request system with image uploads
- 📊 Admin dashboard for managing patient inquiries
- 🌐 Multilingual SEO optimization
- ⚡ Lightning-fast performance with Next.js 15 and React 19

## ✨ Key Features

### Patient-Facing Features
- **Interactive Treatment Pages**: Detailed information about dental procedures
- **Cost Calculator**: Transparent pricing with comparison to US/Canada costs
- **Free Estimate System**: Multi-step form with image upload capability
- **Virtual Tours**: Visual documentation of facilities and treatments
- **Testimonials**: Real patient experiences and reviews
- **FAQ Section**: Comprehensive answers to common questions
- **Contact Forms**: Multiple ways to reach the clinic
- **SEO-Optimized Content**: Location-specific pages for major cities

### Administrative Features
- **Admin Dashboard**: Manage estimate requests and patient inquiries
- **Supabase Integration**: Secure database for patient data
- **Image Management**: Upload and store dental X-rays and photos
- **Status Tracking**: Monitor inquiry status (pending, contacted, completed)
- **Priority System**: Flag urgent cases for immediate attention

### Technical Features
- **Server-Side Rendering (SSR)**: Fast initial page loads
- **React Server Components**: Optimal performance
- **Image Optimization**: WebP/AVIF formats with responsive sizing
- **Code Splitting**: Efficient bundle management
- **SEO-Friendly**: Comprehensive meta tags and structured data
- **Mobile-First Design**: Responsive across all devices
- **Analytics Integration**: Google Analytics tracking
- **Facebook Pixel**: Conversion tracking
- **Dark Mode Support**: User preference detection

## 🛠️ Tech Stack

### Core Technologies
- **Framework**: [Next.js 15.4.5](https://nextjs.org/) with App Router
- **React**: v19.1.0 with React Compiler
- **TypeScript**: v5 for type safety
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Database**: [Supabase](https://supabase.com/) (PostgreSQL)
- **Email**: [Resend](https://resend.com/)
- **Image Processing**: [Sharp](https://sharp.pixelplumbing.com/)

### UI Components
- **Component Library**: Custom components with shadcn/ui patterns
- **Icons**: Lucide React, Iconify
- **Animations**: Tailwind CSS animations
- **Forms**: Zod validation with React hooks

### Development Tools
- **Linting**: ESLint with Next.js config
- **Build Analysis**: @next/bundle-analyzer
- **Performance**: Lighthouse CI ready
- **Image Optimization**: Custom scripts for WebP conversion

## 📋 Prerequisites

Before you begin, ensure you have:
- **Node.js** 20.x or later
- **npm** 8.x or later (or yarn/pnpm/bun)
- **Supabase Account**: For database and storage
- **Resend Account**: For email functionality (optional)
- **Google Analytics ID**: For tracking (optional)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/implantcentercostarica.git
cd implantcentercostarica
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Environment Variables

Create a `.env.local` file in the root directory:

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Resend Email API (Optional)
RESEND_API_KEY=your_resend_api_key

# Google Analytics (Optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Google Search Console Verification (Optional)
GOOGLE_VERIFICATION_CODE=your_verification_code

# Performance (Optional)
ENABLE_SOURCE_MAPS=false
NODE_ENV=development
```

### 4. Database Setup

Follow the [Supabase Setup Guide](./docs/supabase/SUPABASE_SETUP.md) to:
1. Create the `estimate_requests` table
2. Create the `estimate_images` table
3. Set up storage bucket for images
4. Configure Row Level Security (RLS) policies
5. Create database indexes for performance

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📁 Project Structure

```
implantcentercostarica/
├── public/
│   ├── images/                    # Static images and assets
│   │   ├── hero/                  # Hero section images
│   │   ├── dentalimages/         # Dental procedure photos
│   │   ├── testimonial/          # Patient testimonials
│   │   └── ...
│   └── optimized-images/         # Pre-optimized images
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── (site)/              # Main site pages
│   │   │   ├── page.tsx         # Homepage
│   │   │   ├── about/           # About page
│   │   │   ├── contact/         # Contact page
│   │   │   └── ...
│   │   ├── admin/               # Admin dashboard
│   │   ├── api/                 # API routes
│   │   ├── cost/                # Cost calculator
│   │   ├── locations/           # City-specific pages
│   │   ├── procedures/          # Treatment pages
│   │   ├── layout.tsx           # Root layout
│   │   ├── globals.css          # Global styles
│   │   └── sitemap.ts           # XML sitemap
│   ├── components/              # React components
│   │   ├── Home/                # Homepage components
│   │   ├── About/               # About page components
│   │   ├── Contact/             # Contact components
│   │   ├── FreeEstimate/        # Estimate form components
│   │   ├── Layout/              # Layout components
│   │   ├── SEO/                 # SEO-optimized components
│   │   ├── Treatments/          # Treatment components
│   │   └── ui/                  # Reusable UI components
│   ├── data/                    # Static data and content
│   │   ├── faq.ts              # FAQ content
│   │   ├── pricing.ts          # Pricing data
│   │   ├── testimonials.ts     # Patient testimonials
│   │   └── ...
│   ├── lib/                     # Utility functions
│   │   ├── actions/            # Server actions
│   │   │   ├── estimateForm.ts # Form submission handler
│   │   │   └── ...
│   │   ├── supabase.ts         # Supabase client
│   │   ├── metadata.ts         # SEO metadata helpers
│   │   ├── schemas.ts          # Zod validation schemas
│   │   └── utils.ts            # Utility functions
│   ├── hooks/                   # Custom React hooks
│   │   ├── useEstimateForm.ts  # Form state management
│   │   └── ...
│   ├── types/                   # TypeScript type definitions
│   │   ├── blog.ts
│   │   ├── menu.ts
│   │   └── types.ts
│   └── middleware.ts            # Next.js middleware
├── docs/                        # Documentation
│   ├── supabase/               # Database setup guides
│   ├── seo/                    # SEO strategy documents
│   └── prompts/                # AI prompts and content
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Project dependencies
```

## 🎯 Key Pages and Routes

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, services, and testimonials |
| `/about` | About the clinic and team |
| `/contact` | Contact information and form |
| `/cost` | Interactive cost calculator |
| `/procedures/all-on-4` | All-On-4 treatment details |
| `/procedures/all-on-6` | All-On-6 treatment details |
| `/procedures/dental-implants` | General dental implants info |
| `/procedures/zirconia-implants` | Zirconia implants details |
| `/locations/*` | City-specific landing pages |
| `/admin` | Administrative dashboard (protected) |

## 🔧 Available Scripts

```bash
# Development
npm run dev                 # Start development server
npm run build              # Build for production
npm run start              # Start production server
npm run lint               # Run ESLint

# Image Optimization
npm run optimize-images    # Optimize images to WebP format
npm run build:images       # Optimize images then build

# Bundle Analysis
npm run analyze            # Analyze bundle size
npm run build:analyze      # Build with bundle analysis
```

## 🖼️ Image Optimization

This project includes custom image optimization:

1. **Automatic WebP Conversion**: Run `npm run optimize-images`
2. **Responsive Sizing**: Images served in multiple sizes
3. **Modern Formats**: AVIF and WebP with fallbacks
4. **Lazy Loading**: Images load as needed
5. **CDN-Ready**: Optimized for content delivery networks

## 🔒 Security Features

- **Row Level Security (RLS)**: Supabase database protection
- **Content Security Policy (CSP)**: XSS protection headers
- **HTTPS Only**: Enforced secure connections
- **Input Validation**: Zod schema validation
- **Rate Limiting**: API endpoint protection
- **Environment Variables**: Secure credential management
- **No Console Logs**: Removed in production builds

## 📊 Performance Optimizations

### Code Splitting
- Automatic route-based splitting
- Dynamic imports for heavy components
- Vendor bundle optimization

### React Compiler
- Experimental React Compiler enabled
- Automatic memoization
- Optimized re-renders

### Image Optimization
- Sharp for server-side processing
- Multiple device sizes
- Modern image formats (AVIF, WebP)
- 1-year cache TTL

### Build Optimizations
- Tree shaking enabled
- Dead code elimination
- Hidden source maps for debugging
- Compression enabled
- Minimal runtime overhead

## 🔍 SEO Features

### Technical SEO
- **XML Sitemap**: Auto-generated at `/sitemap.xml`
- **Robots.txt**: Configured for optimal crawling
- **Canonical URLs**: Prevent duplicate content
- **Open Graph Tags**: Social media optimization
- **Twitter Cards**: Enhanced social sharing
- **Schema Markup**: Structured data for rich snippets
- **Meta Descriptions**: Unique for each page
- **Mobile Optimization**: Mobile-first approach

### Content SEO
- **Location Pages**: City-specific landing pages
- **Treatment Pages**: Detailed procedure information
- **Blog-Ready**: Structure for content marketing
- **Internal Linking**: Strategic link structure
- **Alt Text**: All images properly described

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy automatically

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/implantcentercostarica)

### Manual Deployment

```bash
# Build the project
npm run build

# Start production server
npm run start
```

### Environment Variables for Production

Ensure all environment variables are set in your hosting platform:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `RESEND_API_KEY`
- `NEXT_PUBLIC_GA_ID`
- `GOOGLE_VERIFICATION_CODE`

## 📧 Email Integration

The project uses [Resend](https://resend.com/) for transactional emails:

1. Sign up for Resend account
2. Get your API key
3. Add to `.env.local` as `RESEND_API_KEY`
4. Configure sender domain (optional)

Email features:
- Estimate request confirmations
- Admin notifications
- Contact form submissions

## 🗄️ Database Schema

### `estimate_requests` Table
```sql
- id (UUID, Primary Key)
- name (TEXT)
- email (TEXT)
- phone (TEXT)
- country (TEXT)
- treatment (TEXT)
- visit_date (DATE)
- preferred_contact (TEXT)
- message (TEXT)
- status (TEXT)
- priority (TEXT)
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP)
```

### `estimate_images` Table
```sql
- id (UUID, Primary Key)
- estimate_id (UUID, Foreign Key)
- file_name (TEXT)
- original_name (TEXT)
- file_size (INTEGER)
- mime_type (TEXT)
- storage_path (TEXT)
- public_url (TEXT)
- created_at (TIMESTAMP)
```

See [SUPABASE_SETUP.md](./docs/supabase/SUPABASE_SETUP.md) for complete database setup.

## 🧪 Testing

```bash
# Run linter
npm run lint

# Type checking
npx tsc --noEmit

# Build test (checks for build errors)
npm run build
```

## 🐛 Troubleshooting

### Common Issues

**Issue**: Environment variables not working
- **Solution**: Restart dev server after changing `.env.local`

**Issue**: Images not loading
- **Solution**: Check `public/images/` directory structure and Next.js Image component usage

**Issue**: Supabase connection errors
- **Solution**: Verify `.env.local` has correct credentials and database tables are created

**Issue**: Build errors
- **Solution**: Clear `.next` folder and `node_modules`, reinstall dependencies

**Issue**: Slow performance
- **Solution**: Run `npm run analyze` to check bundle size, optimize imports

### Debug Mode

```bash
# Run with verbose logging
NODE_OPTIONS='--inspect' npm run dev

# Check bundle size
npm run build:analyze
```

## 📝 Content Management

### Updating Content

1. **FAQ**: Edit `src/data/faq.ts`
2. **Pricing**: Edit `src/data/pricing.ts`
3. **Testimonials**: Edit `src/data/testimonials.ts`
4. **Site Details**: Edit `src/data/siteDetails.ts`
5. **Menu Items**: Edit `src/data/menuItems.ts`

### Adding New Pages

1. Create file in `src/app/(site)/your-page/page.tsx`
2. Add to menu in `src/data/menuItems.ts`
3. Update sitemap in `src/app/sitemap.ts`

### Adding New Locations

1. Create folder in `src/app/locations/city-name/`
2. Add `page.tsx` with city-specific content
3. Update sitemap

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style

- Use TypeScript for all new files
- Follow ESLint configuration
- Use Prettier for formatting
- Write meaningful commit messages
- Add comments for complex logic

## 📄 License

This project is proprietary software owned by Dental Implant Center Costa Rica.

## 📞 Contact

**Dental Implant Center Costa Rica**

- Website: [https://dentalimplantcentercostarica.com](https://dentalimplantcentercostarica.com)
- Email: info@dentalimplantcentercostarica.com
- Phone: [Your Phone Number]

For technical support or questions about this codebase, please open an issue on GitHub.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Vercel](https://vercel.com/) - Hosting platform
- [Supabase](https://supabase.com/) - Backend as a service
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Lucide](https://lucide.dev/) - Beautiful icons
- [shadcn/ui](https://ui.shadcn.com/) - Component patterns

---

**Built with ❤️ for dental tourism excellence**

Last Updated: October 30, 2025
