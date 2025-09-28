import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Education = () => {
    // This state will control showing/hiding the coursework list
    const [showCourses, setShowCourses] = useState(false);

    const timelineVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
    };

    const itemVariants = {
        hidden: { x: -50, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
    };

    const coursework = "Programming Fundamentals, Data Structures and Algorithms, Object-Oriented Programming, Software Design and Implementation, Web Development Information Architecture, Databases Data Management, Operating Systems, Computer Networks, Network Security, Cloud Computing, Mobile Application Development, Software Project Management";

    return (
        <motion.section
            id="education"
            className="pt-12 pb-24 page-background text-white"
            initial="hidden"
            animate="visible"
            variants={timelineVariants}
        >
            <div className="container mx-auto px-6 pb-50">
                <motion.div variants={itemVariants} className="text-center mb-8">
                    <h2 className="text-4xl font-bold">My Education</h2>
                    <p className="text-[#8892b0] mt-2">My academic journey and qualifications.</p>
                </motion.div>

                {/* Timeline Container */}
                <div className="relative max-w-3xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-9 top-0 h-full w-0.5 bg-slate-700"></div>

                    {/* Timeline Item 1: Horizon Campus */}
                    <motion.div variants={itemVariants} className="mb-12 flex items-start">
                        <div className="z-10 flex items-center justify-center w-18 h-18 bg-[#0a192f]">
                            <div className="w-8 h-8 rounded-full bg-[#64ffda] text-[#0a192f] flex items-center justify-center">
                                <FaGraduationCap size={20} />
                            </div>
                        </div>
                        <div className="bg-[#112240] rounded-lg shadow-lg p-6 ml-8 w-full">
                            <p className="text-slate-400 text-sm">2022 – Present</p>
                            <h3 className="text-2xl font-bold text-white mt-1">BSc in Information Technology</h3>
                            <p className="text-[#64ffda] mb-4">Horizon Campus, Malabe</p>
                            <p className="text-[#ccd6f6] mb-4">Specializing in AI & Data Science.</p>
                            
                            <button 
                                onClick={() => setShowCourses(!showCourses)} 
                                className="flex items-center text-[#64ffda] hover:text-white transition-colors"
                            >
                                {showCourses ? 'Hide Coursework' : 'View Relevant Coursework'}
                                {showCourses ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
                            </button>
                            {showCourses && (
                                <ul className="mt-4 list-disc list-inside text-[#8892b0] text-sm">
                                    {coursework.split(', ').map(course => <li key={course}>{course}</li>)}
                                </ul>
                            )}
                        </div>
                    </motion.div>

                    {/* Timeline Item 2: Gothami Balika Vidyalaya */}
                    <motion.div variants={itemVariants} className="mb-8 flex items-start">
                        <div className="z-10 flex items-center justify-center w-18 h-18 bg-[#0a192f]">
                            <div className="w-8 h-8 rounded-full bg-[#64ffda] text-[#0a192f] flex items-center justify-center">
                                <FaGraduationCap size={20} />
                            </div>
                        </div>
                        <div className="bg-[#112240] rounded-lg shadow-lg p-6 ml-8 w-full">
                            <p className="text-slate-400 text-sm">2017 – 2020</p>
                            <h3 className="text-2xl font-bold text-white mt-1">GCE Advanced Level</h3>
                            <p className="text-[#64ffda] mb-4">Gothami Balika Vidyalaya, Colombo 10</p>
                            <p className="text-[#ccd6f6]">Stream: Biological Science</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default Education;