'use client';
import { motion } from 'framer-motion';
import { Star, Quote, Users, Award, TrendingUp, Heart, CheckCircle, Target, Zap, Shield } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function CustomersPage() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CEO',
      company: 'TechStart Inc.',
      image: '/client1.jpg',
      rating: 5,
      text: 'Working with this team was an absolute pleasure. They delivered our web application ahead of schedule and exceeded all expectations. Their attention to detail and professionalism is unmatched. The level of communication throughout the project was exceptional.',
      project: 'E-commerce Platform',
      results: '200% increase in sales, 50% faster checkout',
      duration: '3 months',
      industry: 'E-commerce'
    },
    {
      name: 'Michael Chen',
      position: 'Founder',
      company: 'AppVenture',
      image: '/client2.jpg',
      rating: 5,
      text: 'The mobile app they developed for us has received outstanding feedback from our users. The team was responsive, creative, and truly understood our vision. They went above and beyond to ensure our app stood out in the market.',
      project: 'Mobile Application',
      results: '4.8 star rating, 100K+ downloads',
      duration: '4 months',
      industry: 'Technology'
    },
    {
      name: 'Emily Rodriguez',
      position: 'CTO',
      company: 'DataFlow Systems',
      image: '/client3.jpg',
      rating: 5,
      text: 'Exceptional quality and outstanding support! They transformed our outdated system into a modern, efficient platform. The ROI has been incredible. Will definitely work with them again. Their technical expertise is top-notch.',
      project: 'Enterprise Software',
      results: '60% efficiency improvement, $500K cost savings',
      duration: '6 months',
      industry: 'Enterprise'
    },
    {
      name: 'David Thompson',
      position: 'Marketing Director',
      company: 'GrowthHub',
      image: '/client4.jpg',
      rating: 5,
      text: 'Their UI/UX design skills are top-notch. They created a beautiful, user-friendly interface that increased our conversion rate by 45%. Professional team with great communication. They really understand what users want.',
      project: 'Website Redesign',
      results: '45% conversion increase, 70% engagement boost',
      duration: '2 months',
      industry: 'Marketing'
    },
    {
      name: 'Lisa Anderson',
      position: 'Product Manager',
      company: 'CloudTech',
      image: '/client5.jpg',
      rating: 5,
      text: 'From initial consultation to final delivery, everything was seamless. They provided valuable insights and delivered a solution that perfectly fits our needs. Outstanding work! Their cloud expertise saved us thousands.',
      project: 'Cloud Migration',
      results: '40% cost reduction, 99.9% uptime',
      duration: '5 months',
      industry: 'Cloud Services'
    },
    {
      name: 'James Wilson',
      position: 'Director',
      company: 'InnovateCo',
      image: '/client6.jpg',
      rating: 5,
      text: 'Best development team we have ever worked with! They are highly skilled, reliable, and committed to excellence. Our project was completed on time and within budget. I highly recommend their services to anyone.',
      project: 'Custom CRM System',
      results: '80% productivity increase, seamless integration',
      duration: '4 months',
      industry: 'Software'
    }
  ];

  const stats = [
    { icon: Users, number: '120+', label: 'Happy Clients', color: 'from-[#00BFFF] to-[#0080FF]' },
    { icon: Award, number: '150+', label: 'Projects Completed', color: 'from-[#0080FF] to-[#0060C0]' },
    { icon: Star, number: '4.9/5', label: 'Average Rating', color: 'from-[#00A0E3] to-[#00BFFF]' },
    { icon: Heart, number: '99%', label: 'Client Satisfaction', color: 'from-[#00BFFF] to-[#00A0E3]' }
  ];

  const clientLogos = [
    'TechStart Inc.', 'AppVenture', 'DataFlow Systems', 'GrowthHub', 
    'CloudTech', 'InnovateCo', 'NextGen Solutions', 'FutureTech', 
    'SmartSolutions', 'DigitalEdge', 'CodeCraft', 'WebWorks',
    'CloudBase', 'DataVision', 'TechPro', 'Innovation Labs'
  ];

  const successMetrics = [
    {
      icon: TrendingUp,
      value: '200%',
      label: 'Average ROI Increase',
      desc: 'Our clients see significant returns'
    },
    {
      icon: Zap,
      value: '50%',
      label: 'Faster Time to Market',
      desc: 'Accelerated project delivery'
    },
    {
      icon: Target,
      value: '95%',
      label: 'Project Success Rate',
      desc: 'On-time and on-budget delivery'
    },
    {
      icon: Shield,
      value: '100%',
      label: 'Client Retention',
      desc: 'Long-term partnerships'
    }
  ];

  const industries = [
    'E-commerce', 'Healthcare', 'Finance', 'Education', 
    'Real Estate', 'Manufacturing', 'Logistics', 'Retail',
    'Entertainment', 'Hospitality', 'Legal', 'Non-Profit'
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
              Trusted by <span className="text-transparent bg-clip-text bg-[#FB4E00]">Industry Leaders</span>
            </h1>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it. Here's what our valued clients have to say about 
              working with us and the results we've delivered together.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-[#0d0d0d] to-[#1a1a1a] border border-gray-800 rounded-2xl p-8 text-center hover:border-[#00BFFF] transition-all duration-300"
              >
                <div className={`w-14 h-14 bg-[#009EFF] ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  className="text-4xl font-bold text-[#00BFFF] mb-2"
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="relative py-12">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Impact in <span className="text-[#009EFF]">Numbers</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {successMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
               
                className="bg-gradient-to-br from-[#0d0d0d] to-[#1a1a1a] border border-gray-800 rounded-2xl p-6 text-center hover:border-[#00BFFF] transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#00BFFF] bg-opacity-10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="w-6 h-6 text-[black]" />
                </div>
                <div className="text-4xl font-bold text-[#00BFFF] mb-2">{metric.value}</div>
                <h3 className="font-semibold mb-2">{metric.label}</h3>
                <p className="text-gray-400 text-sm">{metric.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-24 bg-gradient-to-b from-transparent via-[#0d0d0d] to-transparent">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Client <span className="text-[#FB4E00]">Testimonials</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Real stories from real clients who have achieved remarkable success with our solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}

                className="group relative bg-gradient-to-br from-[#0d0d0d] to-[#1a1a1a] rounded-2xl border border-gray-800 hover:border-[#00BFFF] transition-all duration-300 p-8"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-20 h-20 text-[#00BFFF]" />
                </div>

                {/* Client Info */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#00BFFF] flex-shrink-0">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-[#00BFFF] to-[#0080FF] flex items-center justify-center text-2xl font-bold">' + testimonial.name.charAt(0) + '</div>';
                      }}
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.position}</p>
                    <p className="text-sm text-[#00BFFF]">{testimonial.company}</p>
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#00BFFF] text-[#00BFFF]" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-300 mb-6 leading-relaxed relative z-10">
                  "{testimonial.text}"
                </p>

                
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Industries We <span className="text-[#FB4E00]">Serve</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Our expertise spans across multiple industries, delivering tailored solutions for diverse business needs
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
               
                className="px-6 py-3 bg-gradient-to-br from-[#0d0d0d] to-[#1a1a1a] border border-gray-800 hover:border-[#00BFFF] rounded-full transition-all duration-300"
              >
                <span className="text-sm font-medium">{industry}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="relative py-24 bg-gradient-to-b from-transparent to-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Trusted By <span className="text-[#FB4E00]">Leading Companies</span>
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {clientLogos.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="bg-gradient-to-br from-[#0d0d0d] to-[#1a1a1a] border border-gray-800 rounded-xl p-6 flex items-center justify-center hover:border-[#00BFFF] transition-all duration-300 min-h-[100px]"
              >
                <span className="text-gray-400 font-semibold text-center text-sm">{client}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#0d0d0d] via-[#1a1a1a] to-[#0d0d0d] border border-gray-800 rounded-3xl p-12 text-center"
          >
            <TrendingUp className="w-12 h-12 text-[#00BFFF] mx-auto mb-4" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Join Our <span className="text-[#FB4E00]">Success Stories</span>?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Let's create something amazing together. Get in touch with our team and 
              start your journey to digital excellence today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-[#00BFFF] to-[#0080FF] cursor-pointer text-black font-semibold rounded-full hover:shadow-[0_0_30px_rgba(0,191,255,0.5)] transition-all duration-300"
              >
                Start Your Project Today
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 cursor-pointer border-[#00BFFF] text-[#00BFFF] font-semibold rounded-full hover:bg-[#00BFFF] hover:text-black transition-all duration-300"
              >
                Schedule a Call
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