// components/CustomerSection.jsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const CustomerSection = () => {
  const categories = [
    { title: "GOVERNMENT", logo: "/path/to/city-of-casey-logo.png", alt: "City of Casey" },
    { title: "EDUCATION", logo: "/path/to/curtin-university-logo.png", alt: "Curtin University" },
    { title: "NOT FOR PROFIT", logo: "/path/to/royal-freemasons-logo.png", alt: "Royal Freemasons" },
    { title: "RETAIL", logo: "/path/to/helloworld-logo.png", alt: "helloworld" },
    { title: "LOGISTICS", logo: "/path/to/butlers-freight-services-logo.png", alt: "Butlers Freight Services" },
    { title: "CROSS INDUSTRY", logo: "/path/to/liberty-onesteel-logo.png", alt: "Liberty OneSteel" },
  ];

  return (
    <section className="bg-[#2898EF] py-16 px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-start lg:items-center">
          {/* Left Column */}
          <div className="flex-1">
            <motion.div
              className="text-center lg:text-left mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
                WHO WE DO IT FOR
              </h1>
              <p className="text-xl text-blue-200">OUR CUSTOMERS</p>
            </motion.div>

            {/* Categories Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((cat, i) => (
                <motion.div
                  key={cat.title}
                  className="text-center"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  variants={fadeInUp}
                >
                  <h3 className="text-lg font-semibold text-white mb-4 uppercase">
                    {cat.title}
                  </h3>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="bg-white p-4 rounded-lg shadow-md"
                  >
                    <Image
                      src={cat.logo}
                      alt={cat.alt}
                      width={150}
                      height={100}
                      className="mx-auto"
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <motion.div
            className="flex-1 lg:max-w-md text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="bg-blue-800/50 p-8 rounded-lg border border-blue-600">
              <p className="text-white text-lg leading-relaxed mb-6">
                The Xcelerate IT customer base counts for more than 100 organisations throughout Australia. These customers have been assisted by the Xcelerate IT&apos;s Professional Services Team in deploying the latest Business Process Automation solutions.
              </p>
              <motion.div
                className="flex items-center space-x-2"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="w-0 h-0 border-l-[20px] border-l-blue-500 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent"></div>
                <span className="text-blue-300 font-semibold">Learn how</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CustomerSection;
