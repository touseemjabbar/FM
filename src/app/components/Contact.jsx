import React from 'react';
import { Users, FileText, MousePointer, TrendingUp, Globe, UserCheck } from 'lucide-react';

export default function XcellerateSection() {
  return (
    <div className="relative w-full">
      {/* Top Section with CTA */}
      <div className="bg-white px-4 py-12 md:py-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 text-center md:text-left">
            <p className="text-gray-800 text-base md:text-lg leading-relaxed max-w-2xl">
              Get in touch with one of our Business Process Specialists who will work with you to clearly understand your requirements and identify a solution tailored to your business needs.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded transition-colors duration-300 w-full sm:w-auto whitespace-nowrap">
              CONTACT US
            </button>
            <button className="bg-gray-800 hover:bg-gray-900 text-white font-semibold px-8 py-3 rounded transition-colors duration-300 w-full sm:w-auto whitespace-nowrap">
              Upcoming Events
            </button>
          </div>
        </div>
      </div>

      {/* Why Xcellerate Section with Background */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 overflow-hidden">
        {/* Background Image Overlay */}
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{
            backgroundImage: "url('/footer-background-image.jpg')",
            backgroundBlendMode: 'overlay'
          }}
        />

        {/* Decorative Arrow Shape */}
        <div className="absolute bottom-0 left-0 w-full opacity-30 hidden md:block">
          <svg viewBox="0 0 1440 400" className="w-full h-auto" preserveAspectRatio="none">
            <path
              d="M0,300 L200,100 L400,200 L600,50 L800,150 L1000,100 L1200,200 L1440,150 L1440,400 L0,400 Z"
              fill="url(#blueGradient)"
              opacity="0.3"
            />
            <defs>
              <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1e40af" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#1e3a8a" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Title */}
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                WHY XCELLERATE
                <span className="relative inline-block ml-3">
                  <span className="text-blue-500 italic">IT</span>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500"></div>
                </span>
              </h2>
            </div>

            {/* Right Side - Content Box */}
            <div className="bg-white rounded-lg shadow-2xl p-8 md:p-10">
              <p className="text-gray-700 text-base leading-relaxed mb-8">
                With over 25 years of knowledge and experience in Business Process Automation, Xcellerate IT is a leading Australian provider of powerful digital transformation solutions.
              </p>

              {/* Icons Grid */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <FileText className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <MousePointer className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <Globe className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <UserCheck className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-gray-800 hover:bg-gray-900 text-white font-semibold px-6 py-3 rounded transition-colors duration-300">
                  Access Services
                </button>
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded transition-colors duration-300">
                  White Papers
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Arrow SVG */}
        <div className="absolute bottom-0 left-0 w-full h-32 md:h-48 pointer-events-none">
          <svg viewBox="0 0 1200 400" className="w-full h-full" preserveAspectRatio="xMidYMax slice">
            {/* Layered Arrow Effect */}
            <path d="M0,200 L300,50 L600,150 L900,100 L1200,200 L1200,400 L0,400 Z" fill="#1e3a8a" opacity="0.6"/>
            <path d="M100,250 L400,100 L700,200 L1000,150 L1200,250 L1200,400 L0,400 Z" fill="#2563eb" opacity="0.5"/>
            <path d="M200,300 L500,150 L800,250 L1100,200 L1200,300 L1200,400 L0,400 Z" fill="#3b82f6" opacity="0.4"/>
            <path d="M0,350 L400,250 L800,320 L1200,280 L1200,400 L0,400 Z" fill="#60a5fa" opacity="0.3"/>
          </svg>
        </div>
      </div>
    </div>
  );
}