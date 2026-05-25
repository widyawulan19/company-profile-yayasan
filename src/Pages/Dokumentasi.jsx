import React from 'react'
import "../Style/Dokumentasi.css"

//image
import dok1 from '../Assets/dok1.jpeg'
import dok2 from '../Assets/dok2.jpeg'
import dok3 from '../Assets/dok3.jpeg' //panjang
import dok4 from '../Assets/dok4.jpeg'
import dok5 from '../Assets/dok5.jpeg'
import dok6 from '../Assets/dok6.jpeg'
import dok7 from '../Assets/dok7.jpeg' //panjang

function Dokumentasi() {

  return (
    <div className='dokumentasi-container' id='dokumentasi'>
        <div className="dc-title">
            <span>DOKUMENTASI</span>
            <h2>Galery Kegiatan dan Program</h2>
            <hr className='line'/>
            <p>
                Dokumentasi berbagai program, kegiatan sosial, dan kolaborasi yang telah kami jalankan sebagai bentuk komitmen dalam memberdayakan masyarakat secara berkelanjutan.
            </p>
        </div>

        {/* <div className="dok-gallery">
            <div className="doc1">
                <div className="left">
                    <img src={dok7} alt="documen 7" />
                    <img src={dok3} alt="dokumen pic" />
                </div>
                <div className="right">
                    <img src={dok1} alt="dokumen pic" />
                    <img src={dok2} alt="dokumen pic" />
                </div>
            </div>
        </div> */}
    </div>
  )

}

export default Dokumentasi