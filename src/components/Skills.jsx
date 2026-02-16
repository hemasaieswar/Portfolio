import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
        {
            title: "Programming",
            skills: ["Python", "SQL", "NoSQL", "REST APIs", "FastAPI", "Pandas", "NumPy"]
        },
        {
            title: "AI / Machine Learning",
            skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Hugging Face", "LLMs", "RAG", "NLP", "Computer Vision"]
        },
        {
            title: "Cloud & MLOps",
            skills: ["AWS (SageMaker, Lambda)", "Docker", "Kubernetes", "CI/CD", "MLflow", "Git", "Linux"]
        },
        {
            title: "Tools & Frameworks",
            skills: ["LangChain", "Streamlit", "React", "Flask", "Jupyter", "VS Code", "PostgreSQL"]
        }
    ];

    return (
        <Section id="skills" className="bg-slate-950">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Technical Skills</h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.02 }}
                            className="bg-slate-900/50 p-6 rounded-xl border border-slate-800"
                        >
                            <h3 className="text-xl font-semibold mb-4 text-blue-400">{category.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-full border border-slate-700 hover:border-blue-500/50 hover:text-white transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Skills;
