import React from 'react';
import Section from './Section';
import { Briefcase } from 'lucide-react';

const Experience = () => {
    // Placeholder data based on "7+ years experience" from prompt
    const experiences = [
        {
            role: "Senior AI/ML Engineer",
            company: "Tech Innovation Labs", // Placeholder
            period: "2021 - Present",
            description: [
                "Leading a team of 5 engineers in developing generative AI solutions for enterprise clients.",
                "Architected a scalable ML infrastructure on AWS, reducing inference latency by 40%.",
                "Implemented secure-by-design principles for deploying LLMs in production environments."
            ]
        },
        {
            role: "Machine Learning Engineer",
            company: "Data Corp Solutions", // Placeholder
            period: "2018 - 2021",
            description: [
                "Developed computer vision models for automated quality control in manufacturing.",
                "Optimized deep learning training pipelines using distributed computing strategies.",
                "Collaborated with data scientists to productize research prototypes into viable APIs."
            ]
        },
        {
            role: "Python Developer / Data Analyst",
            company: "Software Systems Inc.", // Placeholder
            period: "2016 - 2018",
            description: [
                "Built automated data ingestion pipelines processing 2TB+ data daily.",
                "Developed backend services using Python/Django for internal analytics dashboards.",
                "Conducted exploratory data analysis to support business decision-making."
            ]
        }
    ];

    return (
        <Section id="experience" className="bg-slate-950">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Experience</h2>

                <div className="max-w-3xl mx-auto space-y-12">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative pl-8 md:pl-0">
                            {/* Timeline Line (Desktop only) */}
                            <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-slate-800 transform -translate-x-1/2"></div>

                            <div className={`md:flex items-start justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} group`}>

                                {/* Timeline Dot (Desktop only) */}
                                <div className="hidden md:flex absolute left-[50%] transform -translate-x-1/2 justify-center items-center w-8 h-8 rounded-full bg-slate-900 border border-slate-700 group-hover:border-blue-500 group-hover:scale-110 transition-all z-10">
                                    <Briefcase size={14} className="text-slate-400 group-hover:text-blue-400" />
                                </div>

                                {/* Content Card */}
                                <div className="md:w-[45%] mb-8 md:mb-0">
                                    <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors">
                                        <span className="text-sm font-mono text-blue-400 mb-2 block">{exp.period}</span>
                                        <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                                        <h4 className="text-slate-400 text-lg mb-4">{exp.company}</h4>
                                        <ul className="space-y-2">
                                            {exp.description.map((item, idx) => (
                                                <li key={idx} className="text-slate-400 text-sm flex items-start">
                                                    <span className="mr-2 text-blue-500">•</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Empty Spacer for alternating layout */}
                                <div className="md:w-[45%]"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Experience;
