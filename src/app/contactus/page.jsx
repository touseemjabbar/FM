'use client';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock, Globe, MessageCircle, Headphones, Calendar } from 'lucide-react';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    contactMethod: 'email',
    urgency: 'normal'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you within 24 hours.');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: '',
      contactMethod: 'email',
      urgency: 'normal'
    });
  };



  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our team',
      info: '+92 307 4585 990',
      action: 'Call Now',
      color: 'bg-[#00BFFF]'
    },
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us a detailed message',
      info: 'service@serviceprovider.pk',
      action: 'Send Email',
      color: 'bg-[#00BFFF]'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with us in real-time',
      info: 'Available 12 Hours',
      action: 'Start Chat',
      color: 'bg-[#00BFFF]'
    },
    {
      icon: Calendar,
      title: 'Book Meeting',
      description: 'Schedule a consultation',
      info: 'Free 30-min call',
      action: 'Schedule Now',
      color: 'bg-[#00BFFF]'
    }
  ];

  const faqs = [
    {
      question: 'What is your response time?',
      answer: 'We typically respond to all inquiries within 24 hours during business days.'
    },
    {
      question: 'Do you offer free consultations?',
      answer: 'Yes! We offer a free 30-minute consultation to discuss your project needs.'
    },
    {
      question: 'What information should I include in my inquiry?',
      answer: 'Please provide details about your project, timeline, budget, and any specific requirements.'
    },
    {
      question: 'Do you work with international clients?',
      answer: 'Absolutely! We have clients in  worldwide.'
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
              Get in <span className="text-transparent bg-clip-text bg-[#F65301]">Touch</span>
            </h1>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
              Have a question or ready to start your project? We'd love to hear from you. 
              Choose your preferred way to connect with our team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="relative py-12">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#0d0d0d] to-[#1a1a1a] border border-gray-800 rounded-2xl p-6 hover:border-[#00BFFF] transition-all duration-300 text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{method.description}</p>
                <p className="text-[#00BFFF] font-semibold mb-4">{method.info}</p>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-[#00BFFF] bg-opacity-10 border cursor-pointer border-[#00BFFF] border-opacity-30 rounded-full text-sm font-semibold hover:bg-[#00BFFF] hover:text-black transition-all duration-300"
                >
                  {method.action}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="relative py-12">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-5 gap-12">
            
            {/* Contact Form - Takes 3 columns */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="bg-gradient-to-br from-[#0d0d0d] to-[#1a1a1a] border border-gray-800 rounded-3xl p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-2">Send us a Message</h2>
                <p className="text-gray-400 mb-8">Fill out the form below and we'll get back to you as soon as possible.</p>
                
                <div className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name *</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="John"
                        className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00BFFF] transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name *</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Doe"
                        className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00BFFF] transition-colors"
                        required
                      />
                    </div>
                  </div>

                  {/* Contact Fields */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00BFFF] transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (234) 567-890"
                        className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00BFFF] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Company & Subject */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Company Name</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                        className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00BFFF] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Subject *</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-800 rounded-lg text-white focus:outline-none focus:border-[#00BFFF] transition-colors"
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="project">New Project</option>
                        <option value="support">Technical Support</option>
                        <option value="partnership">Partnership</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Preferences */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Preferred Contact Method</label>
                      <select
                        name="contactMethod"
                        value={formData.contactMethod}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-800 rounded-lg text-white focus:outline-none focus:border-[#00BFFF] transition-colors"
                      >
                        <option value="email">Email</option>
                        <option value="phone">Phone</option>
                        <option value="both">Both</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Urgency</label>
                      <select
                        name="urgency"
                        value={formData.urgency}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-800 rounded-lg text-white focus:outline-none focus:border-[#00BFFF] transition-colors"
                      >
                        <option value="low">Low - Within a week</option>
                        <option value="normal">Normal - Within 2-3 days</option>
                        <option value="high">High - Within 24 hours</option>
                        <option value="urgent">Urgent - ASAP</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Your Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project or inquiry..."
                      rows="6"
                      className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00BFFF] transition-colors resize-none"
                      required
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    onClick={handleSubmit}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-8 py-4 bg-gradient-to-r from-[#00BFFF] to-[#0080FF] cursor-pointer text-white font-semibold rounded-full hover:shadow-[0_0_30px_rgba(0,191,255,0.5)] transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Contact Info Sidebar - Takes 2 columns */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Quick Contact Info */}
              <div className="bg-gradient-to-br from-[#0d0d0d] to-[#1a1a1a] border border-gray-800 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#00BFFF] bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-[black]" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Email</p>
                      <a href="mailto:service@serviceprovider.pk" className="text-gray-400 hover:text-[#00BFFF] transition-colors">
                      service@serviceprovider.pk
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#00BFFF] bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-[black]" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Phone</p>
                      <a href="tel:+92 307 4585 990" className="text-gray-400 hover:text-[#00BFFF] transition-colors">
                       +92 307 4585 990
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#00BFFF] bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-[black]" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Business Hours</p>
                      <p className="text-gray-400">Mon-Sat: 8:00 AM - 6:00 PM</p>
                      <p className="text-gray-400">Sun: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQs */}
              <div className="bg-gradient-to-br from-[#0d0d0d] to-[#1a1a1a] border border-gray-800 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Quick Answers</h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="pb-4 border-b border-gray-800 last:border-0">
                      <h4 className="font-semibold mb-2 text-[#00BFFF]">{faq.question}</h4>
                      <p className="text-gray-400 text-sm">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    
    </div>
    <Footer/>
    </>
  );
}