import React from 'react';
// We need to add FaDownload for the new button
import { FaGithub, FaLinkedin, FaTwitter, FaReact, FaNodeJs, FaPython, FaJava, FaDocker, FaAngular, FaInstagram, FaDownload } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { SiJavascript, SiMongodb, SiTailwindcss, SiCplusplus, SiFirebase } from 'react-icons/si';
import { useTypewriter, Cursor } from 'react-simple-typewriter'; 
import ParticleBackground from './ParticleBackground';
import { motion } from 'framer-motion';

// Memoized background components
const icons = [
    { component: FaReact, color: '#61DAFB' }, { component: FaNodeJs, color: '#339933' },
    { component: SiJavascript, color: '#F7DF1E' }, { component: FaPython, color: '#3776AB' },
    { component: FaJava, color: '#f89820' }, { component: SiMongodb, color: '#47A248' },
    { component: FaDocker, color: '#2496ED' }, { component: SiTailwindcss, color: '#06B6D4' },
    { component: FaAngular, color: '#DD0031' }, { component: SiCplusplus, color: '#00599C' },
    { component: SiFirebase, color: '#FFCA28' },
];

const MemoizedFloatingIcons = React.memo(() => {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
            {icons.map((Icon, index) => {
                const duration = Math.random() * 15 + 15;
                const size = Math.random() * 25 + 30;
                const top = `${Math.random() * 90}%`;
                const left = `${Math.random() * 90}%`;
                return (
                    <motion.div
                        key={index}
                        className="absolute"
                        style={{ top, left, color: Icon.color }}
                        animate={{ y: [0, -10, 5, 10, 0, -5], x: [0, 5, -10, 0, 10, 0] }}
                        transition={{ duration, ease: 'linear', repeat: Infinity, repeatType: 'mirror' }}
                    >
                        <Icon.component size={size} />
                    </motion.div>
                );
            })}
        </div>
    );
});

const MemoizedParticleBackground = React.memo(ParticleBackground);


const Hero = () => {
    const [text] = useTypewriter({
        words: ['AI/ML Enthusiast', 'Aspiring Full Stack Developer', 'Passionate Coder'],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 80,
    });

    return (
        <div className="relative pt-10 pb-16 md:pt-20 md:pb-15 flex items-center justify-center text-center overflow-hidden">
            <MemoizedParticleBackground />
            <MemoizedFloatingIcons />
            
            <div className="relative z-10 flex flex-col items-center px-4">
                <img src="/profile.jpg" alt="Yemani Perera" className="w-48 h-48 rounded-full object-cover border-4 border-[#64ffda] mb-6"/>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-2">Yemani Perera</h1>
                <h2 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-[#64ffda] to-blue-500 bg-clip-text text-transparent mb-2 min-h-[56px]">
                    <span>{text}</span>
                    <Cursor cursorStyle='|' />
                </h2>
                <p className="max-w-2xl text-lg text-[#ccd6f6] mb-6 leading-relaxed">
                    I design web applications that don’t just look good — they <span className="text-[#64ffda] font-semibold">think smart</span>. 
                    Passionate about web development and machine learning, I love turning ideas into <span className="text-[#64ffda] font-semibold">dynamic, intelligent, and user-friendly</span> digital experiences 
                    (fueled by coffee, of course ☕)
                </p>
                <div className="flex space-x-6 mb-8">
                    <a href="https://github.com/WAPunsisiYemaniPerera" target="_blank" rel="noopener noreferrer" className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors"><FaGithub size={30} /></a>
                    <a href="https://www.linkedin.com/in/yemani-perera-09b4b8211" target="_blank" rel="noopener noreferrer" className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors"><FaLinkedin size={30} /></a>
                    <a href="https://www.instagram.com/yemaa_perera?igsh=MTViMDI3MXQ2Z3Q1Mg==" target="_blank" rel="noopener noreferrer" className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors"><FaInstagram size={30} /></a>
                    <a href="mailto:punsisiyemani18@gmail.com" className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors"><FiMail size={30} /></a>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                        href="portfolio-frontend\src\components\Projects.jsx" 
                        className="bg-transparent border-2 border-[#64ffda] text-[#64ffda] font-bold py-3 px-8 rounded hover:bg-[#64ffda] hover:text-[#0a1f2f] transition-all flex items-center justify-center gap-2"
                    >
                        View My Projects
                    </a>
                    <a 
                        href="projects/Yemani_Perera.pdf" 
                        download="Yemani_Perera.pdf" // This tells the browser to download the file
                        className="bg-transparent border-2 border-[#64ffda] text-[#64ffda] font-bold py-3 px-8 rounded hover:bg-[#64ffda] hover:text-[#0a1f2f] transition-all flex items-center justify-center gap-2"
                    >
                        <FaDownload />
                        <span>Grab my CV</span>
                    </a>
                </div>


            </div>
        </div>
    )
}

export default Hero;