'use client';
import { motion } from 'framer-motion';
import { Target, Users, Lightbulb, Award, TrendingUp, Shield, Heart, Zap, Code, Globe, Clock, CheckCircle,Smartphone, Cloud } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutUsPage() {
  const stats = [
    { number: '10+', label: 'Years Experience' },
    { number: '150+', label: 'Projects Completed' },
    { number: '120+', label: 'Happy Clients' },
    { number: '50+', label: 'Team Members' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To deliver innovative software solutions that transform businesses and drive digital excellence across industries worldwide.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We stay ahead of technology trends to provide cutting-edge solutions for modern challenges and future opportunities.'
    },
    {
      icon: Shield,
      title: 'Quality Assured',
      description: 'Every line of code is crafted with precision, tested thoroughly, and built to last with industry-best practices.'
    },
    {
      icon: Users,
      title: 'Client Focused',
      description: 'Your success is our priority. We build long-term partnerships based on trust, transparency, and outstanding results.'
    },
    {
      icon: Heart,
      title: 'Passion Driven',
      description: 'We love what we do and it shows in our work. Our team is passionate about creating exceptional digital experiences.'
    },
    {
      icon: Zap,
      title: 'Agile & Fast',
      description: 'Quick iterations, rapid deployment, and continuous improvement ensure we deliver value at speed without compromising quality.'
    }
  ];

  const team = [
    {
      name: 'John Smith',
      role: 'CEO & Founder',
      image: '/client1.jpg',
      bio: '15+ years in software development'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      image: '/client2.jpg',
      bio: 'Expert in cloud architecture'
    },
    {
      name: 'Michael Chen',
      role: 'Lead Developer',
      image: '/client3.jpg',
      bio: 'Full-stack development specialist'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Design Director',
      image: '/client4.jpg',
      bio: 'UI/UX design & user research'
    },
    {
      name: 'David Thompson',
      role: 'Product Manager',
      image: '/client5.jpg',
      bio: 'Agile & product strategy expert'
    },
    {
      name: 'Lisa Anderson',
      role: 'Head of QA',
      image: '/client6.jpg',
      bio: 'Quality assurance & testing'
    }
  ];

  const timeline = [
    { year: '2020', event: 'Company Founded', description: 'Started with a vision to transform businesses through technology' },
    { year: '2021', event: 'First Major Client', description: 'Delivered our first enterprise-level project successfully' },
    { year: '2022', event: 'Team Expansion', description: 'Grew to 30+ team members across multiple countries' },
    { year: '2023', event: 'Product Launch', description: 'Launched our first SaaS product - Skip Office' },
    { year: '2024', event: '100+ Projects', description: 'Celebrated milestone of 100 successful project deliveries' },
    { year: '2025', event: 'Global Presence', description: 'Expanded to 6 offices worldwide serving 120+ clients' }
  ];

  const expertise = [
    { icon: Code, title: 'Web Development', count: '80+ Projects' },
    { icon: Smartphone, title: 'Mobile Apps', count: '45+ Projects' },
    { icon: Globe, title: 'Enterprise Software', count: '35+ Projects' },
    { icon: Cloud, title: 'Cloud Solutions', count: '50+ Projects' }
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
              Building the <span className="text-transparent bg-clip-text bg-[#F65301]">Future</span><br />
              of Digital Innovation
            </h1>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
              We are a team of passionate developers, designers, and innovators dedicated to 
              transforming businesses through cutting-edge technology and creative solutions.
            </p>
          </motion.div>

          {/* Stats */}
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
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  className="text-5xl font-bold text-[#00BFFF] mb-2"
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="relative py-4">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-16 items-center mb-24"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="text-[#F65301]">Story</span>
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed text-lg">
                <p>
                  Founded in 2020, we started with a simple yet powerful vision: to help businesses 
                  harness the power of technology to achieve their goals and transform their operations.
                </p>
                <p>
                  What began as a small team of passionate developers has grown into a global company 
                  with 50+ professionals serving clients across multiple continents. Our journey has 
                  been marked by continuous learning, innovation, and an unwavering commitment to excellence.
                </p>
                <p>
                  Today, we're proud to have delivered 150+ successful projects, ranging from simple 
                  websites to complex enterprise solutions. Each project has taught us valuable lessons 
                  and strengthened our expertise in the ever-evolving tech landscape.
                </p>
                <p>
                  But our story doesn't end here. We're constantly pushing boundaries, exploring new 
                  technologies, and finding better ways to serve our clients. The future is bright, 
                  and we're excited to write the next chapter together with our clients and partners.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#0d0d0d] to-[#1a1a1a] rounded-3xl border border-gray-800 p-8 h-full">
                <div className="space-y-6">
                  {expertise.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-4 p-4 bg-[#0a0a0a] rounded-xl hover:bg-[#0f0f0f] transition-colors"
                    >
                      <div className="w-12 h-12 bg-[#00BFFF] bg-opacity-10 rounded-xl flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-[black]" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-400">{item.count}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-4 bg-gradient-to-b from-transparent to-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Core <span className="text-[#F65301]">Values</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              The principles that guide everything we do and drive us to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#0d0d0d] to-[#1a1a1a] border border-gray-800 rounded-2xl p-8 hover:border-[#00BFFF] transition-all duration-300"
              >
                <div className="w-16 h-16 bg-[#00BFFF] bg-opacity-10 rounded-2xl flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-[black]" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

   

      {/* Team Section */}
      <section className="relative py-24 bg-gradient-to-b from-[#0d0d0d] to-transparent">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Our <span className="text-[#F65301]">Team</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              The talented individuals who make it all happen
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#0d0d0d] to-[#1a1a1a] border border-gray-800 rounded-2xl p-8 text-center hover:border-[#00BFFF] transition-all duration-300"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-[#00BFFF] to-[#0080FF] rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                  {/* {member.image} */}
                     <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full"
                    
                    />
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-[#00BFFF] font-semibold mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.bio}</p>
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Work <span className="text-[#F65301]">With Us</span>?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with innovative technology solutions
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-[#00BFFF] to-[#0080FF] text-black font-semibold rounded-full cursor-pointer hover:shadow-[0_0_30px_rgba(0,191,255,0.5)] transition-all duration-300"
              >
                Get Free Consultation
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-[#00BFFF] text-[#00BFFF] font-semibold rounded-full hover:bg-[#00BFFF] cursor-pointer hover:text-black transition-all duration-300"
              >
                View Our Work
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