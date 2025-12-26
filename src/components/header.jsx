import Logo from "../assets/imagenes/LOGO.svg";
import "../styles/header.css";
import { useState } from "react";

export default function Header() {
    const [open, setOpen] = useState(false);

    function openMobile(value) {
        console.log(value);
        if (window.innerWidth > 500) return;
        setOpen(value);
        let body = document.querySelector('body');
        if (value) {
            body.classList.add('prevent-scroll');
        } else {
            body.classList.remove('prevent-scroll');
        }
    };


    return (
        <>
            <header className='relative-header'>
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
                <div className="menu" onClick={() => openMobile(true)}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

            </header>
            <div className={`shadow ${open ? "" : "toLeft"}`}>
            </div>
            <section className={`menu-navbar-mobile ${open ? "" : "toLeft"}`}>
                <div className="close-menu-mobile" onClick={() => { openMobile(false) }}>
                    <div className="left"></div>
                    <div className="right"></div>
                </div>
                <nav className='links-mobile'>
                    <li><a onClick={() => { openMobile(false) }} href="#planes">Plan</a></li>
                    <span className="divisor-menu-mobile"></span>
                    <li><a onClick={() => { openMobile(false) }} href="#sobre-nosotros">Sobre nosotros</a></li>
                    <span className="divisor-menu-mobile"></span>
                    <li><a onClick={() => { openMobile(false) }} href="#nuestros-sitios">Nuestros sitios</a></li>
                    <span className="divisor-menu-mobile"></span>
                    <li className='link-black' ><a onClick={() => { openMobile(false) }} href="#planes">Empieza ahora</a></li>
                </nav>
            </section>
        </>
    )
};