import { useEffect, useState } from "react";
import { useMediaQuery } from 'react-responsive';
import dynamic from 'next/dynamic';
const ButtonWhite = dynamic(() => import("../components/buttonWhite"), {ssr: false});

const Hamburger = dynamic(() => import('hamburger-react'), {
  ssr: false,
});

export default function Navbar(){
  const [isOpen, setOpen] = useState(false)
  const isMobile = useMediaQuery({ maxWidth: 950 });

    return(
    <nav className="py-5 bg-black-300 w-full h-full shadow-md flex items-center justify-center">
      <div className="container w-full flex justify-between items-center mx-3 md:mx-12">
        <div className="text-cyan-600 font-semibold text-[20px]">Minisya Laundry</div>
        {isMobile? 
            (
              <div className="flex justify-center items-center">
              {Hamburger && <Hamburger className="flex" toggled={isOpen} toggle={setOpen} direction="right" />}
              </div>
            ):
            (<div className="flex gap-5 text-20 items-center text-center">
              <a href="#" className="hover:text-cyan-600">Halaman utama</a>
              <a href="#" className="hover:text-cyan-600">Layanan & Harga</a>
              <a href="#" className="hover:text-cyan-600">Kontak kami</a>
              <ButtonWhite/>
            </div>)
        }
      </div>
    </nav>
    )
}