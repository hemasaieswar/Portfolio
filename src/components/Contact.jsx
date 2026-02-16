import React from 'react';
import Section from './Section';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
    return (
        <Section id="contact" className="bg-gradient-to-b from-slate-950 to-slate-900">
            <div className="container mx-auto px-6 max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Get in Touch</h2>

                <div className="grid md:grid-cols-2 gap-12">

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-2xl font-semibold text-white mb-6">Let's Connect</h3>
                        <p className="text-slate-400 mb-8 leading-relaxed">
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                        </p>

                        <div className="space-y-6">
                            <a href="mailto:jhemasaieswar02@gmail.com" className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group">
                                <div className="p-3 rounded-full bg-slate-800 group-hover:bg-blue-600 transition-colors">
                                    <Mail size={20} />
                                </div>
                                <span>jhemasaieswar02@gmail.com</span>
                            </a>

                            <a href="https://www.linkedin.com/in/jambula-hemasai-eswar-reddy" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group">
                                <div className="p-3 rounded-full bg-slate-800 group-hover:bg-blue-600 transition-colors">
                                    <Linkedin size={20} />
                                </div>
                                <span>Linkedin Profile</span>
                            </a>

                            <a href="https://github.com/hemasaieswar" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group">
                                <div className="p-3 rounded-full bg-slate-800 group-hover:bg-blue-600 transition-colors">
                                    <Github size={20} />
                                </div>
                                <span>Github Profile</span>
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-1">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-slate-500"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-slate-500"
                                placeholder="your@email.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-1">Message</label>
                            <textarea
                                id="message"
                                rows="4"
                                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-slate-500 resize-none"
                                placeholder="Your message..."
                            ></textarea>
                        </div>
                        <button
                            type="button"
                            className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                        >
                            Send Message <Send size={18} />
                        </button>
                    </form>

                </div>
            </div>
        </Section>
    );
};

export default Contact;
