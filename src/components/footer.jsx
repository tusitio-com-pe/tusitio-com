import Logoblanco from "../assets/imagenes/logoblanco.svg";
import "../styles/footer.css";

export default function Footer() {
    return (
        <footer className='footer'>
            <div className='footer-one'>
                <div className='footer-logo'>
                    <img src={Logoblanco} alt="" />
                    <p>tusitio.com.pe</p>
                </div>
                <p>Planes y precios</p>
                <p>Sobre nosotros</p>
                <p>Casos de Éxito</p>
                <p>Contáctanos</p>
            </div>
            <div className='footer-two'>
                <p>Portafolio</p>
                <p>Reseñas</p>
                <p>Hosting</p>
                <p>Dominios</p>
                <p>SSL</p>
                <p>Seguridad</p>
            </div>
            <div className='footer-three'>
                <p>Correo corporativo</p>
                <p>Web estática</p>
            </div>
            <div className='footer-four'>
                <p className='ultimate-p'>© EZKALA Copyright 2026 tusitio.com.pe</p>
            </div>
        </footer>
    )

};