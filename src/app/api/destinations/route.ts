import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

const dbConfig = {
    host: "localhost",
    user: "root",
    password: "", 
    database: "ALOJAMIENTOS_FULLSTACK",
    port: 3306,
};

export async function GET() {
  try {
    const connection = await mysql.createConnection(dbConfig);
    const [rows]: any = await connection.execute(`SELECT * FROM ACCOMODATION`);
    await connection.end();

    return NextResponse.json({ destinations: rows }, { status: 200 });
  } catch (error: any) {
    console.error("Error al obtener destinos:", error);
    return NextResponse.json({ error: "No se pudieron obtener los destinos" }, { status: 500 });
  }
}