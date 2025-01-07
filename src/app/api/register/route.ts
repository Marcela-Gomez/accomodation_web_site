import { NextResponse } from "next/server";
import mysql from "mysql2/promise";
import bcrypt from "bcryptjs";

const dbConfig = {
    host: "localhost",
    user: "root",
    password: "", 
    database: "ALOJAMIENTOS_FULLSTACK",
    port: 3306,
};

export async function POST(request: Request) {
  const body = await request.json();
  const { name, lastname, phone, address, date_birth, country, role, email, password } = body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const connection = await mysql.createConnection(dbConfig);

    const query = `INSERT INTO USERS (NAME, LASTNAME, PHONE_NUMBER, ADDRESS, DATE_BIRTH, COUNTRY, ROLE, EMAIL, PASSWORD, CREATED_AT)
                   VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())`;
    const values = [name, lastname, phone, address, date_birth, country, role, email, hashedPassword];

    await connection.execute(query, values);
    await connection.end();

    return NextResponse.json({ message: "Usuario registrado exitosamente" }, { status: 201 });
  } catch (error: any) {
    console.error("Error al registrar el usuario:", error);
    return NextResponse.json({ error: "No se pudo registrar el usuario" }, { status: 500 });
  }
}