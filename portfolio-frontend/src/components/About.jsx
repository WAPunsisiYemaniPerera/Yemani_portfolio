import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTypewriter, Cursor } from 'react-simple-typewriter'; 
import { FaUserFriends, FaBrain, FaTools, FaInfinity } from 'react-icons/fa';

const journeyData = [
    { year: "2021", title: "First Steps", description: "Started my coding journey with HTML, CSS, and JavaScript, building small projects and discovering a love for solving problems through code." },
    { year: "2022 – Present", title: "University Education", description: "Enrolled in the BSc (Hons) in Information Technology at Horizon Campus. Here, I’m learning all aspects of IT — from web development and databases to networking and software engineering — while diving deeper into machine learning and AI, which have become my true passion." },
    { year: "Now", title: "Combining Passions", description: "Exploring how to combine web development and machine learning to build applications that are both intelligent and user-friendly." }
];

const philosophyData = [
    {
        icon: <FaUserFriends size={40} />,
        title: "User-First Design",
        text: "Crafting intuitive experiences that anyone can navigate."
    },
    {
        icon: <FaBrain size={40} />,
        title: "Data-Driven Decisions",
        text: "Turning data into decisions through machine learning."
    },
    {
        icon: <FaTools size={40} />,
        title: "Simplicity in Tools",
        text: "Building tools that simplify life instead of complicating it."
    },
    {
        icon: <FaInfinity size={40} />,
        title: "Constant Curiosity",
        text: "Staying curious and never stopping at “good enough”."
    }
];

const About = () => {
    const [introText] = useTypewriter({
        words: [ "I’m an aspiring Machine Learning Engineer & Full-Stack Developer with a love for building web applications that are both intelligent and user-friendly. Currently pursuing a BSc (Hons) in Information Technology (AI & Data Science) at Horizon Campus, I’ve gained hands-on experience with databases, APIs, and end-to-end applications — but my real passion is blending web development and machine learning to create smart, real-world solutions." ], 
        loop: 1, typeSpeed: 30,
    });
    
    // Removed activeTab state as the old tabbed journey is replaced.

    const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };
    const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } };

    // ===== The JavaScript Trick to Split the Text (from previous request) =====
    // The text that has already been typed
    const typedText = introText.slice(0, -1);
    // The single character currently being typed
    const typingChar = introText.slice(-1);
    // ===================================================

    return (
        <motion.section
            id="about"
            className="pt-16 pb-24 page-background text-white"
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-6">
                
                {/* Typewriter and Photo Section */}
                <motion.div 
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true}}
                    className="max-w-5xl mx-auto bg-slate-800/70 backdrop-blur-sm rounded-xl shadow-lg ring-1 ring-white/10 mb-24 p-6" // Increased padding
                >
                    <div className="p-4 border-b border-slate-600 flex space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    {/* New two-column layout for text and photo */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center p-6"> {/* Added p-6 here */}
                        {/* Left Column: Typewriter Text */}
                        <div className="md:col-span-2 text-left min-h-[220px]">
                            <p className="font-mono text-lg whitespace-pre-wrap leading-relaxed">
                                <span className="text-slate-300">{typedText}</span>
                                <span className="text-[#64ffda]">{typingChar}</span>
                                <Cursor cursorStyle='_' cursorColor='#64ffda' />
                            </p>
                        </div>
                        {/* Right Column: Your Photo */}
                        <div className="md:col-span-1 flex justify-center items-center">
                            <motion.img 
                                src="/profile3.png" // Path to your image in the public folder
                                alt="Yemani Perera"
                                className="w-50 h-50  object-cover border-4 border-[#64ffda] shadow-lg"
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            />
                        </div>
                    </div>
                </motion.div>

                {/* My Philosophy section (no changes here, using existing philosophyData) */}
                <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{once:true}} className="text-center max-w-5xl mx-auto mb-24">
                    <h2 className="text-3xl font-bold mb-4">My Philosophy</h2>
                    <p className="text-[#8892b0] mb-12">Technology should feel like a helpful friend, not a barrier. For me, that means:</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Dynamically render philosophy cards based on philosophyData */}
                        {philosophyData.map((item, index) => (
                            <motion.div 
                                key={index} 
                                variants={itemVariants} 
                                className={`md:col-span-${index === 0 || index === 3 ? '2' : '1'} bento-card rounded-xl`}
                            >
                                <div className="bento-content flex flex-col items-center justify-center h-full">
                                    {item.icon}
                                    <h3 className="text-xl font-bold text-[#64ffda] mt-4 mb-2">{item.title}</h3>
                                    <p className="text-[#8892b0]">{item.text}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* My Developer Journey section (unchanged from last update, now uses a simple vertical timeline) */}
                <motion.div initial={{y:20, opacity:0}} whileInView={{y:0, opacity:1}} viewport={{once:true}} className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-16">My Developer Journey</h2>
                    <div className="relative">
                        {/* The vertical line */}
                        <div className="absolute top-0 h-full w-0.5 bg-slate-700 left-1/2 -translate-x-1/2"></div>

                        {journeyData.map((item, index) => (
                            <motion.div 
                                key={index}
                                className={`flex items-center w-full mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                                    <div className="bg-white/5 backdrop-blur-md p-6 rounded-lg ring-1 ring-white/10 shadow-lg">
                                        <p className="text-[#64ffda] font-semibold mb-1">{item.year}</p>
                                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                        <p className="text-[#ccd6f6]">{item.description}</p>
                                    </div>
                                </div>
                                {/* The dot on the timeline */}
                                <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[#64ffda] border-4 border-[#112240]"></div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default About;