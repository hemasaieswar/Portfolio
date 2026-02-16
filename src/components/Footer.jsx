import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-slate-950 py-8 border-t border-slate-900 text-center">
            <div className="container mx-auto px-6">
                <p className="text-slate-500 text-sm">
                    © {new Date().getFullYear()} Hema Sai Eswar Reddy Jambula. All rights reserved.
                </p>
                <p className="text-slate-600 text-xs mt-2">
                    Built with React, Tailwind CSS & Framer Motion
                </p>
            </div>
        </footer>
    );
};

export default Footer;
