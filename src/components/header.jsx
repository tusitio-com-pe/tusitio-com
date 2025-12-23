import Logo from "../assets/imagenes/LOGO.svg";
import "../styles/header.css";

export default function Header() {
    return (
        <header className='header_main'>
            <div className='container_logo'>
                <img src={Logo} alt="Logo tu sitio" />
                <p>tusitio.com.pe</p>
            </div>
            <nav className='links'>
                <li><a href="#planes">Plan</a></li>
                <li><a href="#sobre-nosotros">Sobre nosotros</a></li>
                <li><a href="#nuestros-sitios">Nuestros sitios</a></li>
                <li className='link-black' ><a href="#planes">Empieza ahora</a></li>
            </nav>
        </header>
    )
};