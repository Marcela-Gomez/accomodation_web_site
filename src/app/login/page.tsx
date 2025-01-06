import Navbar from '../components/Navbar';
import Styles from './login.module.css';
import Link from 'next/link';

export default function Login() {
  return (
    <>
      <Navbar />
        <div className={Styles.container}>
            <form className={Styles.form_container}>
                <h1>Iniciar Sesión</h1>
                <input type="text" placeholder="Usuario" />
                <input type="password" placeholder="Contraseña" />
                <button type="submit">Iniciar Sesión</button>
                <div>
                    <p>¿No tienes cuenta? </p><Link href='/cuenta'>Crear cuenta</Link>
                </div>
            </form>
        </div>
    </>
  );
}
