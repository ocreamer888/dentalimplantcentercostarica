"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Free Estimate', href: '/free-estimate' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Icon icon="mdi:tooth" className="h-8 w-8 text-purple-200" />
              <span className="ml-2 text-xl font-bold text-white">
                Dental Implant Center Costa Rica
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden shadow-md bg-white/20 backdrop-blur-md rounded-full px-4 md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-purple-200 px-3 py-2 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side - Contact and Theme Toggle */}
          <div className="flex items-center space-x-4">
            {/* Contact Button */}
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-medium rounded-full text-white bg-purple-700 hover:bg-purple-600 transition-colors"
            >
              Book Consultation
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Icon 
                icon={isMenuOpen ? "mdi:close" : "mdi:menu"} 
                className="h-6 w-6" 
              />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="text-blue-600 hover:text-blue-700 block px-3 py-2 text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Consultation
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
