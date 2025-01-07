import Navbar from '../components/Navbar';
import Link from 'next/link';
import Styles from './crear_cuenta.module.css';

export default function Cuenta() {
  return (
    <>
      <Navbar />
      <div className={Styles.container}>
        <form className={Styles.form_container}>
          <h1>Crear Cuenta</h1>
          <input type="text" placeholder="Nombre"  className={Styles.input_cuenta}/>
          <input type="text" placeholder="Apellido" className={Styles.input_cuenta} />
          <input type="date" placeholder="Fecha de nacimiento"  className={Styles.input_cuenta}/>
          <input type="email" placeholder="Correo" className={Styles.input_cuenta}/>
          <input type="number" placeholder="Telefono" className={Styles.input_cuenta}/>
          <input type="text" placeholder="Pais" className={Styles.input_cuenta}/>
          <input type="text" placeholder="Usuario"  className={Styles.input_cuenta}/>
          <input type="password" placeholder="Contraseña"  className={Styles.input_cuenta} />
          <input type="text" placeholder="Dirección" className={Styles.address}/>
          <button type="submit">Crear cuenta</button>
          <div>
            <p>¿Ya tienes cuenta? </p><Link href='/cuenta'>Iniciar sesión</Link>
          </div>
        </form>
        </div>
    </>
  );
}
