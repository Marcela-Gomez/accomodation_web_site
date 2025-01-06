import Styles from "./Card.module.css"

interface CardProps {
    title: string;
    description: string;
    image: string;
  }
  
  const Card: React.FC<CardProps> = ({ title, description, image }) => {
    return (
      <div className={Styles.card}>
        <div className={Styles.container_image}>
          <img src={image} alt={title} className={Styles.image_card} />
        </div>
        <h3 className={Styles.tittle_card}>{title}</h3>
        <p className={Styles.description_card}>{description}</p>
      </div>
    );
  };
  
  export default Card;
  