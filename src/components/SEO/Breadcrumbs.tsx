
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  url: string;
  current?: boolean;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumbs({ items = [], className = '' }: BreadcrumbsProps) {
  // Defensive check - if items is undefined/null, use empty array
  const breadcrumbItems = items || [];
  
  // Don't render if no items (except home)
  if (!breadcrumbItems.length) {
    return (
      <nav className={`flex ${className}`} aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2">
          <li>
            <Link 
              href="/" 
              className="text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="Home"
            >
              <Home className="h-5 w-5" />
            </Link>
          </li>
        </ol>
      </nav>
    );
  }

  return (
    <nav className={`flex ${className}`} aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        <li>
          <Link 
            href="/" 
            className="text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Home"
          >
            <Home className="h-5 w-5" />
          </Link>
        </li>
        
        {breadcrumbItems.map((item) => (
          <li key={item.url} className="flex items-center">
            <ChevronRight className="h-4 w-4 text-gray-400 mx-2" />
            {item.current ? (
              <span className="text-gray-900 font-medium" aria-current="page">
                {item.name}
              </span>
            ) : (
              <Link
                href={item.url}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

// Pre-built breadcrumb configurations
export const breadcrumbConfigs = {
  procedures: [
    { name: 'Procedures', url: '/procedures' }
  ],
  allOn4: [
    { name: 'Procedures', url: '/procedures' },
    { name: 'All-on-4 Dental Implants', url: '/procedures/all-on-4', current: true }
  ],
  allOn6: [
    { name: 'Procedures', url: '/procedures' },
    { name: 'All-on-6 Dental Implants', url: '/procedures/all-on-6', current: true }
  ],
  cost: [
    { name: 'Cost & Pricing', url: '/cost', current: true }
  ],
  locations: [
    { name: 'Locations', url: '/locations' }
  ],
  miami: [
    { name: 'Locations', url: '/locations' },
    { name: 'Miami', url: '/locations/miami', current: true }
  ],
  losAngeles: [
    { name: 'Locations', url: '/locations' },
    { name: 'Los Angeles', url: '/locations/los-angeles', current: true }
  ]
};