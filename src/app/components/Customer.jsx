'use client';
import { motion } from 'framer-motion';
import { Star, Quote, Users, Award, TrendingUp, Heart } from 'lucide-react';
import Image from 'next/image';
export default function CustomerSection() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CEO, TechStart Inc.',
      image: '/client1.jpg',
      rating: 5,
      text: 'Working with this team was an absolute pleasure. They delivered our web application ahead of schedule and exceeded all expectations. Their attention to detail and professionalism is unmatched.',
      project: 'E-commerce Platform'
    },
    {
      name: 'Michael Chen',
      position: 'Founder, AppVenture',
      image: '/client2.jpg',
      rating: 5,
      text: 'The mobile app they developed for us has received outstanding feedback from our users. The team was responsive, creative, and truly understood our vision. Highly recommended!',
      project: 'Mobile Application'
    },
    {
      name: 'Emily Rodriguez',
      position: 'CTO, DataFlow Systems',
      image: '/client3.jpg',
      rating: 5,
      text: 'Exceptional quality and outstanding support! They transformed our outdated system into a modern, efficient platform. The ROI has been incredible. Will definitely work with them again.',
      project: 'Enterprise Software'
    },
    {
      name: 'David Thompson',
      position: 'Marketing Director, GrowthHub',
      image: '/client4.jpg',
      rating: 5,
      text: 'Their UI/UX design skills are top-notch. They created a beautiful, user-friendly interface that increased our conversion rate by 45%. Professional team with great communication.',
      project: 'Website Redesign'
    },
    {
      name: 'Lisa Anderson',
      position: 'Product Manager, CloudTech',
      image: '/client5.jpg',
      rating: 5,
      text: 'From initial consultation to final delivery, everything was seamless. They provided valuable insights and delivered a solution that perfectly fits our needs. Outstanding work!',
      project: 'Cloud Migration'
    },
    {
      name: 'James Wilson',
      position: 'Director, InnovateCo',
      image: '/client6.jpg',
      rating: 5,
      text: 'Best development team we have ever worked with! They are highly skilled, reliable, and committed to excellence. Our project was completed on time and within budget.',
      project: 'Custom CRM System'
    }
  ];

  const stats = [
    { icon: Users, number: '120+', label: 'Happy Clients' },
    { icon: Award, number: '150+', label: 'Projects Completed' },
    { icon: Star, number: '4.9/5', label: 'Average Rating' },
    { icon: Heart, number: '99%', label: 'Client Satisfaction' }
  ];

  const clients = [
    'TechStart', 'AppVenture', 'DataFlow', 'GrowthHub', 'CloudTech', 'InnovateCo', 
    'NextGen', 'FutureTech', 'SmartSolutions', 'DigitalEdge', 'CodeCraft', 'WebWorks'
  ];

  return (
    <section className="relative bg-[#0A0A0A] text-white py-24 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0,191,255,0.02) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(0,191,255,0.02) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Blue Glow Animation */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-40 right-20 w-96 h-96 bg-[#00BFFF] rounded-full blur-3xl"
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
            What Our <span className="text-transparent bg-clip-text bg-[#F04E01]">Clients Say</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about 
            working with us and the results we've delivered.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-[#0d0d0d] to-[#1a1a1a] border border-gray-800 rounded-2xl p-6 text-center"
            >
              <div className="w-12 h-12 bg-[#00BFFF] bg-opacity-10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-[black]" />
              </div>
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                className="text-3xl md:text-4xl font-bold text-[#00BFFF] mb-2"
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative bg-gradient-to-br from-[#0d0d0d] to-[#1a1a1a] rounded-2xl border border-gray-800 p-8"
            >
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-16 h-16 text-[#00BFFF]" />
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#00BFFF] text-[#00BFFF]" />
                ))}
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#00BFFF] to-[#0080FF] rounded-full flex items-center justify-center text-2xl">
                  {/* {testimonial.image} */}
                     <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover rounded-full"
                    
                    />
                </div>
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trusted Clients */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-8">
            Trusted By <span className="text-[#F04E01]">Leading Companies</span>
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-br from-[#0d0d0d] to-[#1a1a1a] border border-gray-800 rounded-xl p-6 flex items-center justify-center"
              >
                <span className="text-gray-400 font-semibold text-sm">{client}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-[#0d0d0d] via-[#1a1a1a] to-[#0d0d0d] border border-gray-800 rounded-3xl p-12">
            <TrendingUp className="w-12 h-12 text-[#00BFFF] mx-auto mb-4" />
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Join Our <span className="text-[#F04E01]">Success Stories</span>?
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's create something amazing together. Get in touch with our team and 
              start your journey to digital excellence today.
            </p>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-[#00BFFF] to-[#0080FF] text-black cursor-pointer font-semibold rounded-full"
            >
              Start Your Project Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
