'use client';

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Lora } from "next/font/google";
import Image from "next/image";

const lora = Lora({
  family: "Lora",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const imageFiles = ["/masajes1.webp", "/reiki.webp", "/yoga.webp"];

const BenefitsPage = () => {
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px",
  });

  const [subtitleRef, subtitleInView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px",
  });

  const [additionalTextRef, additionalTextView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px",
  });

  const [cardsRef, cardsInView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px",
  });

  return (
    <div className="flex justify-center items-center h-auto">
      <div className="flex flex-col space-y-8">
        <motion.h1
          ref={titleRef}
          className={lora.className}
          style={{
            fontSize: "38px",
            fontStyle: "italic",
            color: "#808000",
            textAlign: "center",
          }}
          animate={{ opacity: titleInView ? 1 : 0, y: titleInView ? 0 : 50 }}
          transition={{ duration: 0.5 }}
        >
          Beneficios de la Masoterapia, Reiki y Hatha Yoga
        </motion.h1>

        <motion.p
          ref={subtitleRef}
          className={lora.className}
          style={{
            fontSize: "15px",
            fontStyle: "italic",
            marginBottom: "20px",
            color: "#B9A88F",
            textAlign: "center",
          }}
          animate={{ opacity: subtitleInView ? 1 : 0, y: subtitleInView ? 0 : 50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Las prácticas de Masoterapia, Reiki y Hatha Yoga ofrecen una amplia
          gama de beneficios para personas de todas las edades y estilos de
          vida. Cada una de estas prácticas tiene un enfoque único, pero todas
          trabajan juntas para mejorar el bienestar físico, mental y emocional.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4" ref={cardsRef}>
          {["Masoterapia", "Reiki", "Hatha Yoga"].map((title, index) => (
            <Card
              key={index}
              title={title}
              index={index}
              cardsInView={cardsInView}
              imageFile={imageFiles[index]}
            />
          ))}
        </div>

        <motion.p
          ref={additionalTextRef}
          className={lora.className}
          style={{
            fontSize: "15px",
            fontStyle: "italic",
            marginBottom: "20px",
            color: "#B9A88F",
            textAlign: "center",
          }}
          animate={{ opacity: additionalTextView ? 1 : 0, y: additionalTextView ? 0 : 50 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          La combinación de Masoterapia, Reiki y Hatha Yoga puede ayudarte a
          alcanzar un estado de bienestar integral. Si estás buscando una forma
          natural de mejorar tu salud física, mental y emocional, estas
          prácticas son una excelente opción.
        </motion.p>

        <div className="flex justify-center mt-4">
          <a
            href="#contacto"
            className="bg-brown-light hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transform transition duration-300 ease-in-out hover:scale-105"
          >
            Explora la Armonía
          </a>
        </div>
      </div>
    </div>
  );
};

const Card = ({ title, index, cardsInView, imageFile }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px",
  });

  const delay = 0.4 + index * 0.2;

  return (
    <motion.div
      className="bg-white rounded-lg shadow-sm px-6 py-4"
      ref={ref}
      animate={{ opacity: inView && cardsInView ? 1 : 0, y: inView && cardsInView ? 0 : 50 }}
      transition={{ duration: 0.5, delay }}
    >
      <div style={{ position: "relative", width: "100%", height: "300px" }}>
        <Image
          src={imageFile}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <h2
        className={lora.className}
        style={{
          fontSize: "20px",
          fontStyle: "italic",
          color: "#808000",
          fontWeight: "bold",
          marginBottom: "10px",
        }}
      >
        Beneficios de {title}
      </h2>

      <ul
        className={`${lora.className} list-disc`}
        style={{
          fontSize: "15px",
          fontStyle: "italic",
          color: "#B9A88F",
          marginBottom: "10px",
          paddingLeft: "1rem",
        }}
      >
        {[
          "Mejora la circulación sanguínea y linfática.",
          "Reduce la tensión muscular y el dolor.",
          "Mejora la flexibilidad y el rango de movimiento.",
          "Acelera la recuperación de lesiones.",
          "Reduce el estrés y la ansiedad.",
          "Mejora la calidad del sueño.",
          "Fortalece el sistema inmunológico."
        ].map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default BenefitsPage;
