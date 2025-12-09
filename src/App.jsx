import { useEffect } from "react";
import './App.css';
import Logo from "./assets/imagenes/LOGO.svg";
import Portada from "./assets/imagenes/portada.png";
import Patas from "./assets/imagenes/SIEMPREPATAS.PE.png";
import Nadef from "./assets/imagenes/NADEFSTUDIO.png";
import Raquel from "./assets/imagenes/STILOSRAQUEL.png";
import Vilela from "./assets/imagenes/KEILAVILELA.png";
import Logoblanco from "./assets/imagenes/logoblanco.svg";

function App() {

  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <>
      <header className='header_main'>
        <div className='container_logo'>
          <img src={Logo} alt="Logo tu sitio" />
          <p>tusitio.com.pe</p>
        </div>

        <nav className='links'>
          <ul>
            <li><a href="#planes">Plan</a></li>
            <li><a href="#sobre-nosotros">Sobre nosotros</a></li>
            <li><a href="#nuestros-sitios">Nuestros sitios</a></li>
            <li className='link-black'><a href="#planes">Empieza ahora</a></li>
          </ul>
        </nav>
      </header>

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
    </>
  );
}

export default App;
