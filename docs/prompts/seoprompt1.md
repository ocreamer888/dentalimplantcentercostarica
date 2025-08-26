1. Current Project Position:

The existing website has good technical foundation but needs SEO optimization
Targeting highly competitive keywords (40K+ monthly searches)
Competing against established players like ClearChoice and Affordable Dentures
Strong unique value proposition (70% cost savings, Costa Rica location)

2. What We Need to Do:

Implement comprehensive technical SEO (Core Web Vitals optimization)
Create topic clusters around cost, procedures, patient journey, and location
Build E-A-T through surgeon credentials and patient testimonials
Target tier 1 keywords: "dental implants cost", "all on 4 dental implants", "dental implants near me"

3. How We'll Execute:

Next.js App Router with SEO-optimized dynamic routes
Structured data for MedicalOrganization, LocalBusiness, and MedicalProcedure schemas
Performance optimization targeting Core Web Vitals standards
Content strategy with pillar pages and supporting cluster content
Local SEO with city-specific landing pages for major US markets

4. Key Technical Implementations:

Interactive cost calculators and comparison tools
Before/after galleries with proper image optimization
HIPAA-compliant consultation forms
Progressive disclosure for complex medical information
Schema markup for featured snippets and rich results

5. SEO Master Strategy:

Featured snippet optimization for question-based queries
Voice search optimization with conversational keywords
International SEO for dental tourism targeting
E-A-T signals through doctor credentials and patient success stories
Conversion optimization with trust signals and social proof

The modified prompt focuses on the actual competitive landscape, target keywords from the SEO plan, and specific technical requirements for ranking #1 in Google for dental implant keywords. It maintains engineering best practices while prioritizing SEO performance and user experience optimization.

{
  "type": "object",
  "properties": {
    "architectural_overview": {
      "type": "object",
      "properties": {
        "data_architecture": {
          "type": "string",
          "description": "SEO-first data structure with comprehensive dental implant procedures (All-on-4, All-on-6, single tooth, same-day, zygomatic), location-based content, and patient journey mapping. Implement structured data schemas for MedicalOrganization, LocalBusiness, MedicalProcedure, and FAQPage. Create topic clusters around cost, procedures, patient journey, and location/travel with pillar pages linking to supporting content."
        },
        "routing_strategy": {
          "type": "string", 
          "description": "Next.js App Router with SEO-optimized dynamic routes: /procedures/[procedure-type], /cost/[procedure], /locations/[city-state], /guides/[topic]. Implement semantic URLs, proper breadcrumbs, canonical tags, and hreflang for international targeting. Generate static pages for high-value keywords and use ISR for dynamic content updates."
        },
        "performance_optimizations": {
          "type": "array",
          "items": { "type": "string" },
          "description": "Core Web Vitals optimization targeting LCP <2.5s, FID <100ms, CLS <0.1",
          "minItems": 7,
          "items": [
            "Next.js Image component with WebP/AVIF formats and lazy loading for below-fold content",
            "Critical CSS inlining and font preloading for above-the-fold content",
            "Code splitting by routes and components to reduce initial bundle size",
            "Service Worker implementation for offline functionality and caching",
            "Database query optimization and edge caching for dynamic content",
            "Progressive image loading with blur placeholders for before/after galleries",
            "Resource hints (preload, prefetch, preconnect) for critical third-party resources"
          ]
        },
        "seo_strategies": {
          "type": "array",
          "items": { "type": "string" },
          "description": "Advanced SEO tactics targeting competitive dental implant keywords",
          "minItems": 8,
          "items": [
            "Target Tier 1 keywords: 'dental implants cost' (40.5K), 'all on 4 dental implants' (33.1K), 'dental implants near me' (27.1K)",
            "Implement topic clustering with pillar pages and supporting content hubs",
            "Featured snippet optimization for question-based queries and comparison tables",
            "Voice search optimization with conversational keyword targeting",
            "Local SEO with city-specific landing pages and Google Business Profile optimization",
            "E-A-T implementation through doctor credentials, certifications, and patient testimonials",
            "Schema markup for medical procedures, reviews, and local business information",
            "International SEO for dental tourism with hreflang and geo-targeted content"
          ]
        },
        "compliance_requirements": {
          "type": "array",
          "items": { "type": "string" },
          "description": "Medical and legal compliance for dental tourism website",
          "minItems": 4,
          "items": [
            "Medical disclaimers and regulatory compliance for dental procedures",
            "HIPAA-compliant patient data handling and testimonial permissions",
            "International medical tourism regulations and licensing disclosures",
            "Accessibility compliance (WCAG 2.1 AA) for medical website requirements"
          ]
        },
        "state_management_strategy": {
          "type": "string",
          "description": "Context-based state management using React Context for user preferences, consultation forms, and treatment comparisons. Implement Zustand for complex filtering state across procedure types, locations, and pricing. Use React Query for server state management and caching of procedure data, doctor profiles, and patient testimonials."
        },
        "error_handling_strategy": {
          "type": "string",
          "description": "Comprehensive error boundaries for each page section with SEO-friendly 404 pages that include suggested procedures and internal links. Implement graceful degradation for form submissions, image loading failures, and API timeouts. Create custom error pages that maintain SEO value with relevant content and navigation paths."
        },
        "security_measures": {
          "type": "array",
          "items": { "type": "string" },
          "description": "Security implementations for medical website and patient data",
          "minItems": 5,
          "items": [
            "HTTPS enforcement with security headers (CSP, HSTS, X-Frame-Options)",
            "Patient consultation form encryption and secure data transmission",
            "Rate limiting for contact forms and consultation requests",
            "Input validation and sanitization for all user-generated content",
            "Secure cookie handling for user preferences and session management"
          ]
        },
        "testing_strategy": {
          "type": "string",
          "description": "SEO-focused testing approach with Lighthouse CI for Core Web Vitals monitoring, visual regression testing for before/after galleries, A/B testing for conversion optimization, and schema markup validation. Implement automated testing for critical user journeys including consultation booking and procedure comparison flows."
        }
      },
      "required": [
        "data_architecture",
        "routing_strategy", 
        "performance_optimizations",
        "seo_strategies",
        "compliance_requirements",
        "state_management_strategy",
        "error_handling_strategy",
        "security_measures",
        "testing_strategy"
      ]
    },
    "file_structure": {
      "type": "object",
      "properties": {
        "app/page.tsx": {
          "type": "string",
          "description": "Homepage optimized for 'dental implants Costa Rica' with hero section featuring cost savings (70% less), trust signals (certifications, patient count), interactive cost calculator, featured procedures (All-on-4, All-on-6), patient testimonials with star ratings, and location information. Implement structured data for Organization and LocalBusiness schemas."
        },
        "app/procedures/page.tsx": {
          "type": "string",
          "description": "Procedure listing page targeting 'dental implant procedures' with comprehensive filtering by type (All-on-4, All-on-6, single tooth), cost range, timeline, and complexity. Include comparison tables, procedure success rates, recovery timelines, and before/after galleries. Implement FAQ schema and breadcrumb navigation."
        },
        "app/procedures/[procedure]/page.tsx": {
          "type": "string", 
          "description": "Individual procedure pages targeting specific keywords like 'all on 4 dental implants cost'. Include comprehensive procedure information, step-by-step process, timeline, costs, surgeon profiles, patient testimonials, and FAQ sections. Implement MedicalProcedure schema with detailed procedure information."
        },
        "app/cost/page.tsx": {
          "type": "string",
          "description": "Cost comparison page targeting 'dental implants cost' with interactive calculators, USA vs Costa Rica pricing tables, financing options, insurance coverage information, and ROI calculators for dental tourism. Include cost breakdown by procedure type and patient testimonials about savings."
        },
        "app/locations/[city]/page.tsx": {
          "type": "string",
          "description": "City-specific landing pages targeting 'dental implants [city]' with travel information, flight costs, accommodation partnerships, local attractions, and patient testimonials from specific locations. Implement LocalBusiness schema for Costa Rica clinic with proper NAP information."
        },
        "components/ProcedureComparison.tsx": {
          "type": "string",
          "description": "Interactive comparison tool for different implant procedures with side-by-side cost, timeline, and benefit comparisons. Include schema markup for comparison tables and integrate with consultation booking system."
        },
        "components/CostCalculator.tsx": {
          "type": "string",
          "description": "Interactive cost calculator with procedure selection, patient count, additional services, and total cost with savings comparison. Include financing options and consultation booking integration."
        },
        "components/ConsultationForm.tsx": {
          "type": "string",
          "description": "Optimized consultation form with progressive disclosure, HIPAA-compliant data handling, and integration with scheduling system. Include trust signals and conversion optimization elements."
        },
        "components/SEOOptimizedImage.tsx": {
          "type": "string",
          "description": "Custom image component built on Next.js Image with automatic WebP/AVIF conversion, lazy loading, proper alt text for medical images, and structured data for before/after galleries."
        },
        "lib/dental-procedures.ts": {
          "type": "string",
          "description": "Comprehensive data structure for all dental procedures with SEO-optimized descriptions, costs, timelines, surgeon information, and patient testimonials. Include schema markup data and filtering attributes."
        },
        "lib/seo-utils.ts": {
          "type": "string",
          "description": "SEO utility functions for meta tag generation, structured data creation, sitemap generation, and canonical URL management. Include functions for dynamic meta descriptions and title optimization."
        }
      },
      "required": [
        "app/page.tsx",
        "app/procedures/page.tsx",
        "app/procedures/[procedure]/page.tsx", 
        "app/cost/page.tsx",
        "app/locations/[city]/page.tsx",
        "components/ProcedureComparison.tsx",
        "components/CostCalculator.tsx",
        "components/ConsultationForm.tsx",
        "components/SEOOptimizedImage.tsx",
        "lib/dental-procedures.ts",
        "lib/seo-utils.ts"
      ]
    },
    "data_structure": {
      "type": "object",
      "properties": {
        "procedure_schema": {
          "type": "object",
          "properties": {
            "id": { "type": "string" },
            "name": { "type": "string" },
            "slug": { "type": "string" },
            "description": { "type": "string" },
            "shortDescription": { "type": "string" },
            "cost": {
              "type": "object",
              "properties": {
                "costaRica": { "type": "number" },
                "usa": { "type": "number" },
                "savings": { "type": "number" },
                "financingOptions": { "type": "array", "items": { "type": "string" } }
              }
            },
            "timeline": {
              "type": "object",
              "properties": {
                "consultation": { "type": "string" },
                "treatment": { "type": "string" },
                "recovery": { "type": "string" },
                "totalTrip": { "type": "string" }
              }
            },
            "candidacy": { "type": "array", "items": { "type": "string" } },
            "benefits": { "type": "array", "items": { "type": "string" } },
            "process": { "type": "array", "items": { "type": "string" } },
            "aftercare": { "type": "array", "items": { "type": "string" } },
            "faq": { "type": "array", "items": { 
              "type": "object",
              "properties": {
                "question": { "type": "string" },
                "answer": { "type": "string" }
              }
            }},
            "testimonials": { "type": "array", "items": {
              "type": "object", 
              "properties": {
                "name": { "type": "string" },
                "location": { "type": "string" },
                "rating": { "type": "number" },
                "review": { "type": "string" },
                "procedure": { "type": "string" },
                "beforeAfter": { "type": "object" }
              }
            }},
            "surgeon": {
              "type": "object",
              "properties": {
                "name": { "type": "string" },
                "credentials": { "type": "array", "items": { "type": "string" } },
                "experience": { "type": "string" },
                "specializations": { "type": "array", "items": { "type": "string" } }
              }
            },
            "seoData": {
              "type": "object",
              "properties": {
                "metaTitle": { "type": "string" },
                "metaDescription": { "type": "string" },
                "keywords": { "type": "array", "items": { "type": "string" } },
                "structuredData": { "type": "object" }
              }
            }
          }
        },
        "procedure_categories": {
          "type": "array",
          "items": { "type": "string" },
          "description": "SEO-optimized procedure categories for navigation and filtering",
          "items": [
            "All-on-4 Dental Implants",
            "All-on-6 Dental Implants", 
            "Single Tooth Implants",
            "Full Mouth Reconstruction",
            "Same-Day Dental Implants",
            "Zygomatic Implants",
            "Mini Dental Implants",
            "Implant-Supported Dentures"
          ]
        },
        "target_locations": {
          "type": "array",
          "items": { "type": "string" },
          "description": "Primary US cities for geo-targeted landing pages",
          "items": [
            "Los Angeles, CA",
            "Miami, FL", 
            "Houston, TX",
            "New York, NY",
            "Chicago, IL",
            "Phoenix, AZ",
            "San Antonio, TX",
            "Dallas, TX"
          ]
        },
        "sample_procedures": {
          "type": "array",
          "items": { "type": "object" },
          "description": "5 sample procedures with complete SEO-optimized data structure",
          "minItems": 5,
          "maxItems": 5,
          "items": [
            {
              "id": "all-on-4",
              "name": "All-on-4 Dental Implants",
              "slug": "all-on-4-dental-implants-costa-rica",
              "description": "Complete arch restoration using just 4 strategically placed implants to support a full set of prosthetic teeth",
              "cost": {
                "costaRica": 19950,
                "usa": 50000,
                "savings": 30050,
                "financingOptions": ["12 months 0% APR", "24 months low interest", "Medical credit"]
              },
              "seoData": {
                "metaTitle": "All-on-4 Dental Implants Costa Rica - Save $30K+ | Same Day Teeth",
                "metaDescription": "Get All-on-4 dental implants in Costa Rica from $19,950. Save 60% vs USA prices. Same-day teeth with experienced surgeons. Free consultation.",
                "keywords": ["all on 4 dental implants", "all on 4 cost", "same day teeth Costa Rica"]
              }
            },
            {
              "id": "all-on-6",
              "name": "All-on-6 Dental Implants", 
              "slug": "all-on-6-dental-implants-costa-rica",
              "description": "Enhanced stability with 6 implants supporting a full arch for maximum strength and longevity",
              "cost": {
                "costaRica": 24950,
                "usa": 65000,
                "savings": 40050,
                "financingOptions": ["18 months 0% APR", "36 months low interest"]
              },
              "seoData": {
                "metaTitle": "All-on-6 Dental Implants Costa Rica - Premium Stability from $24,950",
                "metaDescription": "All-on-6 dental implants with superior stability. Save $40K+ vs USA. Expert surgeons, luxury recovery. Book free consultation today."
              }
            },
            {
              "id": "single-tooth",
              "name": "Single Tooth Implant",
              "slug": "single-tooth-dental-implant-costa-rica", 
              "description": "Individual tooth replacement with titanium implant and natural-looking crown",
              "cost": {
                "costaRica": 1850,
                "usa": 4500,
                "savings": 2650,
                "financingOptions": ["6 months 0% APR", "12 months low interest"]
              },
              "seoData": {
                "metaTitle": "Single Tooth Implant Costa Rica - Natural Results from $1,850",
                "metaDescription": "Replace single tooth with premium implant in Costa Rica. Save 60% vs USA prices. Natural-looking results. Free consultation available."
              }
            },
            {
              "id": "same-day",
              "name": "Same-Day Dental Implants",
              "slug": "same-day-dental-implants-costa-rica",
              "description": "Immediate implant placement and temporary teeth in a single appointment", 
              "cost": {
                "costaRica": 22950,
                "usa": 55000,
                "savings": 32050,
                "financingOptions": ["15 months 0% APR", "30 months low interest"]
              },
              "seoData": {
                "metaTitle": "Same Day Dental Implants Costa Rica - Teeth in One Day from $22,950",
                "metaDescription": "Get new teeth in one day with same-day dental implants. Save $32K+ vs USA. Experienced surgeons, immediate results."
              }
            },
            {
              "id": "full-mouth",
              "name": "Full Mouth Dental Implants",
              "slug": "full-mouth-dental-implants-costa-rica",
              "description": "Complete oral rehabilitation with multiple implants for both upper and lower arches",
              "cost": {
                "costaRica": 35900,
                "usa": 90000, 
                "savings": 54100,
                "financingOptions": ["24 months 0% APR", "48 months low interest", "Medical tourism packages"]
              },
              "seoData": {
                "metaTitle": "Full Mouth Dental Implants Costa Rica - Complete Restoration $35,900",
                "metaDescription": "Full mouth dental implant restoration in Costa Rica. Save $54K+ vs USA. Transform your smile with expert care and luxury accommodations."
              }
            }
          ]
        }
      },
      "required": [
        "procedure_schema",
        "procedure_categories",
        "target_locations", 
        "sample_procedures"
      ]
    },
    "seo_optimization_examples": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "page_type": { "type": "string" },
          "target_keyword": { "type": "string" },
          "optimization_strategy": { "type": "string" },
          "implementation": { "type": "string" }
        },
        "required": ["page_type", "target_keyword", "optimization_strategy", "implementation"]
      },
      "description": "Specific SEO optimization examples for different page types",
      "minItems": 8,
      "items": [
        {
          "page_type": "Homepage",
          "target_keyword": "dental implants costa rica",
          "optimization_strategy": "Brand + location targeting with trust signals and cost savings emphasis",
          "implementation": "H1: 'Dental Implants Costa Rica - Save 70% with Premium Care', hero section with cost calculator, patient testimonials, surgeon credentials, and clear CTA for free consultation"
        },
        {
          "page_type": "All-on-4 Landing Page", 
          "target_keyword": "all on 4 dental implants",
          "optimization_strategy": "Comprehensive procedure guide with cost comparison and patient journey",
          "implementation": "Long-form content (3000+ words), FAQ schema, before/after gallery, step-by-step process, recovery timeline, and multiple CTAs for consultation booking"
        },
        {
          "page_type": "Cost Comparison Page",
          "target_keyword": "dental implants cost",
          "optimization_strategy": "Interactive cost calculator with savings emphasis and financing options",
          "implementation": "Dynamic pricing tables, savings calculator, financing options comparison, insurance information, and ROI calculator for dental tourism"
        },
        {
          "page_type": "City-Specific Page",
          "target_keyword": "dental implants los angeles",
          "optimization_strategy": "Local SEO with travel information and patient testimonials from specific city",
          "implementation": "Flight costs from LAX, patient stories from LA residents, local attractions, accommodation packages, and consultation scheduling with LA phone number"
        },
        {
          "page_type": "Procedure Comparison",
          "target_keyword": "all on 4 vs all on 6",
          "optimization_strategy": "Detailed comparison targeting decision-stage keywords",
          "implementation": "Side-by-side comparison table, pros/cons lists, cost differences, candidacy requirements, and expert recommendations"
        },
        {
          "page_type": "Patient Reviews",
          "target_keyword": "dental implants costa rica reviews", 
          "optimization_strategy": "Social proof with verified patient testimonials and ratings",
          "implementation": "Structured review schema, verified patient photos, before/after galleries, video testimonials, and aggregate rating display"
        },
        {
          "page_type": "Surgeon Profiles",
          "target_keyword": "best dental implant surgeon costa rica",
          "optimization_strategy": "E-A-T optimization with credentials and experience emphasis",
          "implementation": "Detailed surgeon bios, education/certifications, years of experience, specializations, published research, and patient success stories"
        },
        {
          "page_type": "Travel Guide", 
          "target_keyword": "dental tourism costa rica",
          "optimization_strategy": "Comprehensive travel information for dental tourists",
          "implementation": "Complete travel guide, visa requirements, accommodation recommendations, transportation options, cultural activities, and treatment timeline integration"
        }
      ]
    }
  },
  "required": [
    "architectural_overview",
    "file_structure",
    "data_structure", 
    "seo_optimization_examples"
  ]
}