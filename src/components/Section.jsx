import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ id, children, className = "" }) => {
    return (
        <section id={id} className={`py-20 md:py-32 ${className}`}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </section>
    );
};

export default Section;
