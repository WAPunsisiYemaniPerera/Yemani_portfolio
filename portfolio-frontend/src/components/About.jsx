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
    
    const [activeTab, setActiveTab] = useState(journeyData[0].id);
    const activeTabData = journeyData.find(tab => tab.id === activeTab);

    
    const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };
    const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } };

    return (
        <motion.section
            id="about"
            className="py-24 page-background text-white"
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-6">
                
                <motion.div 
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true}}
                    className="max-w-4xl mx-auto bg-slate-800/70 backdrop-blur-sm rounded-xl shadow-lg ring-1 ring-white/10 mb-24"
                >
                    <div className="p-4 border-b border-slate-600 flex space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="p-6 text-left min-h-[220px]">
                        <p className="text-slate-300 font-mono text-lg whitespace-pre-wrap leading-relaxed">
                            <span>{introText}</span>
                            <Cursor cursorStyle='_' />
                        </p>
                    </div>
                </motion.div>

                <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{once:true}} className="text-center max-w-5xl mx-auto mb-24">
                    <h2 className="text-3xl font-bold mb-4">My Philosophy</h2>
                    <p className="text-[#8892b0] mb-12">Technology should feel like a helpful friend, not a barrier. For me, that means:</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Large Card spanning 2 columns */}
                        <motion.div variants={itemVariants} className="md:col-span-2 bento-card rounded-xl">
                            <div className="bento-content flex flex-col items-center justify-center h-full">
                                {philosophyData[0].icon}
                                <h3 className="text-xl font-bold text-[#64ffda] mt-4 mb-2">{philosophyData[0].title}</h3>
                                <p className="text-[#8892b0]">{philosophyData[0].text}</p>
                            </div>
                        </motion.div>
                        {/* Small Card */}
                        <motion.div variants={itemVariants} className="bento-card rounded-xl">
                             <div className="bento-content flex flex-col items-center justify-center h-full">
                                {philosophyData[1].icon}
                                <h3 className="text-xl font-bold text-[#64ffda] mt-4 mb-2">{philosophyData[1].title}</h3>
                                <p className="text-[#8892b0]">{philosophyData[1].text}</p>
                            </div>
                        </motion.div>
                        {/* Small Card */}
                         <motion.div variants={itemVariants} className="bento-card rounded-xl">
                            <div className="bento-content flex flex-col items-center justify-center h-full">
                                {philosophyData[2].icon}
                                <h3 className="text-xl font-bold text-[#64ffda] mt-4 mb-2">{philosophyData[2].title}</h3>
                                <p className="text-[#8892b0]">{philosophyData[2].text}</p>
                            </div>
                        </motion.div>
                        {/* Large Card spanning 2 columns */}
                        <motion.div variants={itemVariants} className="md:col-span-2 bento-card rounded-xl">
                             <div className="bento-content flex flex-col items-center justify-center h-full">
                                {philosophyData[3].icon}
                                <h3 className="text-xl font-bold text-[#64ffda] mt-4 mb-2">{philosophyData[3].title}</h3>
                                <p className="text-[#8892b0]">{philosophyData[3].text}</p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                
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