import Card from "@/app/components/Card";
import Navbar from "../components/Navbar";
import Styles from "./destinos.module.css";
import Navbar_users from "../components/Navbar_users";

const destinos = [
  {
    title: "Casa moderna en Francia París",
    description: "Un moderno apartamento en el corazón...",
    image: "https://res.cloudinary.com/dnc8k8wwv/image/upload/v1734930771/residence-2219972_1280_r4jgcv.jpg",
   },
  {
    title: "Casa moderna en Francia París",
    description: "Un moderno apartamento en el corazón...",
    image: "https://res.cloudinary.com/dnc8k8wwv/image/upload/v1736013464/door-8881474_1280_nzkidt.jpg",
  },
  {
    title: "Casa moderna en Francia París",
    description: "Un moderno apartamento en el corazón de paris con vistas a la ciudad.",
    image: "https://res.cloudinary.com/dnc8k8wwv/image/upload/v1722751869/nycncsxudw5hzecqxrut.jpg",
  },
  {
    title: "Casa moderna en Francia París",
    description: "Un moderno apartamento en el corazón...",
    image: "https://res.cloudinary.com/dnc8k8wwv/image/upload/v1722798177/c61yuzna57cwr0c2jwqt.jpg",
  },
];

export default function Destinos() {
  return (
    <main>
      <Navbar_users/>
      <h1 className={Styles.tittle_destinos}>Mis destinos</h1>
      <div className={Styles.container_card}>
        {destinos.map((destino, index) => (
          <Card
            key={index}
            title={destino.title}
            description={destino.description}
            image={destino.image}
          />
        ))}
      </div>
    </main>
  );
}
