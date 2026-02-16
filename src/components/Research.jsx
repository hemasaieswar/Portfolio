import React from 'react';
import Section from './Section';
import { BookOpen } from 'lucide-react';

const Research = () => {
    // Placeholder data based on "Research/Academic work" interest
    const researchItems = [
        {
            title: "Adversarial Attacks on LLMs",
            type: "Research Analysis",
            description: "Investigated vulnerabilities in large language models against prompt injection attacks. Proposed a defense mechanism using semantic filtering layers.",
            tags: ["AI Security", "LLMs", "Adversarial ML"]
        },
        {
            title: "Efficient RAG Architectures",
            type: "Implementation Study",
            description: "Analyzed retrieval-augmented generation patterns for latency and accuracy trade-offs in enterprise knowledge bases. optimized index structures for 20% faster retrieval.",
            tags: ["RAG", "Vector Databases", "Performance"]
        },
        {
            title: "Data Privacy in Distributed ML",
            type: "Academic Project",
            description: "Explored Federated Learning techniques to train models on decentralized data without compromising user privacy, achieving comparable accuracy to centralized training.",
            tags: ["Privacy", "Federated Learning", "Distributed Systems"]
        }
    ];

    return (
        <Section id="research" className="bg-slate-950">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Research & Academic Work</h2>

                <div className="grid md:grid-cols-1 gap-6 max-w-4xl mx-auto">
                    {researchItems.map((item, index) => (
                        <div key={index} className="flex flex-col md:flex-row gap-6 p-6 bg-slate-900/30 rounded-xl border border-slate-800 hover:bg-slate-900/50 transition-colors">
                            <div className="md:w-1/4">
                                <span className="inline-block px-3 py-1 rounded text-xs font-medium bg-purple-900/20 text-purple-300 border border-purple-900/30 mb-2">
                                    {item.type}
                                </span>
                                <div className="flex items-center gap-2 text-slate-400 mt-2">
                                    <BookOpen size={16} />
                                    <span className="text-sm">Publication / Study</span>
                                </div>
                            </div>
                            <div className="md:w-3/4">
                                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                                <p className="text-slate-400 mb-4">{item.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {item.tags.map((tag, idx) => (
                                        <span key={idx} className="text-xs text-slate-500 bg-slate-950 px-2 py-1 rounded border border-slate-800">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Research;
