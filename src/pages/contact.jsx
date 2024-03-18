'use client';

import React, { useState } from 'react';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Lora } from "next/font/google";
import SocialButtons from '@/components/socialButtons';

const lora = Lora({
  family: "Lora",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailData = {
      subject,
      message: `From: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    };

    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    });

    if (response.ok) {
      console.log('Email sent successfully');
    } else {
      console.log('Error sending email');
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
      className="container"
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <motion.div
        className="mx-6 mb-5"
      >
        <h1
          className={`${lora.className} text-2xl font-bold mb-2`}
          style={{
            color: '#808000',
            fontSize:'25px',
            textAlign:'center'
          }}
        >
          Bienestar Integral a Tu Alcance
        </h1>
        <h2
          className={lora.className}
          style={{
            color:'#B9A88F',
            fontSize:'18px',
            textAlign:'center'
          }}
        >
          Reserva tu sesión de yoga, masaje o Reiki.
        </h2>
        <p
          className={lora.className}
          style={{
            color:'#FFCC99',
            fontStyle:'italic',
            fontSize:'15px',
            textAlign:'center'
          }}
        >
          “Permíteme guiar tu bienestar interior. Reserva ahora y descubre la magia de la conexión cuerpo-alma.”
        </p>
        <SocialButtons/>
      </motion.div>
      <div className="flex justify-center">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          className="w-1/2 mx-6"
        >
          <EmailFormContent
            email={email}
            setEmail={setEmail}
            subject={subject}
            setSubject={setSubject}
            message={message}
            setMessage={setMessage}
            phone={phone}
            setPhone={setPhone}
            name={name}
            setName={setName}
            handleSubmit={handleSubmit}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

const EmailFormContent = ({
  email,
  setEmail,
  subject,
  setSubject,
  message,
  setMessage,
  phone,
  setPhone,
  name,
  setName,
  handleSubmit,
}) => (
  <motion.form
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 2 }}
    onSubmit={handleSubmit}
    className="email-form"
  >
    <div className="form-group">
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        placeholder="Nombre"
        className="name-input"
      />
    </div>
    <div className="form-group">
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="Email"
        className="email-input"
      />
    </div>
    <div className="form-group">
      <input
        type="tel"
        id="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
        placeholder="Número de teléfono"
        className="phone-input"
      />
    </div>
    <div className="form-group">
      <input
        type="text"
        id="subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        required
        placeholder="Asunto"
        className="subject-input"
      />
    </div>
    <div className="form-group">
      <textarea
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        rows="4"
        placeholder="Mensaje"
        className="message-input"
      />
    </div>
    <button type="submit" className="submit-button">
      Enviar Email
    </button>
  </motion.form>
);

export default EmailForm;
