'use client';
import { motion } from 'framer-motion';
import { Target, Users, Lightbulb, Shield } from 'lucide-react';

export default function AboutUsSection() {
  const stats = [
    { number: '70+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '10+', label: 'Years Experience' },
    { number: '99%', label: 'Success Rate' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To deliver innovative software solutions that transform businesses and drive digital excellence.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We stay ahead of technology trends to provide cutting-edge solutions for modern challenges.'
    },
    {
      icon: Shield,
      title: 'Quality Assured',
      description: 'Every line of code is crafted with precision, tested thoroughly, and built to last.'
    },
    {
      icon: Users,
      title: 'Client Focused',
      description: 'Your success is our priority. We build long-term partnerships based on trust and results.'
    }
  ];

  return (
    <section className="relative bg-[#0A0A0A] text-white py-24 overflow-hidden">
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
            What We <span className="text-transparent bg-clip-text bg-[#F04E01]">Do</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            We are a team of passionate developers, designers, and innovators dedicated to building 
            exceptional digital experiences that drive business growth and user satisfaction.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#0d0d0d] border border-gray-800 rounded-2xl p-6 text-center"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                className="text-4xl md:text-5xl font-bold text-[#00BFFF] mb-2"
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          
          {/* Left - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#0d0d0d] to-[#1a1a1a] rounded-3xl border border-gray-800 p-8"
          >
            <h3 className="text-3xl font-bold mb-6">
              About <span className="text-[#F04E01]">Our Company</span>
            </h3>
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                We are a leading software development company dedicated to transforming businesses 
                through innovative digital solutions. With over 5 years of experience in the industry, 
                we've successfully delivered 150+ projects to satisfied clients worldwide.
              </p>
              
              <p>
                Our team of expert developers, designers, and strategists work collaboratively to 
                bring your vision to life. We specialize in web development, mobile applications, 
                and custom software solutions tailored to your unique business needs.
              </p>
              
              <p>
                What sets us apart is our commitment to quality, attention to detail, and 
                dedication to staying at the forefront of technology. We don't just build software; 
                we build lasting partnerships with our clients.
              </p>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-6">
              Transforming Ideas Into <span className="text-[#F04E01]">Digital Reality</span>
            </h3>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              We specialize in creating custom software solutions that solve real business problems. 
              From web applications to mobile apps, our team brings years of expertise and a 
              passion for innovation to every project.
            </p>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              Our approach combines cutting-edge technology with user-centered design principles, 
              ensuring that every solution we deliver is not only powerful but also intuitive and 
              enjoyable to use.
            </p>
            <ul className="space-y-3">
              {['Custom Software Development', 'Agile Project Management', 'Continuous Support & Maintenance'].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 text-gray-300"
                >
                  <div className="w-2 h-2 bg-[#00BFFF] rounded-full"></div>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Core <span className="text-[#F04E01]">Values</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#0d0d0d] border border-gray-800 rounded-2xl p-6"
              >
                <div className="w-14 h-14 bg-[#00BFFF] bg-opacity-10 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7 text-[black]" />
                </div>
                <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
