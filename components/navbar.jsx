import Hamburger from 'hamburger-react'
import { useEffect, useState } from "react";
import { useMediaQuery } from 'react-responsive';
import dynamic from 'next/dynamic';

const ButtonWhite = dynamic(() => import('../components/buttonWhite'), {
  ssr: false,
});

export default function Navbar(){
  const [isOpen, setOpen] = useState(false)
  const isMobile = useMediaQuery({ maxWidth: 950 });
  useEffect(() => {
    // Importing Hamburger component dynamically to avoid SSR
    const Hamburger = require('hamburger-react').default;
  }, []);

    return(
    <nav className="py-5 bg-black-300 w-full h-full shadow-md">
      <div className="container w-full flex justify-between items-center">
        {/* Logo */}
        <div className="text-cyan-600 font-semibold text-[20px] ml-8 md:ml-12">Minisya Laundry</div>

        {/* Menu Items */}
        {isMobile? 
        (
          <div className="flex mr-8 md:mr-12">
            {Hamburger && <Hamburger toggled={isOpen} toggle={setOpen} direction="right" />}
          </div>
        ):
        (<div className="flex gap-5 text-20 items-center mr-8 md:mr-12">
          <a href="#" className="hover:text-cyan-600">Halaman utama</a>
          <a href="#" className="hover:text-cyan-600">Layanan & Harga</a>
          <a href="#" className="hover:text-cyan-600">Kontak kami</a>
          <a href='https://wa.me/6282120318979' target='_blank' rel="noopener noreferrer"><ButtonWhite /></a>
        </div>)
        }
      </div>
    </nav>
    )
}