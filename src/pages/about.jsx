'use client';

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Lora } from "next/font/google";

const lora = Lora({
  family: "Lora",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const AboutPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "100px",
  });

  return (
    <div className="p-8 rounded-lg flex flex-col lg:flex-row lg:items-center">
      <motion.img
        ref={ref}
        src="aboutme.webp"
        alt="Antonio Muñoz"
        className="w-80 h-96 rounded-lg lg:mr-8 lg:flex-shrink-0 mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      />
      <motion.div className="text-center lg:text-left lg:w-2/3">
        <motion.h1
          className={`${lora.className} text-2xl font-semibold mb-4`}
          style={{ color: "#808000" }}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Antonio Emil Muñoz
        </motion.h1>
        <motion.p
          className={`${lora.className} text-gray-600`}
          style={{ fontSize: "15px", color: "#B9A88F" }}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Soy un instructor de yoga y masoterapeuta apasionado por el equilibrio del ser. Me titulé como actor en la Escuela de Comunicaciones de Duoc UC y complementé mi vocación con el yoga y la masoterapia. A través de estas disciplinas, he descubierto un camino para la paz interior y la flexibilidad física, tanto para mí como para mis alumnos.
        </motion.p>
        <motion.p
          className={`${lora.className} mt-4 text-gray-600`}
          style={{ fontSize: "15px", color: "#B9A88F" }}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Mi formación especializada en prácticas yóguicas me permite guiar a las personas en su búsqueda de bienestar integral. Las clases de Hatha yoga que imparto no solo buscan relajar y liberar la tensión muscular, sino que también sirven como un refugio para la mente, un espacio donde encontrar paz y tranquilidad.
        </motion.p>
        <motion.p
          className={`${lora.className} mt-4 text-gray-600`}
          style={{ fontSize: "15px", color: "#B9A88F" }}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Como masoterapeuta y reikista de nivel 1 y 2, ofrezco una experiencia de sanación profunda que va más allá del cuerpo físico. Mis sesiones son personalizadas para cada individuo, abarcando desde masajes de relajación hasta terapias de rehabilitación y masajes deportivos pre y post competitivos. Además, mi práctica de Reiki permite a los individuos conectarse con la energía universal, promoviendo la sanación física y espiritual y alineando los chakras para lograr una armonía completa.
        </motion.p>
        <motion.p
          className={`${lora.className} mt-4 text-gray-600`}
          style={{ fontSize: "15px", color: "#B9A88F" }}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          Mi filosofía se basa en el autoconocimiento y en la utilización consciente del cuerpo como herramienta para alcanzar el bienestar. Creo que la salud física, mental y espiritual están interconectadas, y por eso mi enfoque es holístico. Mis terapias curativas están diseñadas para ayudar a las personas a descubrir y mantener un equilibrio vital, proporcionándoles una base sólida para una vida plena y saludable.
        </motion.p>
        <motion.p
          className={`${lora.className} mt-4 text-gray-600`}
          style={{ fontSize: "15px", color: "#B9A88F" }}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          Con una pasión por el servicio y un compromiso con el crecimiento personal, me considero un guía confiable en el camino hacia el bienestar. Si estás buscando mejorar tu calidad de vida y alcanzar un mayor equilibrio en todos los aspectos de tu ser, te invito a que explores mis clases de yoga y sesiones de masoterapia. Estoy aquí para acompañarte en tu viaje hacia una vida más plena y saludable.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default AboutPage;
