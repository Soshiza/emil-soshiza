'use client';

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion'; // Importa Framer Motion
import { Lora } from 'next/font/google';

const lora = Lora({
    family: 'Lora',
    subsets: ['latin'],
    weight: ['400'], 
    display: 'swap',
});

const InitPage = () => {
    const controls = useAnimation();

    useEffect(() => {
        controls.start('visible'); // Inicia la animación al cargar el componente
    }, [controls]);

    return (
        <div className="flex flex-col items-center justify-center h-screen mt-14">
            <motion.h1
                className={lora.className}
                style={{
                    fontSize: '40px',
                    fontStyle: 'italic',
                    marginBottom: '2px',
                    color: '#808000'
                }}
                initial={{ y: -100, opacity: 0 }}
                animate={controls}
                variants={{
                    hidden: { y: -100, opacity: 0 },
                    visible: { y: 0, opacity: 1 }
                }}
                transition={{ duration: 2, delay: 0 }}
            >
                Encuentra tu equilibrio
            </motion.h1>
            
            <motion.h2
                className={lora.className}
                style={{
                    fontSize: '18px',
                    fontStyle: 'italic',
                    marginBottom: '5px',
                    color: '#808000',
                }}
                initial={{ y: -100, opacity: 0 }}
                animate={controls}
                variants={{
                    hidden: { y: -100, opacity: 0 },
                    visible: { y: 0, opacity: 1 }
                }}
                transition={{ duration: 2, delay: 0.5 }}
            >
                Yoga, Masoterapia y Reiki con Antonio Muñoz
            </motion.h2>
            
            <motion.p
                className={lora.className}
                style={{
                    fontSize:'15px',
                    fontStyle: 'italic',
                    marginBottom: '20px',
                    color: '#B9A88F',
                }}
                initial={{ y: -100, opacity: 0 }}
                animate={controls}
                variants={{
                    hidden: { y: -100, opacity: 0 },
                    visible: { y: 0, opacity: 1 }
                }}
                transition={{ duration: 1, delay: 1 }}
            >
                &quot;Relaja tu cuerpo, libera tu mente y conecta con tu energía interior&quot;
            </motion.p>
            
            <motion.img
                className="w-auto h-auto mb-4 sm:w-96 md:w-1/2 lg:w-1/2 rounded-lg"
                src="/portada.webp"
                alt="Antonio Emil Muñoz"
                initial={{ y: -100, opacity: 0 }}
                animate={controls}
                variants={{
                    hidden: { y: -100, opacity: 0 },
                    visible: { y: 0, opacity: 1 }
                }}
                transition={{ duration: 1, delay: 2 }}
            />
        </div>
    );
};

export default InitPage;
