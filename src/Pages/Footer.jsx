import React from 'react'
import '../Style/Footer.css'
import logoImg from '../Assets/logo-bg.png'
import { GoClockFill } from "react-icons/go";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { MdOutlineAttachEmail } from "react-icons/md";


function Footer() {
  return (
    <div className='footer-container'>
        <div className="ft">
            <div className="ft-left">
                <div className="left-img">
                     <img src={logoImg} alt="Logo image" />
                </div>
                <div className="fl-text">
                    {/* <p> 08.00 - 17.00</p> */}
                    <p><IoLocation/> Jalan Damai 47, Mampang Kel., Pancoran Mas, Depok, 16433, Indonesia</p>

                </div>
            </div>

            <div className="ft-center">
                <div className="box-center">
                    <span>QUICK LINKS</span>
                    <div className="list-box">
                        <a href="">About</a>
                        <a href="">Visi Misi</a>
                        <a href="">Program</a>
                        <a href="">Dokumentasi</a>
                    </div>
                </div>
                <div className="box-center">
                   
                </div>
            </div>
            <div className="ft-right">
                <span>CONTACT US</span>
                <div className="text">
                    <p><IoLogoWhatsapp/> +6281115599002</p>
                    <p><MdOutlineAttachEmail/> mail@gmail.com</p>
                </div>
                
            </div>
        </div>

        <div className="fb">
            <p>© 2026 Yayasan Sarasvati Wedatama Semesta. All rights reserved. luminous.id</p>
        </div>
    </div>
  )
}

export default Footer