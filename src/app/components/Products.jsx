'use client';
import { motion } from 'framer-motion';
import { Truck, Shield, Calendar, ArrowRight, CheckCircle, Globe, Book } from 'lucide-react';

export default function ProductsSection() {
  const products = [
    {
      icon: Book,
      name: 'DL',
      tagline: 'AACP Digital Learning Platform',
      url: 'aacp.com.pk',
      description:
        'An advanced digital learning solution empowering educators and learners with modern tools. Designed to deliver seamless online education experiences through interactive content and performance analytics.',
      features: [
        'Online Course Management',
        'Student & Teacher Dashboards',
        'Attendance & Reports',
        'Live Classes Integration',
        'Exam & Results System',
        'Responsive Interface',
        'Secure Cloud Storage',
        'Admin Analytics Dashboard'
      ],
      benefits:
        'Transform education delivery with a comprehensive, data-driven learning platform that simplifies management and enhances engagement.',
      color: 'from-[#00BFFF] to-[#0080FF]',
      gradient: 'from-[#00BFFF]/10 to-[#0080FF]/10'
    },
    {
      icon: Shield,
      name: 'ZSS',
      tagline: 'Integrated Communication & Security System',
      url: 'ics.futureminutes.com',
      description:
        'A smart platform for managing communication and security workflows across teams. From incident tracking to secure message sharing, ZSS delivers control and efficiency for modern organizations.',
      features: [
        'Incident Management',
        'Secure Communication',
        'User Access Control',
        'Team Notifications',
        'Reports & Insights',
        'Mobile Ready Interface',
        'Role-Based Permissions',
        'Cloud Data Security'
      ],
      benefits:
        'Centralize and streamline organizational communication with an intelligent platform built for speed, reliability, and safety.',
      color: 'from-[#0080FF] to-[#0060C0]',
      gradient: 'from-[#0080FF]/10 to-[#0060C0]/10'
    },
    {
      icon: Calendar,
      name: 'Rota Tracker',
      tagline: 'Staff Scheduling Software',
      url: 'rotatracker.com',
      description:
        'Advanced rota management software that makes staff scheduling effortless. Auto-assign shifts, track hours, and keep your entire team updated in real-time.',
      features: [
        'Auto-Scheduling',
        'Shift Management',
        'Time Tracking',
        'Leave Management',
        'Mobile Apps',
        'Team Communication',
        'Clock In/Out System',
        'Schedule Analytics'
      ],
      benefits:
        'Save hours on scheduling with AI-powered automation and keep your workforce organized and informed.',
      color: 'from-[#00A0E3] to-[#00BFFF]',
      gradient: 'from-[#00A0E3]/10 to-[#00BFFF]/10'
    }
  ];

  return (
    <section className="relative bg-[#0A0A0A] text-white py-24 overflow-hidden">
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
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-40 left-20 w-96 h-96 bg-[#00BFFF] rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Powerful <span className="text-transparent bg-clip-text bg-[#F04E01]">Software Solutions</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Industry-specific software platforms designed to transform how you manage your business operations.
            Built with cutting-edge technology and deep industry expertise.
          </p>
        </motion.div>

        <div className="space-y-12">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className="relative bg-gradient-to-br from-[#0d0d0d] to-[#1a1a1a] rounded-3xl border border-gray-800 overflow-hidden">
                <div className="relative grid md:grid-cols-5 gap-8 p-8 md:p-12">
                  <div className="md:col-span-3 space-y-6">
                    <div className="flex items-start gap-6">
                      <motion.div
                        className={`w-20 h-20 bg-gradient-to-br from-[#00BFFF] to-[#0080FF] ${product.color} rounded-2xl flex items-center justify-center shadow-xl flex-shrink-0`}
                      >
                        <product.icon className="w-10 h-10 text-white" />
                      </motion.div>

                      <div className="flex-1">
                        <h3 className="text-3xl md:text-4xl font-bold mb-2 text-white">{product.name}</h3>
                        <p className="text-[#00BFFF] text-lg font-semibold mb-2">{product.tagline}</p>
                        <a
                          href={`https://${product.url}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-gray-400 text-sm"
                        >
                          <Globe className="w-4 h-4" />
                          {product.url}
                        </a>
                      </div>
                    </div>

                    <p className="text-gray-300 text-lg leading-relaxed">{product.description}</p>

                    <div className="from-[#00BFFF] to-[#0080FF] bg-opacity-5 border border-[#00BFFF] border-opacity-20 rounded-xl p-4">
                      <p className="text-gray-200 leading-relaxed">
                        <span className="text-[white] font-10">{product.benefits}</span>
                      </p>
                    </div>

                    <motion.a
                      href={`https://${product.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-br from-[#00BFFF] to-[#0080FF] text-white font-semibold rounded-full`}
                    >
                      Visit Website <ArrowRight className="w-5 h-5" />
                    </motion.a>
                  </div>

                  <div className="md:col-span-2">
                    <div className="bg-[#0a0a0a] rounded-2xl border border-gray-800 p-6 h-full">
                      <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-[#00BFFF]" />
                        Key Features
                      </h4>
                      <ul className="space-y-3">
                        {product.features.map((feature, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="flex items-center gap-3 text-gray-300"
                          >
                            <div className="w-2 h-2 bg-[#00BFFF] rounded-full flex-shrink-0"></div>
                            <span>{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${product.color} opacity-5 rounded-bl-full`}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
