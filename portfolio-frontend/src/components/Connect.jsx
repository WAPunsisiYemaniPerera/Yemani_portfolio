import React from 'react';
import { motion } from 'framer-motion';
import { FiMail } from 'react-icons/fi';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

// Data for the orbiting icons
const contactData = [
    { icon: <FaGithub size={32} />, title: "GitHub", href: "#" },
    { icon: <FaLinkedin size={32} />, title: "LinkedIn", href: "#" },
    { icon: <FaInstagram size={32} />, title: "Instagram", href: "#" },
    { icon: <FiMail size={32} />, title: "Email", href: "mailto:yemaniperera@gmail.com" },
    { icon: <FaXTwitter size={32} />, title: "X (Twitter)", href: "#" },
];

const Connect = () => {
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2, duration: 0.5 } },
    };

    return (
        <motion.section
            id="connect"
            className="pt-10 pb-24 page-background text-white min-h-screen flex items-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="container mx-auto px-6">
                <motion.div variants={containerVariants} className="text-center mb-16">
                    <h2 className="text-4xl font-bold">Let's Connect</h2>
                    <p className="text-[#8892b0] mt-2">Have a project in mind or just want to say hello? I'd love to hear from you.</p>
                </motion.div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Left Column: The Orb */}
                    <motion.div variants={containerVariants} className="hidden lg:flex justify-center items-center">
                        <div className="relative w-96 h-96 group">
                            {/* The glowing orb effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#64ffda] to-blue-500 rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                            
                            {/* The container that rotates */}
                            <div className="relative w-full h-full orb-container group-hover:[animation-play-state:paused]">
                                {contactData.map((item, index) => {
                                    const angle = (index / contactData.length) * 2 * Math.PI;
                                    const x = 50 + 45 * Math.cos(angle);
                                    const y = 50 + 45 * Math.sin(angle);
                                    return (
                                        <a
                                            key={item.title}
                                            href={item.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="absolute orb-item"
                                            style={{
                                                top: `${y}%`,
                                                left: `${x}%`,
                                                transform: 'translate(-50%, -50%)',
                                            }}
                                        >
                                            <div className="w-20 h-20 bg-[#112240]/50 backdrop-blur-md rounded-full flex items-center justify-center text-slate-400 group-hover:text-[#64ffda] ring-1 ring-slate-700 hover:!scale-110 hover:!text-[#64ffda] transition-all duration-300">
                                                {item.icon}
                                            </div>
                                        </a>
                                    )
                                })}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Contact Form */}
                    <motion.form variants={containerVariants} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-semibold text-[#ccd6f6] mb-2">Name</label>
                            <input type="text" id="name" required placeholder="Your Name" className="w-full bg-[#112240] border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-[#64ffda] focus:border-transparent transition-all" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-[#ccd6f6] mb-2">Email</label>
                            <input type="email" id="email" required placeholder="Your Email" className="w-full bg-[#112240] border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-[#64ffda] focus:border-transparent transition-all" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-semibold text-[#ccd6f6] mb-2">Message</label>
                            <textarea id="message" required rows="5" placeholder="Your Message" className="w-full bg-[#112240] border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-[#64ffda] focus:border-transparent transition-all"></textarea>
                        </div>
                        <motion.button 
                            type="submit"
                            className="w-full bg-[#112240] border-2 border-slate-700 text-[#ccd6f6] font-bold py-3 px-6 rounded-lg hover:bg-[#64ffda] hover:text-[#0a1f2f] hover:border-[#64ffda] transition-all duration-300"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Submit
                        </motion.button>
                    </motion.form>
                </div>
            </div>
        </motion.section>
    );
};

export default Connect;