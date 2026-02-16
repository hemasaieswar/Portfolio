import React from 'react';
import Section from './Section';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "GenAI Content System",
            description: "Developed an automated content generation pipeline using GPT-4 and LangChain, reducing production time by 60%. Integrated with vector databases for context-aware generation.",
            tech: ["Python", "LangChain", "OpenAI", "Pinecone", "FastAPI"],
            github: "https://github.com/hemasaieswar" // Placeholder link
        },
        {
            title: "Cybersecurity Threat Detection",
            description: "Built a real-time anomaly detection system for network traffic using deep learning (Autoencoders). Improved threat identification accuracy by 15% over traditional methods.",
            tech: ["PyTorch", "Kafka", "AWS", "Docker"],
            github: "https://github.com/hemasaieswar"
        },
        {
            title: "Research Paper Summarizer",
            description: "A secure RAG-based application that ingests PDF research papers and processes queries to generate concise summaries and answer specific technical questions.",
            tech: ["Streamlit", "Hugging Face", "ChromaDB", "LLMs"],
            github: "https://github.com/hemasaieswar"
        }
    ];

    return (
        <Section id="projects" className="bg-slate-950">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Featured Projects</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="group bg-slate-900/50 rounded-xl border border-slate-800 overflow-hidden hover:border-blue-500/30 transition-all duration-300 flex flex-col h-full">
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{project.title}</h3>
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                                        <Github size={20} />
                                    </a>
                                </div>
                                <p className="text-slate-400 text-sm mb-6 flex-1 leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map((tech, idx) => (
                                        <span key={idx} className="text-xs font-medium px-2 py-1 bg-blue-900/20 text-blue-300 rounded border border-blue-900/30">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a href="https://github.com/hemasaieswar" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors border-b border-transparent hover:border-blue-400 pb-0.5">
                        View all projects on GitHub <ExternalLink size={16} />
                    </a>
                </div>
            </div>
        </Section>
    );
};

export default Projects;
