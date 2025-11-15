import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
    {
        title: "BSc in Information Technology",
        institution: "Horizon Campus, Malabe",
        date: "2022 – Present",
        description: "Specializing in AI & Data Science.",
        image: "/education/horizon.png" 
    },
    {
        title: "GCE Advanced Level",
        institution: "Gothami Balika Vidyalaya, Colombo 10",
        date: "2017 – 2020",
        description: "Successfully completed GCE A/L in the Biological Science stream.",
        image: "/education/gothami.png" 
    },
    {
        title: "GCE Ordinary Level",
        institution: "Sri Rahula Balika Maha Vidyalaya, Malabe",
        date: "2006 – 2016",
        description: "Successfully completed GCE O/L.",
        image: "/education/rahula.png" 
    }
];

const Education = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 } 
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    return (
        <motion.section
            id="education"
            className="py-24 page-background text-white min-h-screen flex items-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="container mx-auto px-6">
                <motion.div variants={itemVariants} className="text-center mb-16">
                    <h2 className="text-4xl font-bold">My Education</h2>
                    <p className="text-[#8892b0] mt-2">My academic journey and qualifications.</p>
                </motion.div>

                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
                    variants={containerVariants}
                >
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={index}
                            className="bg-[#112240] rounded-lg shadow-lg p-6 text-center transition-all duration-300 hover:shadow-2xl hover:shadow-[#64ffda]/20"
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }} 
                        >
                            
                            <div className="w-full h-40 mb-4 flex items-center justify-center"> 
                                <img 
                                    src={edu.image} 
                                    alt={`${edu.institution} logo`} 
                                    className="h-40 w-auto object-contain" 
                                />
                            </div>
                            
                            <h3 className="text-xl font-bold text-white">{edu.title}</h3>
                            <p className="text-lg font-semibold text-[#64ffda] mt-1">{edu.institution}</p>
                            <p className="text-sm text-slate-400 mt-2 mb-3">{edu.date}</p>
                            <p className="text-sm text-[#8892b0]">{edu.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Education;