'use client'

import Navbar from '../components/Navbar';
import Styles from './login.module.css';
import Link from 'next/link';
import React, { useState } from "react";
import { useRouter } from "next/navigation";


export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const router = useRouter(); // Hook para redirigir

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      console.log("Resultado de la API:", result); // Verifica qué devuelve la API

      if (!res.ok) {
        setError(result.error);
        return;
      }

      localStorage.setItem("token", result.token);
      router.push("/destinos"); // Redirige a la página de destinos
    } catch (err: any) {
      setError("Error al iniciar sesión. Por favor, inténtalo de nuevo.");
    }
  };


  return (
    <>
    <Navbar />
      <div className={Styles.container}>
          <form className={Styles.form_container} onSubmit={handleSubmit}>
              <h1>Iniciar Sesión</h1>
              <input type="text" placeholder="Correo electronico"  name='email' onChange={handleChange}/>
              <input type="password" placeholder="Contraseña" name='password' onChange={handleChange}/>
              <button type="submit">Iniciar Sesión</button>
              <div>
                  <p>¿No tienes cuenta? </p><Link href='/cuenta'>Crear cuenta</Link>
              </div>
          </form>
      </div>
  </>
  );
}