'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/aboutus' },
    { name: 'Contact Us', href: '/contactus' },
    { name: 'Product', href: '/products' },
    { name: 'Services', href: '/services' },
    { name: 'Customer', href: '#  ' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-neutral-900 border-b border-neutral-800 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <Link href="/">
            <Image
              src="/FmLogo.png"
              alt="Future Minutes"
              width={140}
              height={140}
              className="object-contain cursor-pointer"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-gray-300 hover:text-[#00BFFF] transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/login">
              <button className="bg-transparent border cursor-pointer border-[#00BFFF] text-[#00BFFF] font-medium px-5 py-2 rounded-full shadow-md hover:bg-[#00BFFF] hover:text-black transition-all duration-300">
                Login
              </button>
            </Link>

            <Link href="/consultation">
              <button className="bg-[#00BFFF] text-black font-medium px-5 py-2 rounded-full shadow-md hover:from-purple-500 hover:to-indigo-400 transition-all duration-300">
                Free Consultation
              </button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-gray-300"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="md:hidden bg-neutral-900 border-t border-neutral-800 px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-gray-300 hover:text-[#00BFFF] text-base transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}

            {/* Mobile Buttons */}
            <div className="flex flex-col gap-3 mt-4">
              <Link href="/login">
                <button className="w-full border border-[#00BFFF] text-[#00BFFF] font-semibold px-5 py-3 rounded-full shadow-lg hover:bg-[#00BFFF] hover:text-black transition-all duration-300">
                  Login
                </button>
              </Link>

              <Link href="/consultation">
                <button className="w-full bg-[#00BFFF] text-black font-semibold px-5 py-3 rounded-full shadow-lg hover:from-purple-500 hover:to-indigo-400 transition-all duration-300">
                  Free Consultation
                </button>
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
