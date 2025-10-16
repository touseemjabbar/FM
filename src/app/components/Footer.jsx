'use client';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Github, ArrowRight, Send } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
    setEmail('');
  };

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#team' },
      { name: 'Careers', href: '#careers' },
      { name: 'Blog', href: '#blog' }
    ],
    services: [
      { name: 'Web Development', href: '#services' },
      { name: 'Mobile Apps', href: '#services' },
      { name: 'Software Development', href: '#services' },
      { name: 'UI/UX Design', href: '#services' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Github, href: '#', label: 'GitHub' }
  ];

  return (
    <footer className="relative bg-[#0A0A0A] text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 191, 255, 0.02) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(0, 191, 255, 0.02) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        ></div>
      </div>

      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-20 right-20 w-96 h-96 bg-[#00BFFF] rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Company Info */}
        <div className="space-y-6">
          <Link href="/">
            <Image
              src="/FmLogo.png"
              alt="Future Minutes"
              width={140}
              height={140}
              className="object-contain cursor-pointer"
            />
          </Link>
          <p className="text-gray-400 leading-relaxed">
            Building digital brilliance for a smarter future. We transform ideas into powerful software solutions.
          </p>

          <div className="space-y-3">
            <a
              href="mailto:service@serviceprovider.pk"
              className="flex items-center gap-3 text-gray-400 hover:text-[#00BFFF] transition-colors"
            >
              <div className="w-8 h-8 bg-[#00BFFF] bg-opacity-10 rounded-lg flex items-center justify-center">
                <Mail className="w-4 h-4 text-[black]" />
              </div>
              <span className="text-sm">service@serviceprovider.pk</span>
            </a>

            <a
              href="tel:+923074585990"
              className="flex items-center gap-3 text-gray-400 hover:text-[#00BFFF] transition-colors"
            >
              <div className="w-8 h-8 bg-[#00BFFF] bg-opacity-10 rounded-lg flex items-center justify-center">
                <Phone className="w-4 h-4 text-[black]" />
              </div>
              <span className="text-sm">+92 307 4585 990</span>
            </a>

            <div className="flex items-start gap-3 text-gray-400">
              <div className="w-8 h-8 bg-[#00BFFF] bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-4 h-4 text-[black]" />
              </div>
              <span className="text-sm">
                41/1 F-2, Punjab Housing Society, DHA Lahore Cantt
              </span>
            </div>
          </div>
        </div>

        {/* Company & Services Links */}
        <div className="grid grid-cols-2 gap-10">
          {/* Company */}
          <div>
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#00BFFF] transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#00BFFF] transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Subscribe Section - moved to right side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h4 className="text-2xl font-bold">
            Subscribe to Our <span className="text-[#00BFFF]">Newsletter</span>
          </h4>
          <p className="text-gray-400 text-sm">
            Stay updated with our latest news, products, and exclusive offers.
          </p>  

          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-3 bg-[#0d0d0d] border border-gray-800 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-[#00BFFF] transition-colors"
            />
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="px-4 py-1 bg-gradient-to-r from-[#00BFFF] to-[#0080FF] text-white font-semibold rounded-full cursor-pointer flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Subscribe
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="py-8 border-t border-gray-800">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-6">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Future Minutes. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-[#0d0d0d] border border-gray-800 rounded-full flex items-center justify-center hover:bg-[#00BFFF] hover:border-[#00BFFF] transition-all duration-300 group"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </motion.a>
            ))}
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-6 text-sm">
            <a href="#privacy" className="text-gray-400 hover:text-[#00BFFF] transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="text-gray-400 hover:text-[#00BFFF] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
