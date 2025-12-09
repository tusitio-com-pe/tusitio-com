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
          <li><a href="#planes">Plan</a></li>
          <li><a href="#sobre-nosotros">Sobre nosotros</a></li>
          <li><a href="#nuestros-sitios">Nuestros sitios</a></li>
          <li className='link-black' ><a href="#planes">Empieza ahora</a></li>
        </nav>
      </header>


      <main className='firts-container'>
        <div className='sub_container'>
          <div className='description-container'>
            <p className='text_one'>OFERTA POR LANZAMIENTO</p>
            <p className='text_two'>¡AHORA TODOS</p>
            <p className='text_three'>LOS EMPRENDEDORES</p>
            <p className='text_four'>PUEDEN TENER SU SITIO WEB!</p>
            <p className='text_five'>+1 CORREO CORPORATIVO GRATIS</p>
            <div className='mini-description-container'>
              <p>Desde</p>
              <p className='text_six'>S/.</p>
              <p className='text_seven'>99</p>
              <p>Pago Único</p>
            </div>
            <div className='pseudo-button'><a href="/">VER OFERTA</a></div>
          </div>
        </div>

        <div className='big-image'>
          <img src={Portada} alt="imagen de portada" />
        </div>
      </main>

      <article className='about-service' id="sobre-nosotros">
        <h2>¿Cómo brindamos precios accesibles?</h2>
        <div className='about-one'>
          <div className='sub-about-one'>
            <h3>USAMOS SUBDOMINIOS</h3>
            <p>Un subdominio es una extensión de un dominio principal <br /> que permite crear más sitios web sin necesidad de <br /> adquirir un nuevo dominio.</p>
          </div>
          <p className='sub-domain'><strong>floreria.</strong>tusitio.com.pe</p>
        </div>
        <div className='about-two'>
          <h3>USAMOS UN HOSTING OPTIMIZADO</h3>
          <p>Es un servicio que brindamos nosotros <br /> exclusivamente, consiste en brindar un Hosting <br /> ajustado al tamaño de una página en concreto.</p>
        </div>
      </article>

      <section className='plan-details' id="planes">
        <h1>Nuestros planes</h1>
        <article className='details-container'>
          <div className='card-details-container'>
            <p className='detail-p-one'>Página Web para</p>
            <p className='detail-p-two'>Profesionales</p>
            <div className='plan-price'>
              <p className='plan-sun'>S/.</p>
              <p className='plan-mount'>99</p>  
            </div>
            <button className='select-plan'>Elegir Plan</button>
            <div>
              <ul className='detail-text'>
                <li>Página web de aterrizaje</li>
                <li>Variedad de diseños atractivos</li>
                <li>Hosting gratis por el 1er año</li>
                <li>Dominio compartido* gratis</li>
                <li>Seguridad SSL</li>
                <li>Seguridad DDOS</li>
                <li>Multiples secciones:</li>
                <li>Sobre tus habilidades</li>
                <li>Experiencia laboral</li>
                <li>Proyectos o portafolio</li>
                <li>Información de Contacto</li>
                <li>Preguntas Frecuentes</li>
                <li>Servicios brindados</li>
                <li>Puedes incluir fotos</li>
                <li>Puedes incluir vídeos</li>
                <li>Enlace directo a LinkedIn</li>
                <li>Enlace con tus redes sociales</li>
                <li>Botón para descargar tu CV</li>
                <li>Botón dinámico WhatsApp</li>
              </ul>
              <p>+ Correo corporativo x 1 año gratis</p>
            </div>
          </div>
          <div className='card-details-container'>
            <p className='detail-p-one'>Sitio Web para</p>
            <p className='detail-p-two'>Emprendedores</p>
            <div className='plan-price'>
              <p className='plan-sun'>S/.</p>
              <p className='plan-mount'>199</p>  
            </div>
            <button className='select-plan'>Elegir Plan</button>
            <div>
              <ul className='detail-text'>
                <li>Página web de aterrizaje</li>
                <li>Variedad de diseños atractivos</li>
                <li>Hosting gratis por el 1er año</li>
                <li>Dominio compartido* gratis</li>
                <li>Seguridad SSL</li>
                <li>Seguridad DDOS</li>
                <li>Multiples secciones:</li>
                <li>Sobre tus habilidades</li>
                <li>Experiencia laboral</li>
                <li>Proyectos o portafolio</li>
                <li>Información de Contacto</li>
                <li>Preguntas Frecuentes</li>
                <li>Servicios brindados</li>
                <li>Puedes incluir fotos</li>
                <li>Puedes incluir vídeos</li>
                <li>Enlace directo a LinkedIn</li>
                <li>Enlace con tus redes sociales</li>
                <li>Botón para descargar tu CV</li>
                <li>Botón dinámico WhatsApp</li>
              </ul>
              <p>+ Correo corporativo x 1 año gratis</p>
            </div>
          </div>
          <div className='card-details-container'>
            <p className='detail-p-one'>Página Web para</p>
            <p className='detail-p-two'>Empresas</p>
            <div className='plan-price'>
              <p className='plan-sun'>S/.</p>
              <p className='plan-mount'>299</p>  
            </div>
            <button className='select-plan'>Elegir Plan</button>
            <div>
              <ul className='detail-text'>
                <li>Página web de aterrizaje</li>
                <li>Variedad de diseños atractivos</li>
                <li>Hosting gratis por el 1er año</li>
                <li>Dominio compartido* gratis</li>
                <li>Seguridad SSL</li>
                <li>Seguridad DDOS</li>
                <li>Multiples secciones:</li>
                <li>Sobre tus habilidades</li>
                <li>Experiencia laboral</li>
                <li>Proyectos o portafolio</li>
                <li>Información de Contacto</li>
                <li>Preguntas Frecuentes</li>
                <li>Servicios brindados</li>
                <li>Puedes incluir fotos</li>
                <li>Puedes incluir vídeos</li>
                <li>Enlace directo a LinkedIn</li>
                <li>Enlace con tus redes sociales</li>
                <li>Botón para descargar tu CV</li>
                <li>Botón dinámico WhatsApp</li>
              </ul>
              <p>+ Correo corporativo x 1 año gratis</p>
            </div>
          </div>
        </article>
      </section>

      <article className='our-sides' id="nuestros-sitios">
        <h1 className='our-sides-title'>Nuestros sitios</h1>
        <div className='sides-cards-container'>
          <div className="side-example-card">
            <img src={Patas} alt="" />
            <p className='side-example-p'>Siempre Patas - Crematorio de Mascotas</p>
            <p className='side-example-link'>Visitar web: <strong>siemprepatas.pe</strong> </p>
          </div>
          <div className="side-example-card">
            <img src={Nadef} alt="" />
            <p className='side-example-p'>NADEF Studio - Agencia de contenido Audiovisual</p>
            <p className='side-example-link'>Visitar web: <strong>nadefstudio.tusitio.com.pe</strong></p>
          </div>
          <div className="side-example-card">
            <img src={Raquel} alt="" />
            <p className='side-example-p'>Stilo´s Raquel - Salón de Belleza</p>
            <p className='side-example-link'><strong>stilosraquel.tusitio.com.pe</strong></p>
          </div>
          <div className="side-example-card">
            <img src={Vilela} alt="" />
            <p className='side-example-p'>Keila Vilela - Interprete de Lengua de Señas Peruana</p>
            <p className='side-example-link'>Visitar web: <strong>keilalsp.tusitio.com.pe</strong></p>
          </div>
        </div>
      </article>

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
  )
}

export default App;
