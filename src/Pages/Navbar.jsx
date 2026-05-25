import React from 'react'
import '../Style/Navbar.css'
import logoImg from '../Assets/new-logo192.png'

function Navbar() {
  return (
    <div className='navbar-container'>
        <div className="nc-left">
            <div className="nc-logo">
                <img src={logoImg} alt="" />
            </div>
        </div>

        <div className="nc-center">
            <a href="#about"> About</a>
            <a href="#visi"> Visi & Misi</a>
            <a href="#program">Program</a>
            <a href="#dokumentasi">Documentasi</a>
            <a href="">Struktur</a>
        </div>

        <div className="nc-right">
            <a 
                href="https://wa.me/6281115599002"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button> More About Yayasan</button>
            </a>
            
        </div>
    </div>
  )
}

export default Navbar