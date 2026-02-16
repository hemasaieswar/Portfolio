import React from 'react';
import Section from './Section';
import { Brain, Shield, Cloud, Database } from 'lucide-react';

const About = () => {
    const interests = [
        { icon: <Brain className="text-blue-400" />, title: "Generative AI & LLMs", desc: "Building RAG pipelines and fine-tuning large language models." },
        { icon: <Shield className="text-purple-400" />, title: "AI Security", desc: "Developing cybersecurity-aware AI systems and robust defenses." },
        { icon: <Cloud className="text-sky-400" />, title: "Cloud ML", desc: "Deploying scalable ML models on AWS with MLOps best practices." },
        { icon: <Database className="text-indigo-400" />, title: "Data Engineering", desc: "Efficient pipeline construction for large-scale data processing." },
    ];

    return (
        <Section id="about" className="bg-slate-950">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">About Me</h2>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
                        <p>
                            I am an AI/ML Engineer with over 7 years of experience in designing and deploying intelligent systems.
                            My expertise spans across the entire machine learning lifecycle, from data preprocessing and model training
                            to deployment and monitoring in production environments.
                        </p>
                        <p>
                            I specialize in Python development and have a deep passion for unlocking the potential of Generative AI.
                            My work often sits at the intersection of innovation and security, ensuring that AI systems are not only
                            powerful but also safe and reliable.
                        </p>
                        <p>
                            When I'm not coding, I'm analyzing the latest research papers or contributing to open-source communities.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {interests.map((item, index) => (
                            <div key={index} className="p-6 bg-slate-900/50 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors">
                                <div className="mb-4">{item.icon}</div>
                                <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                                <p className="text-slate-400 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default About;
