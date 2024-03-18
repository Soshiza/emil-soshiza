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

const ServicesPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px", // Adjust as needed
  });

  const ServiceCard = ({
    title,
    description,
    price,
    price2,
    price3,
    price4,
    price5,
    imageSrc,
  }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1.5 }} // Adjust duration as needed
        className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center w-80 md:w-80 mx-auto mb-4"
        style={{ marginBottom: "1rem" }} // Add margin bottom
      >
        <img
          src={imageSrc}
          alt={title}
          className="w-64 h-64 mx-auto mb-4 rounded-full"
        />
        <h2
          className={`${lora.className} text-xl font-semibold mb-2 text-center`}
          style={{
            color: "#808000",
          }}
        >
          {title}
        </h2>
        <p
          className={`${lora.className} mb-4 text-center`}
          style={{
            color: "#B9A88F",
          }}
        >
          {description}
        </p>
        <p
          className={`${lora.className} font-semibold text-center`}
          style={{
            color: "#808000",
          }}
        >
          {price}
        </p>
        <p
          className={`${lora.className} font-semibold text-center`}
          style={{
            color: "#808000",
          }}
        >
          {price2}
        </p>
        <p
          className={`${lora.className} font-semibold text-center`}
          style={{
            color: "#808000",
          }}
        >
          {price3}
        </p>
        <p
          className={`${lora.className} font-semibold text-center`}
          style={{
            color: "#808000",
          }}
        >
          {price4}
        </p>
        <p
          className={`${lora.className} font-semibold text-center`}
          style={{
            color: "#808000",
          }}
        >
          {price5}
        </p>
      </motion.div>
    );
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 1.5 }} // Adjust duration as needed
        className={`${lora.className} text-3xl font-bold mb-8`}
        style={{
          color: "#808000",
          textAlign: "center",
        }}
      >
        Nuestros Servicios
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 1.5 }} // Adjust duration as needed
        className={`${lora.className} mb-16`}
        style={{
          color: "#B9A88F",
          textAlign: "center",
        }}
      >
        Ofrecemos una amplia gama de servicios para ayudarte a alcanzar tus
        objetivos de bienestar físico y mental.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center" // Adjust the number of columns based on screen size
      >
        {/* Render ServiceCard components */}
        <ServiceCard
          title="Hatha Yoga"
          description="Clases diseñadas para relajar y liberar la tensión muscular."
          price="Clase única: $8.000"
          price2="4 Clases: $25.000"
          price3="6 Clases: $34.000"
          price4="8 Clases: $45.000"
          price5="10 Clases: $60.000"
          imageSrc="/yoga.webp"
        />
        <ServiceCard
          title="Reiki"
          description="Terapia que conecta con la energía universal para sanar cuerpo y alma."
          price="$15.000"
          imageSrc="/reiki.webp"
        />
        <ServiceCard
          title="Masoterapia"
          description="Masajes para distintas necesidades."
          price="Masaje Relajacion: $15.000"
          price2="Masaje Pre o Post Deportivo: $15.000"
          price3="Masaje Descontracturante $20.000"
          price4="Masaje Rehabilitacion $20.000"
          imageSrc="/masajes2.webp"
        />

        <ServiceCard
          title="Pack de Servicios"
          description="Pack de masajes mensuales para un mejor bienestar"
          price="4 masajes descontracturantes al mes:  $60.000"
          price2="4 masajes relajación al mes: $45.000"
          imageSrc="/pack.webp"
        />
      </motion.div>
    </motion.div>
  );
};

export default ServicesPage;
