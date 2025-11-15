import React from 'react';
import { motion } from 'framer-motion';
import { 
    FaJava, FaPython, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGit, FaAngular, FaLinux, FaAws, FaPhp
} from 'react-icons/fa';
import { FaFlutter } from 'react-icons/fa6';
import { IoLogoAndroid, IoLogoDocker } from 'react-icons/io5';
import { 
    SiJavascript, SiMongodb, SiTailwindcss, SiFigma, SiCplusplus, SiExpress, SiPostman, 
    SiGooglecloud, SiFirebase, SiStreamlit, SiMysql, SiNumpy, SiPandas, SiScikitlearn, SiTensorflow
} from "react-icons/si";

const Skills = () => {
    const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.05 } } };
    const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } };

   
    const skills = [
        // Languages
        { name: 'Java', icon: <FaJava size={50} />, color: '#f89820' },
        { name: 'Python', icon: <FaPython size={50} />, color: '#3776AB' },
        { name: 'JavaScript', icon: <SiJavascript size={50} />, color: '#F7DF1E' },
        { name: 'C++', icon: <SiCplusplus size={50} />, color: '#00599C' },
        { name: 'PHP', icon: <FaPhp size={50} />, color: '#777BB4' },
        { name: 'HTML5', icon: <FaHtml5 size={50} />, color: '#E34F26' },
        { name: 'CSS3', icon: <FaCss3Alt size={50} />, color: '#1572B6' },
        
        // Frontend & Mobile
        { name: 'React', icon: <FaReact size={50} />, color: '#61DAFB' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss size={50} />, color: '#06B6D4' },
        { name: 'Android', icon: <IoLogoAndroid size={50} />, color: '#3DDC84' },

        // Backend & Database
        { name: 'Node.js', icon: <FaNodeJs size={50} />, color: '#339933' },
        { name: 'Express.js', icon: <SiExpress size={50} />, color: '#444444' },
        { name: 'MongoDB', icon: <SiMongodb size={50} />, color: '#47A248' },
        { name: 'MySQL', icon: <SiMysql size={50} />, color: '#4479A1' },
        
        // AI/ML & Data Science
        { name: 'TensorFlow', icon: <SiTensorflow size={50} />, color: '#FF6F00' },
        { name: 'Scikit-learn', icon: <SiScikitlearn size={50} />, color: '#F7931E' },
        { name: 'NumPy', icon: <SiNumpy size={50} />, color: '#4D77CF' },
        { name: 'Pandas', icon: <SiPandas size={50} />, color: '#150458' },
        { name: 'Streamlit', icon: <SiStreamlit size={50} />, color: '#FF4B4B' },

        // Tools & Platforms
        { name: 'Git', icon: <FaGit size={50} />, color: '#F05032' },
        { name: 'AWS', icon: <FaAws size={50} />, color: '#FF9900' },
        { name: 'Google Cloud', icon: <SiGooglecloud size={50} />, color: '#4285F4' },
        { name: 'Firebase', icon: <SiFirebase size={50} />, color: '#FFCA28' },
        { name: 'Linux', icon: <FaLinux size={50} />, color: '#FCC624' },
        { name: 'Figma', icon: <SiFigma size={50} />, color: '#F24E1E' },
        { name: 'Postman', icon: <SiPostman size={50} />, color: '#FF6C37' },
        
    ];

    return (
        <motion.section
            id="skills"
            className="pt-12 pb-24 page-background text-white"
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
            variants={containerVariants}
        >
            <div className="container mx-auto px-6">
                <motion.div variants={itemVariants} className="text-center">
                    <h2 className="text-4xl font-bold mb-4">My Tech Stack</h2>
                    <p className="text-[#8892b0] mb-12">The tools and technologies I love to work with.</p>
                </motion.div>
                <motion.div 
                    className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8"
                    variants={containerVariants}
                >
                    {skills.map((skill) => (
                        <motion.div
                            key={skill.name}
                            className="flex flex-col items-center justify-center space-y-2"
                            variants={itemVariants}
                            whileHover={{ scale: 1.1, y: -5 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <div style={{color: skill.color}}>
                                {skill.icon}
                            </div>
                            <p className="text-[#ccd6f6] text-sm">{skill.name}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Skills;