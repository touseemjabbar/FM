'use client';
import { motion } from 'framer-motion';
import { Code2, Smartphone, Globe, Database, Cloud, Palette, ArrowRight } from 'lucide-react';
import Link from 'next/link';
export default function ServicesSection() {
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies for optimal performance and user experience.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Secure'],
      color: 'from-[#00BFFF] to-[#00A0E3]'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that deliver seamless experiences on iOS and Android.',
      features: ['iOS & Android', 'Cross-Platform', 'Native Performance', 'User Friendly'],
      color: 'from-[#00BFFF] to-[#00A0E3]'
    },
    {
      icon: Code2,
      title: 'Software Development',
      description: 'Tailored software solutions designed to streamline your business processes and boost productivity.',
      features: ['Custom Solutions', 'Scalable', 'Integration', 'Support'],
      color: 'from-[#00BFFF] to-[#00A0E3]'
    },
    {
      icon: Database,
      title: 'Database Solutions',
      description: 'Robust database design and management to ensure your data is secure, organized, and accessible.',
      features: ['SQL & NoSQL', 'Cloud Database', 'Data Migration', 'Optimization'],
      color: 'from-[#00BFFF] to-[#00A0E3]'
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Cloud infrastructure setup and migration services for scalable and reliable business operations.',
      features: ['AWS & Azure', 'Migration', 'DevOps', 'Monitoring'],
      color: 'from-[#00BFFF] to-[#00A0E3]'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive designs that enhance user engagement and create memorable experiences.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Testing'],
      color: 'from-[#00BFFF] to-[#00A0E3]'
    }
  ];

  return (
    <section className="relative bg-[#0A0A0A] text-white py-24 overflow-hidden">
      {/* Background Grid */}
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

      {/* Glowing Orb */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#00BFFF] rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            What We <span className="text-transparent bg-clip-text bg-[#F04E01]">Offer</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            From concept to deployment, we provide comprehensive solutions tailored to your business needs. 
            Our expertise spans across multiple domains to help you succeed in the digital world.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative bg-gradient-to-br from-[#0d0d0d] to-[#1a1a1a] rounded-2xl border border-gray-800 transition-all duration-300 overflow-hidden"
            >
              <div className="relative p-8">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>

                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 bg-[#00BFFF] rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <a href="#" className="inline-flex items-center gap-2 text-[#00BFFF] font-semibold text-sm transition-all duration-300">
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#00BFFF] to-transparent opacity-10 rounded-bl-full"></div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-[#0d0d0d] via-[#1a1a1a] to-[#0d0d0d] border border-gray-800 rounded-3xl p-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your <span className="text-[#F04E01]">Project</span>?
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your ideas into reality. 
              Get in touch with our team for a free consultation.
            </p>
             <Link href='/contactus'>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-[#00BFFF] to-[#0080FF]  cursor-pointer text-black font-semibold rounded-full transition-all duration-300 flex items-center gap-2"
              >

                Get Free Consultation <ArrowRight className="w-5 h-5" />


              </motion.button>
            </div>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
