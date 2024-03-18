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

const BenefitsPage = () => {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    rootMargin: "-100px",
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true,
    rootMargin: "-100px",
  });

  const [ref3, inView3] = useInView({
    triggerOnce: true,
    rootMargin: "-100px",
  });

  const imageFiles = ["masajes1.webp", "reiki.webp", "yoga.webp"];

  return (
    <div className="flex justify-center items-center h-auto">
      <div className="flex flex-col space-y-8">
        <motion.h1
          ref={ref1}
          className={lora.className}
          style={{
            fontSize: "38px",
            fontStyle: "italic",
            color: "#808000",
            textAlign: "center",
          }}
          animate={{ opacity: inView1 ? 1 : 0, y: inView1 ? 0 : 50 }}
          transition={{ duration: 0.5 }}
        >
          Beneficios de la Masoterapia, Reiki y Hatha Yoga
        </motion.h1>

        <motion.p
          ref={ref2}
          className={lora.className}
          style={{
            fontSize: "15px",
            fontStyle: "italic",
            marginBottom: "20px",
            color: "#B9A88F",
            textAlign: "center",
          }}
          animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 0 : 50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Las prácticas de Masoterapia, Reiki y Hatha Yoga ofrecen una amplia
          gama de beneficios para personas de todas las edades y estilos de
          vida. Cada una de estas prácticas tiene un enfoque único, pero todas
          trabajan juntas para mejorar el bienestar físico, mental y emocional.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {["Masoterapia", "Reiki", "Hatha Yoga"].map((title, index) => {
            const [ref, inView] = useInView({
              triggerOnce: true,
              rootMargin: "-100px",
            });

            return (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-sm px-6 py-4"
                ref={ref}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
              >
                <img
                  className="w-full rounded-md mx-2 my-2"
                  src={imageFiles[index]} 
                  alt={title}
                />
                <motion.h2
                  className={lora.className}
                  style={{
                    fontSize: "20px",
                    fontStyle: "italic",
                    color: "#808000",
                    fontWeight: "bold",
                    marginBottom: "10px",
                  }}
                  animate={{ opacity: inView ? 1 : 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                >
                  Beneficios de {title}
                </motion.h2>

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
          })}
        </div>

        <motion.p
          ref={ref3}
          className={lora.className}
          style={{
            fontSize: "15px",
            fontStyle: "italic",
            marginBottom: "20px",
            color: "#B9A88F",
            textAlign: "center",
          }}
          animate={{ opacity: inView3 ? 1 : 0, y: inView3 ? 0 : 50 }}
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

export default BenefitsPage;
