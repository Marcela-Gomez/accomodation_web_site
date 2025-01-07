import { NextResponse } from "next/server";
import mysql from "mysql2/promise";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const dbConfig = {
  host: "localhost",
  user: "root",
  password: "", 
  database: "ALOJAMIENTOS_FULLSTACK",
  port: 3306,
};

export async function POST(request: Request) {
  const body = await request.json();
  const { email, password } = body;

  try {
    const connection = await mysql.createConnection(dbConfig);
    const [rows]: any = await connection.execute(`SELECT * FROM USERS WHERE EMAIL = ? AND PASSWORD = ?`, [email , password]);
    await connection.end();

    if (rows.length === 0) {
      return NextResponse.json({ error: "Usuario no encontrado" }, { status: 404 });
    }

    const user = rows[0];
    const isPasswordValid = await bcrypt.compare(password, user.PASSWORD);
    
    const token = jwt.sign({ id: user.USERID, role: user.ROLE }, "secret_key", { expiresIn: "1h" });

    return NextResponse.json({ message: "Inicio de sesión exitoso", token }, { status: 200 });
  } catch (error: any) {
    console.error("Error al iniciar sesión:", error);
    return NextResponse.json({ error: "No se pudo iniciar sesión" }, { status: 500 });
  }
}

