import mysql, { Connection } from "mysql2/promise";

interface QueryOptions {
  query: string; 
  values?: any[]; 
}

/**
 * Función para ejecutar consultas en la base de datos MySQL
 * @param {QueryOptions} options - Objeto con la consulta y los valores asociados
  @returns {Promise<any>} - Resultados de la consulta o un error
 */
export async function query({ query, values = [] }: QueryOptions): Promise<any> {
  let dbconnection: Connection | null = null;

  try {
    // Establecer la conexión con la base de datos MySQL
    dbconnection = await mysql.createConnection({
      host: "localhost", // Dirección del servidor de la base de datos
      database: "ALOJAMIENTOS_FULLSTACK", // Nombre de la base de datos a la que se conecta
      user: "root", // Nombre de usuario para la conexión
      password: "", // Contraseña del usuario
      port: 3306, // Puerto donde se escucha la base de datos (por defecto MySQL)
    });

    console.log("Conexión exitosa a la base de datos...");

    // Ejecutar la consulta y capturar los resultados
    const [results] = await dbconnection.execute(query, values);
    return results; // Retornar los resultados de la consulta
  } catch (error: any) {
    // Manejar errores durante la conexión o ejecución de la consulta
    console.error("Error al conectar a la base de datos:", error.message);
    return { error: error.message }; // Retornar el error como un objeto
  } finally {
    // Asegurarse de cerrar la conexión a la base de datos
    if (dbconnection) {
      await dbconnection.end();
    }
  }
}
