import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const projectsData = [
    {
        featured: true,
        title: "BackPackerLK – Travel App - Group Project",
        images: [
            "projects/back2.png",
            "projects/backpacker.png",
            
        ],
        description: "An Android mobile app connecting tourists in Sri Lanka with local adventure and event providers, built with Java/Kotlin and Firebase for backend services.",
        tags: ["Android", "Java", "Kotlin", "Firebase"],
        github: "https://github.com/WAPunsisiYemaniPerera/BackPackerLK.git",
        live: "https://github.com/WAPunsisiYemaniPerera/BackPackerLK.git",
    },
    {
        featured: false, 
        title: "Exercise Duration Prediction App",
        images: [
            "projects/E1.png",
            "projects/E2.png",
            "projects/E3.png",
        ],
        description: "Developed an end-to-end predictive model using ensemble learning techniques, achieving R2 = 0.977. Designed and deployed an interactive UI on Streamlit Cloud for real-time predictions and visualizations.",
        tags: ["Scikit-learn", "Streamlit", "Pandas", "Python", "Machine Learning"],
        github: "https://github.com/WAPunsisiYemaniPerera/Exercise-Duration-Predictor-Streamlit-App.git",
        live: "https://duration-predictor-app-app-hrkzrqpdtdqlgbguux9t5w.streamlit.app/",
    },
    {
        featured: false,
        title: "AI-Powered Skin Disease Classification",
        images: [
            "projects/CNN.png",
        ],
        description: "Built a CNN model to classify 8 skin disease types, achieving approximately 94% validation accuracy.  Leveraged VGG16 and Transfer Learning techniques to overcome limited dataset challenges.",
        tags: ["Python", "TensorFlow", "Keras", "VGG16", "Numpy", "Matplotlib","Transfer Learning"],
        github: "https://github.com/WAPunsisiYemaniPerera/Skin-Disease-Detector.git",
        live: "https://github.com/WAPunsisiYemaniPerera/Skin-Disease-Detector.git",
    },
    {
        featured: false,
        title: "Dynamic Personal Portfolio",
        images: [
            "projects/port1.png",
            "projects/port2.png",
            "projects/port3.png",
            "projects/port4.png"
        ],
        description: "A fully responsive multi-page portfolio built from scratch with React and a Node.js backend. Features advanced animations (3D tilt, path drawing, floating elements) using Framer Motion and Lottie, with a functional Node/Express backend for the contact form.",
        tags: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Node.js", "Express.js", "Nodemailer"],
        github: "https://github.com/WAPunsisiYemaniPerera/Yemani_portfolio.git",
        live: "https://yemaniportfolio.netlify.app/",
    },
    {
        featured: false,
        title: "Restaurant Management System - Group Project",
        images: [
            "projects/restaurant1.png",
            "projects/restaurant2.png",
            "projects/restaurant3.png",
            
        ],
        description: "A group project developed with HTML, CSS, JavaScript, and PHP, featuring menu display, online orders, and customer interaction for a seamless experience.",
        tags: ["HTML", "CSS", "JavaScript", "PHP"],
        github: "https://github.com/WAPunsisiYemaniPerera/Restaurant.git",
        live: "https://youtu.be/DX78M_fqcwM",
    },
    {
        featured: false,
        title: "Portfolio Website",
        images: [
            "projects/portfolio1.png",
            "projects/portfolio2.png",
            "projects/portfolio3.png",
            
        ],
        description: "A modern and responsive personal portfolio website built to showcase my projects, skills, and experiences. Designed with a clean UI, smooth animations, and well-structured sections including Home, About, Skills, Projects, and Contact. The site provides an elegant user experience and highlights my journey in the field of IT.",
        tags: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/WAPunsisiYemaniPerera/Yemani-Portfolio.git",
        live: "https://wapunsisiyemaniperera.github.io/Yemani-Portfolio/",
    },
    {
        featured: false,
        title: "Veterinary Shop Management System",
        images: [
            "projects/java1.png",
            "projects/java2.png",
            "projects/java3.png",
            "projects/java4.png",
            "projects/java5.png",
            
        ],
        description: "A desktop application developed for managing day-to-day operations of a veterinary shop. The system allows users to perform full CRUD operations to manage pets, owners, items, and billing details. Built using the MVC architecture with Java Swing for the interface and MySQL as the backend database, ensuring clean structure, maintainability, and smooth functionality.",
        tags: ["Java (Swing)", "MySQL", "JDBC", "MVC Architecture", "CRUD Operations"],
        github: "https://github.com/WAPunsisiYemaniPerera/ITBIN-2211-0260",
        live: "https://youtu.be/WndQQXhXRzc?si=qYmKNUVt4Ivg6CGQ",
    },
];


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style, display: "block", right: "10px", zIndex: 1 }} onClick={onClick} />;
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style, display: "block", left: "10px", zIndex: 1 }} onClick={onClick} />;
}


const ProjectCard = ({ project, isFeatured, index }) => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <SampleNextArrow />, 
        prevArrow: <SamplePrevArrow />
    };

    if (isFeatured) {
        return (
            <motion.div
                className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center mb-16"
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
            >
                <div className={`md:col-span-7 text-left ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                    <p className="text-[#64ffda] text-sm mb-2">Featured Project</p>
                    <h3 className="text-3xl font-bold text-white mb-4 hover:text-[#64ffda] transition-colors"><a href={project.live || project.github} target="_blank" rel="noopener noreferrer">{project.title}</a></h3>
                    <div className="bg-[#112240] p-6 rounded-md shadow-lg mb-4"><p className="text-[#ccd6f6]">{project.description}</p></div>
                    <div className="flex flex-wrap gap-x-4 gap-y-2 mb-4">{project.tags.map(tag => (<span key={tag} className="text-slate-400 text-sm font-mono">{tag}</span>))}</div>
                    <div className="flex justify-start space-x-4">
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors"><FaGithub size={24} /></a>
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors"><FiExternalLink size={24} /></a>
                    </div>
                </div>
                <div className={`md:col-span-5 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                    <div className="rounded-lg overflow-hidden shadow-2xl slick-container">
                        <Slider {...sliderSettings}>{project.images.map((image, i) => (<div key={i}><img src={image} alt={`${project.title} screenshot ${i + 1}`} className="w-full h-80 object-cover" /></div>))}</Slider>
                    </div>
                </div>
            </motion.div>
        );
    }

    // Regular Project card
    return (
        <motion.div
            className="bg-[#112240] rounded-lg overflow-hidden shadow-lg flex flex-col group"
            variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
            whileHover={{ y: -8 }}
            transition={{ type: 'spring', stiffness: 300 }}
        >
            <div className="overflow-hidden h-48 slick-container">
                 <Slider {...sliderSettings}>
                    {project.images.map((image, i) => (<div key={i}><img src={image} alt={`${project.title} screenshot ${i + 1}`} className="w-full h-48 object-cover"/></div>))}
                </Slider>
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-sm text-[#ccd6f6] mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (<span key={tag} className="bg-[#0a192f] text-[#64ffda] text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>))}
                </div>
                <div className="mt-auto flex justify-end space-x-4">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors"><FaGithub size={24} /></a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors"><FiExternalLink size={24} /></a>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };
    const featuredProject = projectsData.find(p => p.featured);
    const otherProjects = projectsData.filter(p => !p.featured);
    return (
        <motion.section id="projects" className="pt-12 pb-24 page-background text-white" initial="hidden" animate="visible" variants={containerVariants}>
            <div className="container mx-auto px-6">
                <motion.div variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }} className="text-center mb-16">
                    <h2 className="text-4xl font-bold">My Projects</h2>
                    <p className="text-[#8892b0] mt-2">A selection of my work. Feel free to explore.</p>
                </motion.div>
                {featuredProject && <ProjectCard project={featuredProject} isFeatured={true} index={0} />}
                {otherProjects.length > 0 && (
                     <motion.div className="text-center my-16">
                        <h3 className="text-3xl font-bold">Other Noteworthy Projects</h3>
                    </motion.div>
                )}
                <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants}>
                    {otherProjects.map((project, index) => (
                        <ProjectCard project={project} key={index} isFeatured={false} index={index + 1} />
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Projects;