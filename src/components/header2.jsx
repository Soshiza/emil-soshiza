"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FaBars, FaTimes, FaArrowLeft } from "react-icons/fa";
import { Dancing_Script } from "@next/font/google";

const dancing = Dancing_Script({
  family: "Dancing Script",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const Header2 = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const smoothScroll = (event, target) => {
    event.preventDefault();
    document.getElementById(target).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    closeMenu();
  };

  return (
    <header className="bg-rose-pale text-olive p-2 flex items-center justify-between fixed w-full z-50 top-0">
      <div className="flex items-center">
        <Image
          src="/logo.png"
          alt="Logo"
          width={45}
          height={45}
          className="mr-4"
        />
        <h1 className={dancing.className}>
          <span
            style={{
              fontSize: "35px",
              backgroundImage: "url(/background-gold.webp)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Antonio Emil Muñoz
          </span>
        </h1>
      </div>
      <div className="md:hidden" ref={menuRef}>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-olive hover:text-orange-soft focus:outline-none"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <nav className="hidden md:flex items-center space-x-4">
        <ul className="md:flex items-center space-x-4">
          <li>
            <a
              href="/"
              className="hover:text-orange-soft"
              onClick={closeMenu}
            >
              <FaArrowLeft /> {/* Icono de Volver */}
            </a>
          </li>
        </ul>
      </nav>
      {menuOpen && (
        <div
          className="fixed inset-y-0 right-0 bg-rose-pale p-4 h-80 w-64 pt-24 my-6 rounded-xl text-center"
          ref={menuRef}
        >
          <nav className="flex flex-col">
            <ul>
              <li className="mb-2">
                <a
                  href="/"
                  className="hover:text-orange-soft"
                  onClick={closeMenu}
                >
                  <FaArrowLeft /> {/* Icono de Volver */}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header2;
