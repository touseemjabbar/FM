'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Zap, Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative bg-[#0A0A0A] text-white overflow-hidden min-h-screen flex items-center">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(0, 191, 255, 0.03) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0, 191, 255, 0.03) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 right-20 w-96 h-96 bg-[#00BFFF] rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        className="absolute bottom-20 left-20 w-80 h-80 bg-[#00BFFF] rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            

            <h1 className="text-5xl md:text-5xl font-bold leading-tight mb-6 mt-16">
              Building
              <span className="block text-transparent bg-clip-text bg-[#F04E01]">
                Digital Brilliance
              </span>
              for Tomorrow
            </h1>

            <p className="text-gray-400 text-xl mb-8 leading-relaxed">
              We craft scalable software solutions that empower businesses to grow, innovate,
              and outpace the competition. Precision meets creativity here.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-10">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-[#00BFFF]">150+</div>
                <div className="text-sm text-gray-500">Projects</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-[#00BFFF]">120+</div>
                <div className="text-sm text-gray-500">Clients</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-[#00BFFF]">99%</div>
                <div className="text-sm text-gray-500">Quality</div>
              </motion.div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-[#00BFFF] to-[#0080FF] text-black font-semibold rounded-full hover:shadow-[0_0_30px_rgba(0,191,255,0.5)] transition-all duration-300 flex items-center gap-2"
              >
                Get Started <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-[#00BFFF] text-[#00BFFF] font-semibold rounded-full hover:bg-[#00BFFF] hover:text-black transition-all duration-300"
              >
                View Projects
              </motion.button>
            </div>
          </motion.div>

          {/* Right Side - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-[500px]">
              
              {/* Main Card */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-96 bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-3xl border border-gray-800 shadow-2xl p-8"
              >
                {/* Code Icon */}
                <div className="flex justify-center mb-6">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-20 h-20 bg-gradient-to-br from-[#00BFFF] to-[#0080FF] rounded-2xl flex items-center justify-center shadow-lg"
                  >
                    <Code className="w-10 h-10 text-white" />
                  </motion.div>
                </div>

                {/* Animated Lines */}
                <div className="space-y-4">
                  {[70, 90, 60, 80].map((width, i) => (
                    <motion.div
                      key={i}
                      initial={{ width: 0 }}
                      animate={{ width: `${width}%` }}
                      transition={{ delay: i * 0.2, duration: 1 }}
                      className="h-3 bg-gradient-to-r from-[#00BFFF] to-transparent rounded-full"
                    />
                  ))}
                </div>

                {/* Bottom Stats */}
                <div className="absolute bottom-8 left-8 right-8 flex justify-between">
                  <div className="text-center">
                    <motion.div
                      
                      className="text-2xl font-bold text-[#00BFFF]"
                    >
                      98%
                    </motion.div>
                    <div className="text-xs text-gray-500">Success</div>
                  </div>
                  <div className="text-center">
                    <motion.div
                      
                      className="text-2xl font-bold text-[#00BFFF]"
                    >
                     12H
                    </motion.div>
                    <div className="text-xs text-gray-500">Support</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute top-12 -left-8 w-40 h-32 bg-[#0d0d0d] border border-gray-800 rounded-2xl shadow-2xl p-4 flex flex-col justify-center"
              >
                <div className="text-[#00BFFF] text-xs font-semibold mb-2">SERVICE</div>
                <div className="text-white text-sm font-bold">Web Development</div>
                <div className="mt-2 h-1 w-12 bg-[#00BFFF] rounded-full"></div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute top-20 -right-12 w-44 h-32 bg-[#0d0d0d] border border-gray-800 rounded-2xl shadow-2xl p-4 flex flex-col justify-center"
              >
                <div className="text-[#00BFFF] text-xs font-semibold mb-2">SERVICE</div>
                <div className="text-white text-sm font-bold">Software Development</div>
                <div className="mt-2 h-1 w-12 bg-[#00BFFF] rounded-full"></div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 6, repeat: Infinity, delay: 0.5 }}
                className="absolute bottom-8  -left-12 w-36 h-32 bg-[#0d0d0d] border border-gray-800 rounded-2xl shadow-2xl p-4 flex flex-col justify-center"
              >
                <div className="text-[#00BFFF] text-xs font-semibold mb-2">SERVICE</div>
                <div className="text-white text-sm font-bold">Mobile Apps</div>
                <div className="mt-2 h-1 w-12 bg-[#00BFFF] rounded-full"></div>
              </motion.div>

              {/* Particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                  className="absolute w-2 h-2 bg-[#00BFFF] rounded-full"
                  style={{
                    left: `${20 + i * 15}%`,
                    bottom: '10%',
                  }}
                />
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent"></div>

    </section>
  );
}