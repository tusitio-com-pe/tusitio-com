import {useEffect} from "react";
import Header from "./components/header.jsx";
import Footer from "./components/footer";
import smoothScrollTo from "./utils/transition.js";
import './App.css';
import Portada from "./assets/imagenes/hero.webp";
import Patas from "./assets/imagenes/SIEMPREPATAS.PE.png";
import Nadef from "./assets/imagenes/NADEFSTUDIO.png";
import Raquel from "./assets/imagenes/STILOSRAQUEL.png";
import Vilela from "./assets/imagenes/KEILAVILELA.png";
import WhatsappButton from "./components/whatsappbutton.jsx";

function App() {

  useEffect(() => {
    const start = window.pageYOffset;
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          smoothScrollTo(start, target, 1000);
        }
      });
    });
  }, []);

  let detailsCard = [
    "Página web de aterrizaje",
    "Variedad de diseños atractivos",
    "Hosting gratis por el 1er año",
    "Dominio compartido* gratis",
    "Seguridad SSL",
    "Seguridad DDOS",
    "Multiples secciones:",
    "Sobre tus habilidades",
    "Experiencia laboral",
    "Proyectos o portafolio",
    "Información de Contacto",
    "Preguntas Frecuentes",
    "Servicios brindados",
    "Puedes incluir fotos",
    "Puedes incluir vídeos",
    "Enlace directo a LinkedIn",
    "Enlace con tus redes sociales",
    "Botón para descargar tu CV",
    "Botón dinámico WhatsApp"
  ];

  const pagesItems = [
    {
      pathImage: Patas,
      description: "Siempre Patas - Crematorio de Mascotas",
      link: "https://siemprepatas.pe",
    },
    {
      pathImage: Nadef,
      description: "NADEF Studio - Agencia de contenido Audiovisual",
      link: "nadefstudio.tusitio.com.pe",
    },
    {
      pathImage: Raquel,
      description: "Stilo´s Raquel - Salón de Belleza",
      link: "stilosraquel.tusitio.com.pe",
    },
    {
      pathImage: Vilela,
      description: "Keila Vilela - Interprete de Lengua de Señas Peruana",
      link: "keilalsp.tusitio.com.pe",
    }
  ];


  return (
    <>
      <Header />
      <main className='firts-container'>
        <div className='sub_container'>
          <div className='description-container'>
            <p className='text_one'>OFERTA POR LANZAMIENTO</p>
            <p className='text_two'>¡AHORA TODOS</p>
            <p className='text_three'>LOS EMPRENDEDORES</p>
            <p className='text_four'>PUEDEN TENER SU SITIO WEB!</p>
            <p className='text_five'>+ 1 CORREO CORPORATIVO GRATIS</p>
            <div className='mini-description-container'>
              <p>Desde</p>
              <p className='text_six'>S/.</p>
              <p className='text_seven'>99</p>
              <p>Pago Único</p>
            </div>
            <div className='pseudo-button'><a href="#planes">VER OFERTA</a></div>
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
            <p>Un subdominio es una extensión de un dominio principal que permite crear más sitios web sin necesidad de adquirir un nuevo dominio.</p>
          </div>
          <p className='sub-domain'><strong>floreria.</strong>tusitio.com.pe</p>
        </div>

        <div className='about-two'>
          <h3>USAMOS UN HOSTING OPTIMIZADO</h3>
          <p>Es un servicio que brindamos nosotros exclusivamente, consiste en brindar un Hosting ajustado al tamaño de una página en concreto.</p>
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
            <div className="list-details-plan-container">
              <ul className='detail-text'>
                {detailsCard.map((e) => { return <li>{e}</li> })}
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
            <div className="list-details-plan-container">
              <ul className='detail-text'>
                {detailsCard.map((e) => { return <li>{e}</li> })}
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
            <div className="list-details-plan-container">
              <ul className='detail-text'>
                {detailsCard.map((e) => { return <li>{e}</li> })}
              </ul>
              <p>+ Correo corporativo x 1 año gratis</p>
            </div>
          </div>
        </article>
      </section>

      <article className='our-sides' id="nuestros-sitios">
        <h1 className='our-sides-title'>Nuestros sitios</h1>
        <div className='sides-cards-container'>

          {pagesItems.map((e) => {
            return (
              <div key={e.description} className="side-example-card">
                <img src={e.pathImage} alt="" />
                <p className='side-example-p'>{e.description}</p>
                <p className='side-example-link'>Visitar web: <strong>{e.link}</strong> </p>
              </div>
            )
          })}

        </div>
      </article>
      <WhatsappButton/>
      <Footer />
    </>
  )
}

export default App;
