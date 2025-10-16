'use client';
import { motion } from 'framer-motion';
import { Book, Shield, Calendar, ArrowRight, CheckCircle, Globe, Star, Users, Zap, Lock, BarChart, Cloud, Smartphone, Clock } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ProductsPage() {
  const products = [
    {
      icon: Book,
      name: 'Digital Library',
      tagline: 'Smart Document & Resource Management',
      url: 'aacp.com.pk',
      shortDescription: 'A cloud-based platform that centralizes all your digital documents, books, and resources in one secure location.',
      fullDescription: 'Digital Library is designed to simplify how organizations and institutions store, access, and share information. It offers intelligent document categorization, secure access control, and real-time collaboration — making knowledge management effortless and efficient.',
      features: [
        'Document Upload & Storage',
        'Smart Search Functionality',
        'User Access Control',
        'Multi-Format Support (PDF, Word, etc.)',
        'Version Control & History',
        'Secure Cloud Backup',
        'Role-Based Permissions',
        'Instant Sharing & Collaboration',
        'Usage Analytics & Reports',
        'Mobile Accessibility',
        'Bulk Import/Export Tools',
        'API Integration'
      ],
      benefits: [
        'Centralize all resources in one place',
        'Enhance productivity and accessibility',
        'Reduce manual document handling',
        'Ensure data privacy and compliance',
        'Access securely from anywhere',
        'Collaborate in real-time'
      ],
      pricing: [
        { plan: 'Basic', price: '£79/month', desc: 'For small teams' },
        { plan: 'Professional', price: '£149/month', desc: 'For organizations' },
        { plan: 'Enterprise', price: 'Custom', desc: 'For institutions & large organizations' }
      ],
      stats: [
        { icon: Users, value: '2K+', label: 'Active Users' },
        { icon: Book, value: '50K+', label: 'Documents Managed' },
        { icon: Star, value: '4.9/5', label: 'User Rating' }
      ],
      color: 'from-[#00BFFF] to-[#0080FF]',
      gradient: 'bg-[#00BFFF]'
    },
    {
      icon: Shield,
      name: 'Zaid Security System (ZSS)',
      tagline: 'Next-Gen Security Monitoring Platform',
      url: 'ics.futureminutes.com',
      shortDescription: 'An integrated security system that combines surveillance, monitoring, and access control under one intelligent platform.',
      fullDescription: 'Zaid Security System (ZSS) is built to deliver advanced monitoring capabilities for businesses and security firms. It provides live incident tracking, access control, and real-time alerting with an intuitive dashboard powered by cloud technology.',
      features: [
        'Real-Time Monitoring Dashboard',
        'Incident Management',
        'Access Control & Permissions',
        'CCTV & Sensor Integration',
        'AI Motion Detection',
        'Automated Alerts & Notifications',
        'Visitor Log Tracking',
        'Employee Shift Management',
        'Security Analytics & Reporting',
        'Cloud Backup & Storage',
        'Multi-Device Support',
        'Customizable Security Zones'
      ],
      benefits: [
        'Enhance situational awareness',
        'Automate security responses',
        'Reduce false alarms',
        'Improve compliance & reporting',
        'Enable faster decision-making',
        'Centralized data management'
      ],
      pricing: [
        { plan: 'Starter', price: '£99/month', desc: 'Ideal for small offices' },
        { plan: 'Professional', price: '£199/month', desc: 'For multi-site businesses' },
        { plan: 'Enterprise', price: 'Custom', desc: 'Tailored enterprise solutions' }
      ],
      stats: [
        { icon: Shield, value: '500+', label: 'Sites Secured' },
        { icon: Users, value: '3K+', label: 'Active Personnel' },
        { icon: Lock, value: '99.9%', label: 'Uptime' }
      ],
      color: 'from-[#0080FF] to-[#0060C0]',
      gradient: 'bg-[#00BFFF]'
    },
    {
      icon: Calendar,
      name: 'Rota Tracker',
      tagline: 'Smart Staff Scheduling Software',
      url: 'rotatracker.com',
      shortDescription: 'Automate your staff scheduling with AI-powered rota management that saves time and reduces conflicts.',
      fullDescription: 'Rota Tracker takes the hassle out of staff scheduling with intelligent automation, real-time updates, and seamless communication. Our platform ensures optimal staffing levels while considering employee preferences, availability, and labor costs.',
      features: [
        'AI Auto-Scheduling',
        'Shift Management & Templates',
        'Time & Attendance Tracking',
        'Leave Management System',
        'Clock In/Out with GPS',
        'Team Communication Hub',
        'Availability Management',
        'Overtime Tracking',
        'Payroll Integration',
        'Mobile Apps (iOS & Android)',
        'Shift Swap & Coverage',
        'Schedule Analytics & Reports'
      ],
      benefits: [
        'Save 10+ hours per week on scheduling',
        'Reduce scheduling conflicts by 90%',
        'Improve employee satisfaction',
        'Real-time schedule updates',
        'Optimize labor costs',
        'Better work-life balance for staff'
      ],
      pricing: [
        { plan: 'Starter', price: '£79/month', desc: 'Up to 25 employees' },
        { plan: 'Business', price: '£159/month', desc: 'Up to 100 employees' },
        { plan: 'Enterprise', price: 'Custom', desc: 'Unlimited employees' }
      ],
      stats: [
        { icon: Users, value: '50K+', label: 'Employees Managed' },
        { icon: Calendar, value: '100K+', label: 'Shifts Scheduled' },
        { icon: Clock, value: '75%', label: 'Time Saved' }
      ],
      color: 'from-[#00A0E3] to-[#00BFFF]',
      gradient: 'bg-[#00BFFF]'
    }
  ];

  const commonFeatures = [
    { icon: Cloud, title: 'Cloud-Based', desc: 'Access from anywhere, anytime' },
    { icon: Lock, title: 'Secure', desc: 'Bank-level encryption & security' },
    { icon: Smartphone, title: 'Mobile Apps', desc: 'iOS & Android native apps' },
    { icon: Zap, title: 'Fast', desc: 'Optimized performance' },
    { icon: Users, title: 'Support', desc: '24/7 customer support' },
    { icon: BarChart, title: 'Analytics', desc: 'Detailed insights & reports' }
  ];

  return (
    <>
    <Navbar/>
   
    <div className="relative bg-[#0A0A0A] text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(0, 191, 255, 0.02) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0, 191, 255, 0.02) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-32">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 left-20 w-96 h-96 bg-[#00BFFF] rounded-full blur-3xl"
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
    

            <h1 className="text-5xl md:text-5xl font-bold mb-6">
              Industry-Leading <span className="text-transparent bg-clip-text bg-[#F65301]">Software</span><br />
              Solutions
            </h1>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
              Purpose-built software platforms designed to transform operations, increase efficiency, 
              and drive growth across multiple industries.
            </p>
          </motion.div>

          {/* Common Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-16"
          >
            {commonFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-[#0d0d0d] to-[#1a1a1a] border border-gray-800 rounded-xl p-4 text-center hover:border-[#00BFFF] transition-all duration-300"
              >
                <div className="w-10 h-10 bg-[#00BFFF] bg-opacity-10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <feature.icon className="w-5 h-5 text-[black]" />
                </div>
                <h4 className="font-semibold text-sm mb-1">{feature.title}</h4>
                <p className="text-xs text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Detailed Section */}
      {products.map((product, productIndex) => (
        <section key={productIndex} className={`relative py-24 ${productIndex % 2 === 1 ? 'bg-gradient-to-b from-transparent via-[#0d0d0d] to-transparent' : ''}`}>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            
            {/* Product Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <motion.div
                  transition={{ duration: 0.6 }}
                  className={`w-20 h-20 bg-[#00BFFF] ${product.color} rounded-2xl flex items-center justify-center shadow-xl`}
                >
                  <product.icon className="w-10  h-10 text-white" />
                </motion.div>
                <div className="text-left">
                  <h2 className="text-4xl md:text-5xl font-bold">{product.name}</h2>
                  <p className="text-[#00BFFF] text-lg">{product.tagline}</p>
                </div>
              </div>
              <a 
                href={`https://${product.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-[#00BFFF] transition-colors"
              >
                <Globe className="w-4 h-4" />
                {product.url}
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto"
            >
              {product.stats.map((stat, index) => (
                <div key={index} className="bg-gradient-to-br from-[#0d0d0d] to-[#1a1a1a] border border-gray-800 rounded-xl p-6 text-center">
                  <stat.icon className="w-8 h-8 text-[#00BFFF] mx-auto mb-3" />
                  <div className="text-3xl font-bold text-[#00BFFF] mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              
              {/* Left - Description & Benefits */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="bg-gradient-to-br from-[#0d0d0d] to-[#1a1a1a] border border-gray-800 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-4">Overview</h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-4">
                    {product.shortDescription}
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    {product.fullDescription}
                  </p>
                </div>

                <div className="bg-gradient-to-br from-[#0d0d0d] to-[#1a1a1a] border border-gray-800 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-[#00BFFF]" />
                    Key Benefits
                  </h3>
                  <ul className="space-y-3">
                    {product.benefits.map((benefit, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-start gap-3 text-gray-300"
                      >
                        <div className="w-2 h-2 bg-[#00BFFF] rounded-full mt-2 flex-shrink-0"></div>
                        <span>{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Right - Features */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-[#0d0d0d] to-[#1a1a1a] border border-gray-800 rounded-2xl p-8 h-full">
                  <h3 className="text-2xl font-bold mb-6">Features</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {product.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.03 }}
                        className="flex items-center gap-3 text-gray-300 text-sm p-3 bg-[#0a0a0a] rounded-lg hover:bg-[#0f0f0f] transition-colors"
                      >
                        <CheckCircle className="w-4 h-4 text-[#00BFFF] flex-shrink-0" />
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

          
          </div>
        </section>
      ))}

      {/* Final CTA */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#0d0d0d] via-[#1a1a1a] to-[#0d0d0d] border border-gray-800 rounded-3xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Need a <span className="text-[#F65301]">Custom Solution</span>?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Can't find exactly what you need? We build custom software solutions 
              tailored to your specific business requirements.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-[#00BFFF] to-[#0080FF] text-black font-semibold rounded-full hover:shadow-[0_0_30px_rgba(0,191,255,0.5)] transition-all duration-300"
              >
                Request Custom Development
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-[#00BFFF] text-[#00BFFF] font-semibold rounded-full hover:bg-[#00BFFF] hover:text-black transition-all duration-300"
              >
                Schedule a Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    <Footer/>
     </>
  );
}