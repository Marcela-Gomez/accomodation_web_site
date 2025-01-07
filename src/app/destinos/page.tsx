"use client"

import { useEffect, useState } from "react";
import Navbar_users from "../components/Navbar_users";
import Styles  from "./destinos.module.css";
import Card from "../components/Card";

interface Destination {
  id: number;
  address: string;
  country: string;
  city: string;
  price: number;
  rooms: number;
  bathrooms: number;
  size: string;
  image: string;
  description: string;
}

export default function Destinations() {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchDestinations() {
      try {
        const res = await fetch("http://localhost:3000/api/destinations");
        const result = await res.json();
        if (!res.ok) throw new Error(result.error);
        const formattedDestinations = result.destinations.map((destino: any) => ({
          id: destino.ACCOMODATION_ID,
          address: destino.ADDRESS,
          country: destino.COUNTRY,
          city: destino.CITY,
          price: destino.PRICE,
          rooms: destino.ROOMS,
          bathrooms: destino.BATHROOMS,
          size: destino.SIZE,
          image: destino.IMAGE,
          description: destino.DESCRIPTION,
        }));

        setDestinations(formattedDestinations);
      } catch (err: any) {
        setError(err.message);
      }
    }

    fetchDestinations();
  }, []);

  if (error) return <p>Error: {error}</p>;
  if (!destinations.length) return <p>Cargando destinos...</p>;

  return (
    <div>
      <Navbar_users />
      <h1 className={Styles.tittle_destinos}>Destinos</h1>
      <div className={Styles.container_card}>
        {destinations.map((destino) => (
          <Card
          key={destino.id}
          title={destino.city}
          description={destino.description}
          image={destino.image}
          />
        ))}
      </div>
    </div>
  );
}
