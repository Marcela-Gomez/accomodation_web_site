import Navbar_users from "../components/Navbar_users";
import Style from "./detalles_destinos.module.css";

export default function detales_destinos (){
    return (
        <div>
            <Navbar_users/>
            <div className={Style.container}>
                <h1 className={Style.tittle}>Casa de campo en España Madrid</h1>
                <div className={Style.container_img}>
                    <div className={Style.container_image_principal}>
                        <img src="https://res.cloudinary.com/dnc8k8wwv/image/upload/v1722798177/c61yuzna57cwr0c2jwqt.jpg" />
                    </div>
                    <div className={Style.container_image_secundario}> 
                        <img src="https://res.cloudinary.com/dnc8k8wwv/image/upload/v1722798177/c61yuzna57cwr0c2jwqt.jpg" />
                        <img src="https://res.cloudinary.com/dnc8k8wwv/image/upload/v1722798177/c61yuzna57cwr0c2jwqt.jpg" />
                        <img src="https://res.cloudinary.com/dnc8k8wwv/image/upload/v1722798177/c61yuzna57cwr0c2jwqt.jpg" />    
                    </div>
                </div>
                <div className={Style.container_info}>
                    <h1 className={Style.tittle_info}>Huespedes</h1>
                    <p className={Style.info}>8</p>
                    <h1 className={Style.tittle_info}>Dormitorios</h1>
                    <p className={Style.info}>7</p>
                    <h1 className={Style.tittle_info}>Baños</h1>
                    <p className={Style.info}>4</p>
                    <h1 className={Style.tittle_info_description}>Descripción</h1>
                    <p className={Style.description}>
                        Un hermosa casa en el campo para conectar con la naturaleza junto con toda la familia y amigos es una 
                        casa de dos plantas y terraza ideal para un picnic y conectar con la naturaleza
                        Un hermosa casa en el campo para conectar con la naturaleza junto con toda la familia y amigos es una 
                        casa de dos plantas y terraza ideal para un picnic y conectar con la naturaleza 
                    </p>
                </div>
            </div>
        </div>
    )
}