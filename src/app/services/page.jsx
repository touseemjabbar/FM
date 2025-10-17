'use client';
import { motion } from 'framer-motion';
import { Code2, Smartphone, Globe, Database, Cloud, Palette, ArrowRight, CheckCircle, Zap, Award, Users, TrendingUp, Target, Shield, Search, TestTube } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ServicesPage() {
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      tagline: 'Build Powerful Web Applications',
      shortDesc: 'Custom websites and web applications built with modern technologies for optimal performance and user experience.',
      fullDesc: 'We create stunning, high-performance websites and web applications that drive results. From simple landing pages to complex enterprise portals, our web development services cover the full spectrum of digital solutions. We use cutting-edge frameworks and follow industry best practices to ensure your web presence stands out.',
      features: [
        'Custom Website Development',
        'Progressive Web Apps (PWA)',
        'E-commerce Solutions',
        'Content Management Systems',
        'API Development & Integration',
        'Responsive Design',
        'SEO Optimization',
        'Performance Optimization',
        'Security Implementation',
        'Maintenance & Support'
      ],
      benefits: [
        'Fast loading speeds for better UX',
        'Mobile-first responsive design',
        'SEO-optimized for visibility',
        'Scalable architecture',
        'Secure and reliable',
        'Easy to maintain and update'
      ],
      pricing: { starting: '$5,000', timeline: '4-8 weeks' },
      color: 'from-[#00BFFF] to-[#0080FF]',
      stats: [
        { value: '80+', label: 'Websites Built' },
        { value: '98%', label: 'Client Satisfaction' },
        { value: '50ms', label: 'Avg Load Time' }
      ]
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      tagline: 'Native & Cross-Platform Apps',
      shortDesc: 'Native and cross-platform mobile applications that deliver seamless experiences on iOS and Android.',
      fullDesc: 'Transform your ideas into powerful mobile applications that users love. We develop native iOS and Android apps, as well as cross-platform solutions using React Native and Flutter. Our mobile apps are designed for performance, usability, and scalability.',
      features: [
        'iOS App Development',
        'Android App Development',
        'Cross-Platform Solutions',
        'UI/UX Design',
        'App Store Optimization',
        'Push Notifications',
        'In-App Purchases',
        'Offline Functionality',
        'Analytics Integration',
        'App Maintenance'
      ],
      benefits: [
        'Reach millions of mobile users',
        'Native performance',
        'Intuitive user interfaces',
        'Cross-platform compatibility',
        'Regular updates and support',
        'App store compliance'
      ],
      pricing: { starting: '$15,000', timeline: '8-16 weeks' },
      color: 'from-[#00BFFF] to-[#0080FF]',
      stats: [
        { value: '45+', label: 'Apps Developed' },
        { value: '4.8/5', label: 'App Store Rating' },
        { value: '1M+', label: 'Downloads' }
      ]
    },
    {
      icon: Code2,
      title: 'Software Development',
      tagline: 'Custom Enterprise Solutions',
      shortDesc: 'Tailored software solutions designed to streamline your business processes and boost productivity.',
      fullDesc: 'We build custom software solutions that solve complex business challenges. From CRM systems to inventory management, our enterprise software is designed to automate workflows, increase efficiency, and drive growth. We work closely with you to understand your unique needs and deliver solutions that fit perfectly.',
      features: [
        'Custom Software Development',
        'Enterprise Resource Planning',
        'CRM Systems',
        'Inventory Management',
        'Business Process Automation',
        'Legacy System Modernization',
        'Third-Party Integrations',
        'Reporting & Analytics',
        'User Training',
        'Ongoing Support'
      ],
      benefits: [
        'Streamlined business processes',
        'Increased productivity',
        'Better data insights',
        'Reduced operational costs',
        'Scalable solutions',
        'Competitive advantage'
      ],
      pricing: { starting: '$25,000', timeline: '12-24 weeks' },
      color: 'from-[#00BFFF] to-[#0080FF]',
      stats: [
        { value: '35+', label: 'Software Built' },
        { value: '60%', label: 'Efficiency Gain' },
        { value: '99.9%', label: 'Uptime' }
      ]
    },
    {
      icon: TestTube,
      title: 'SQA Development',
      tagline: 'Quality Assurance Excellence',
      shortDesc: 'Comprehensive software quality assurance and testing services to ensure flawless performance and user experience.',
      fullDesc: 'Deliver bug-free, high-quality software with our comprehensive SQA development services. We implement rigorous testing methodologies and quality assurance processes to identify issues before they impact your users, ensuring reliability, security, and optimal performance across all platforms and devices.',
      features: [
        'Manual & Automated Testing',
        'Functional & Regression Testing',
        'Performance & Load Testing',
        'Security Testing',
        'Mobile App Testing',
        'API Testing',
        'Cross-Browser Testing',
        'User Acceptance Testing',
        'Test Automation Frameworks',
        'Quality Metrics & Reporting'
      ],
      benefits: [
        'Bug-free software delivery',
        'Improved user satisfaction',
        'Reduced maintenance costs',
        'Faster time to market',
        'Compliance with standards',
        'Enhanced security posture'
      ],
      pricing: { starting: '$7,000', timeline: '3-6 weeks' },
      color: 'from-[#00BFFF] to-[#0080FF]',
      stats: [
        { value: '99.5%', label: 'Bug Detection Rate' },
        { value: '200+', label: 'Projects Tested' },
        { value: '60%', label: 'Faster Release' }
      ]
    },
    {
      icon: Search,
      title: 'SEO Services',
      tagline: 'Dominate Search Rankings',
      shortDesc: 'Comprehensive SEO strategies to improve your search engine visibility, drive organic traffic, and boost conversions.',
      fullDesc: 'Increase your online visibility and drive qualified traffic with our data-driven SEO services. We combine technical expertise with content strategy to help you rank higher in search results, attract your target audience, and achieve sustainable growth through organic search channels.',
      features: [
        'Technical SEO Audit',
        'On-Page Optimization',
        'Content Strategy & Creation',
        'Keyword Research & Analysis',
        'Link Building & Outreach',
        'Local SEO Optimization',
        'E-commerce SEO',
        'SEO Analytics & Reporting',
        'Voice Search Optimization',
        'International SEO'
      ],
      benefits: [
        'Higher search engine rankings',
        'Increased organic traffic',
        'Better conversion rates',
        'Long-term sustainable growth',
        'Competitive advantage',
        'Improved user experience'
      ],
      pricing: { starting: '$1,500/month', timeline: 'Ongoing' },
      color: 'from-[#00BFFF] to-[#0080FF]',
      stats: [
        { value: '300%', label: 'Traffic Increase' },
        { value: '85%', label: 'Keyword Ranking' },
        { value: '#1', label: 'Google Positions' }
      ]
    },
    {
      icon: Database,
      title: 'Database Solutions',
      tagline: 'Secure & Scalable Data Management',
      shortDesc: 'Robust database design and management to ensure your data is secure, organized, and accessible.',
      fullDesc: 'Your data is your most valuable asset. We design and implement database solutions that are secure, efficient, and scalable. Whether you need SQL, NoSQL, or cloud databases, we have the expertise to handle your data infrastructure needs.',
      features: [
        'Database Design & Architecture',
        'SQL & NoSQL Solutions',
        'Cloud Database Setup',
        'Data Migration Services',
        'Performance Optimization',
        'Backup & Recovery',
        'Security Implementation',
        'Database Monitoring',
        'Query Optimization',
        '24/7 Support'
      ],
      benefits: [
        'Fast query performance',
        'High availability',
        'Data security & compliance',
        'Automatic backups',
        'Scalable storage',
        'Cost optimization'
      ],
      pricing: { starting: '$8,000', timeline: '4-8 weeks' },
      color: 'from-[#00BFFF] to-[#0080FF]',
      stats: [
        { value: '50+', label: 'Databases Managed' },
        { value: '99.9%', label: 'Uptime' },
        { value: '<100ms', label: 'Query Speed' }
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      tagline: 'AWS, Azure & Google Cloud',
      shortDesc: 'Cloud infrastructure setup and migration services for scalable and reliable business operations.',
      fullDesc: 'Leverage the power of cloud computing to scale your business. We provide end-to-end cloud services including infrastructure setup, migration, optimization, and management. Our cloud experts work with leading platforms like AWS, Azure, and Google Cloud.',
      features: [
        'Cloud Architecture Design',
        'Cloud Migration Services',
        'AWS Services',
        'Azure Solutions',
        'Google Cloud Platform',
        'DevOps & CI/CD',
        'Container Orchestration',
        'Serverless Computing',
        'Cloud Security',
        'Cost Optimization'
      ],
      benefits: [
        'Scalability on demand',
        'Reduced infrastructure costs',
        'High availability',
        'Disaster recovery',
        'Global reach',
        'Pay-as-you-go pricing'
      ],
      pricing: { starting: '$10,000', timeline: '6-12 weeks' },
      color: 'from-[#00BFFF] to-[#0080FF]',
      stats: [
        { value: '40+', label: 'Cloud Projects' },
        { value: '40%', label: 'Cost Savings' },
        { value: '99.99%', label: 'Availability' }
      ]
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      tagline: 'Beautiful & Intuitive Interfaces',
      shortDesc: 'Beautiful and intuitive designs that enhance user engagement and create memorable experiences.',
      fullDesc: 'Great design is more than aesthetics—it\'s about creating experiences that delight users. Our UI/UX design services focus on user research, intuitive interfaces, and engaging interactions that convert visitors into customers.',
      features: [
        'User Research & Analysis',
        'Wireframing & Prototyping',
        'Visual Design',
        'Interaction Design',
        'Usability Testing',
        'Design Systems',
        'Brand Identity',
        'Responsive Design',
        'Accessibility Design',
        'Design Handoff'
      ],
      benefits: [
        'Increased user engagement',
        'Higher conversion rates',
        'Better user satisfaction',
        'Consistent brand experience',
        'Reduced development time',
        'Competitive advantage'
      ],
      pricing: { starting: '$6,000', timeline: '4-6 weeks' },
      color: 'from-[#00BFFF] to-[#0080FF]',
      stats: [
        { value: '100+', label: 'Designs Created' },
        { value: '45%', label: 'Conversion Increase' },
        { value: '4.9/5', label: 'Client Rating' }
      ]
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: 'Proven Expertise',
      desc: '10+ years delivering quality solutions'
    },
    {
      icon: Users,
      title: 'Dedicated Teams',
      desc: 'Experienced professionals on your project'
    },
    {
      icon: Zap,
      title: 'Agile Approach',
      desc: 'Fast delivery with flexibility'
    },
    {
      icon: Shield,
      title: 'Quality Assured',
      desc: 'Rigorous testing and best practices'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      desc: 'Built to grow with your business'
    },
    {
      icon: Target,
      title: 'Result Focused',
      desc: 'Delivering measurable outcomes'
    }
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
          className="absolute top-20 right-20 w-96 h-96 bg-[#00BFFF] rounded-full blur-3xl"
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
           

            <h1 className="text-5xl md:text-5xl font-bold mb-6">
              Comprehensive <span className="text-transparent bg-clip-text bg-[#F94F02]">Digital</span><br />
              Solutions
            </h1>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
              From concept to deployment, we provide end-to-end technology services 
              that drive innovation and business growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-12">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="text-[#F94F02]">Our Services</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#0d0d0d] to-[#1a1a1a] border border-gray-800 rounded-xl p-6 hover:border-[#00BFFF] transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#00BFFF] bg-opacity-10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-[black]" />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Detailed */}
      {services.map((service, serviceIndex) => (
        <section 
          key={serviceIndex} 
          className={`relative py-24 ${serviceIndex % 2 === 1 ? 'bg-gradient-to-b from-transparent via-[#0d0d0d] to-transparent' : ''}`}
        >
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            
            {/* Service Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <motion.div
                  transition={{ duration: 0.6 }}
                  className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-xl`}
                >
                  <service.icon className="w-10 h-10 text-white" />
                </motion.div>
                <div className="text-left">
                  <h2 className="text-4xl md:text-5xl font-bold">{service.title}</h2>
                  <p className="text-[#00BFFF] text-lg">{service.tagline}</p>
                </div>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto"
            >
              {service.stats.map((stat, index) => (
                <div key={index} className="bg-gradient-to-br from-[#0d0d0d] to-[#1a1a1a] border border-gray-800 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-[#00BFFF] mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Content Grid */}
            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              
              {/* Left Column */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* Description */}
                <div className="bg-gradient-to-br from-[#0d0d0d] to-[#1a1a1a] border border-gray-800 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-4">Overview</h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    {service.fullDesc}
                  </p>
                </div>

                {/* Benefits */}
                <div className="bg-gradient-to-br from-[#0d0d0d] to-[#1a1a1a] border border-gray-800 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-6">Key Benefits</h3>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-start gap-3 text-gray-300"
                      >
                        <CheckCircle className="w-5 h-5 text-[#00BFFF] flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

              
              </motion.div>

              {/* Right Column */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* Features */}
                <div className="bg-gradient-to-br from-[#0d0d0d] to-[#1a1a1a] border border-gray-800 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-6">What's Included</h3>
                  <div className="space-y-3">
                    {service.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.03 }}
                        className="flex items-center gap-3 text-gray-300 p-3 bg-[#0a0a0a] rounded-lg hover:bg-[#0f0f0f] transition-colors"
                      >
                        <div className="w-2 h-2 bg-[#00BFFF] rounded-full flex-shrink-0"></div>
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

              
               
              </motion.div>
            </div>

            {/* Pricing & CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-[#0d0d0d] via-[#1a1a1a] to-[#0d0d0d] border border-gray-800 rounded-2xl p-8 text-center"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-left">
                  <h3 className="text-2xl font-bold mb-2">Ready to Get Started?</h3>
                 
                </div>
                <div className="flex gap-4">
                  <motion.button
                    className={`px-8 py-4 bg-gradient-to-r ${service.color} text-white cursor-pointer font-semibold rounded-full hover:shadow-[0_0_30px_rgba(0,191,255,0.4)] transition-all duration-300 flex items-center gap-2`}
                  >
                    Request Quote <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
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
              Let's Build Something <span className="text-[#00BFFF]">Amazing</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how our services can help you achieve your goals.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-[#00BFFF] to-[#0080FF] text-black font-semibold rounded-full hover:shadow-[0_0_30px_rgba(0,191,255,0.5)] transition-all duration-300"
              >
                Start Your Project
              </motion.button>
              
              <motion.button
                className="px-8 py-4 border-2 border-[#00BFFF] text-[#00BFFF] cursor-pointer font-semibold rounded-full hover:bg-[#00BFFF] hover:text-black transition-all duration-300"
              >
                Schedule Consultation
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