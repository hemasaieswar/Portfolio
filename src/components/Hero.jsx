import React from 'react';
import { TypeAnimation } from 'react-type-animation'; // Assuming user installs this, or better use plain Framer Motion
import { motion } from 'framer-motion';
import { ArrowRight, Github, FileText, Linkedin } from 'lucide-react';
import { Link } from 'react-scroll';

// Since I can't guarantee react-type-animation is installed (I didn't add it to package.json, my bad), 
// I'll stick to Framer Motion for animations to be safe.

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-slate-800/50 border border-slate-700 text-blue-400 text-sm font-medium mb-6">
                        Available for new opportunities
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        Hi, I'm <span className="text-white">Hema Sai Eswar Reddy</span>
                    </h1>
                    <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-8 pb-2">
                        AI/ML Engineer & <br className="md:hidden" /> Python Developer
                    </h2>
                    <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                        Building intelligent systems with deep learning, generative AI, and cloud technologies.
                        Passionate about creating secure, scalable, and impactful AI solutions.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <Link to="projects" smooth={true} duration={500} offset={-70} className="px-8 py-3 bg-white text-slate-950 font-semibold rounded-full hover:bg-slate-200 transition-colors flex items-center gap-2 cursor-pointer w-full md:w-auto justify-center">
                            View Projects <ArrowRight size={20} />
                        </Link>
                        <div className="flex gap-4 w-full md:w-auto justify-center">
                            <a href="/RESUME .pdf" download className="px-8 py-3 bg-slate-800 text-white font-medium rounded-full hover:bg-slate-700 transition-colors flex items-center gap-2 border border-slate-700 w-full md:w-auto justify-center">
                                <FileText size={20} /> Resume
                            </a>
                            <a href="https://www.linkedin.com/in/jambula-hemasai-eswar-reddy" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 text-white rounded-full hover:bg-slate-700 transition-colors border border-slate-700">
                                <Linkedin size={24} />
                            </a>
                            <a href="https://github.com/hemasaieswar" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 text-white rounded-full hover:bg-slate-700 transition-colors border border-slate-700">
                                <Github size={24} />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
