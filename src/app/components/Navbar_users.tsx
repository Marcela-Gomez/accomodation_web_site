'use client'
import { useState } from "react";
import Link from "next/link";
import Styles from "./navbar.module.css";

export default function Navbar_users() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={Styles.Navbar}>
      <div className={Styles.Hamburger} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`${Styles.Menu} ${isOpen ? Styles.Active : ""}`}>
        <div className={Styles.Left}>
          <Link href="/">Inicio</Link>
          <Link href="/destinos">Mis destinos</Link>
        </div>
        <div className={Styles.Right}>
          <Link href="/cuenta">Crear Cuenta</Link>
          <Link href="/login">Iniciar Sesión</Link>
        </div>
      </div>
    </nav>
  );
}
