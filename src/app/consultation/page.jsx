'use client';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    surname: '',
    jobTitle: '',
    companyName: '',
    workEmail: '',
    phoneNumber: '',
    needs: [],
    message: '',
    newsletter: false,
    privacy: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleNeedsToggle = (need) => {
    setFormData(prev => ({
      ...prev,
      needs: prev.needs.includes(need)
        ? prev.needs.filter(n => n !== need)
        : [...prev.needs, need]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    // Reset form
    setFormData({
      firstName: '',
      surname: '',
      jobTitle: '',
      companyName: '',
      workEmail: '',
      phoneNumber: '',
      needs: [],
      message: '',
      newsletter: false,
      privacy: false
    });
  };

  const needsOptions = [
    'Custom Software Solutions',
    'Cyber Security Services',
    'Digital Transformation',
    'AI Driven Innovation',
    'System Integration',
    'On-Demand Development Team',
    'Other'
  ];

  const offices = [
    {
      location: 'Singapore',
      phone: '+65-3158-1185',
      address: '10 Anson Road, #03-05 International Plaza, Singapore 079903',
      mapLink: '#'
    },
    {
      location: 'Australia',
      phone: '1800-755-025',
      address: 'Sydney, NSW, Australia',
      mapLink: '#'
    },
    {
      location: 'New Zealand',
      phone: '0800-755-025',
      address: 'Auckland, New Zealand',
      mapLink: '#'
    },
    {
      location: 'United Kingdom',
      phone: '+44-20-1234-5678',
      address: 'London, United Kingdom',
      mapLink: '#'
    },
    {
      location: 'United States',
      phone: '+1-234-567-890',
      address: 'New York, NY, USA',
      mapLink: '#'
    },
    {
      location: 'Pakistan',
      phone: '+92-300-1234567',
      address: 'Lahore, Punjab, Pakistan',
      mapLink: '#'
    }
  ];

  return (
      <>
      <Navbar/>
    <section className="relative bg-[#0A0A0A] text-white py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(0, 191, 255, 0.02) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0, 191, 255, 0.02) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-40 left-20 w-96 h-96 bg-[#00BFFF] rounded-full blur-3xl"
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
            Free <span className="text-transparent bg-clip-text bg-[#F65301]">Consultation</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Need support or have a business enquiry? Contact us through the form below. 
            We're happy to assist you.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="bg-gradient-to-br from-[#0d0d0d] to-[#1a1a1a] rounded-3xl border border-gray-800 p-8 md:p-12">
            <div className="space-y-6">
              {/* Row 1: First Name, Surname, Job Title */}
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Please enter your full name"
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00BFFF] transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Surname *</label>
                  <input
                    type="text"
                    name="surname"
                    value={formData.surname}
                    onChange={handleChange}
                    placeholder="Please enter your surname"
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00BFFF] transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Job Title *</label>
                  <input
                    type="text"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    placeholder="Enter your job title"
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00BFFF] transition-colors"
                    required
                  />
                </div>
              </div>

              {/* Row 2: Company Name, Work Email, Phone */}
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Company Name *</label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Enter your company name"
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00BFFF] transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Work Email *</label>
                  <input
                    type="email"
                    name="workEmail"
                    value={formData.workEmail}
                    onChange={handleChange}
                    placeholder="Provide your work email"
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00BFFF] transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00BFFF] transition-colors"
                    required
                  />
                </div>
              </div>

              {/* Needs Section */}
              <div>
                <label className="block text-sm font-medium mb-3">Needs *</label>
                <div className="flex flex-wrap gap-3">
                  {needsOptions.map((need) => (
                    <button
                      key={need}
                      type="button"
                      onClick={() => handleNeedsToggle(need)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        formData.needs.includes(need)
                          ? 'bg-[#00BFFF] text-black'
                          : 'bg-[#0a0a0a] border border-gray-800 text-gray-300 hover:border-[#00BFFF]'
                      }`}
                    >
                      {need}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter a Message..."
                  rows="5"
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00BFFF] transition-colors resize-none"
                ></textarea>
              </div>

              {/* Checkboxes */}
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleChange}
                    className="w-5 h-5 rounded border-gray-800 bg-[#0a0a0a] text-[#00BFFF] focus:ring-[#00BFFF]"
                  />
                  <span className="text-sm text-gray-300">Subscribe to Our Newsletter</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="privacy"
                    checked={formData.privacy}
                    onChange={handleChange}
                    className="w-5 h-5 rounded border-gray-800 bg-[#0a0a0a] text-[#00BFFF] focus:ring-[#00BFFF]"
                    required
                  />
                  <span className="text-sm text-gray-300">I agree with Privacy Policy *</span>
                </label>
              </div>

              <p className="text-xs text-gray-500">** All fields are required</p>

              {/* Submit Button */}
              <motion.button
                onClick={handleSubmit}
                whileTap={{ scale: 0.98 }}
                className="w-full md:w-auto px-12 py-4 bg-gradient-to-r from-[#00BFFF] to-[#0080FF] text-white font-semibold rounded-full hover:shadow-[0_0_30px_rgba(0,191,255,0.5)] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Submit
              </motion.button>
            </div>
          </div>
        </motion.div>

   
      </div>
    </section>
 <Footer/>
 </>
  );
}
 