'use client'
import React, { useState } from "react";
import Styles from '../cuenta/crear_cuenta.module.css';

const DateInput: React.FC = () => {
  const [type, setType] = useState<"text" | "date">("text");

  return (
    <input
      type={type}
      onFocus={() => setType("date")}
      onBlur={() => setType("text")}
      placeholder="Fecha de nacimiento"
      className={Styles.input_cuenta}
    />
  );
};

export default DateInput;
