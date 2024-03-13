import Link from "next/link";
import { PhoneIcon } from "@chakra-ui/icons";
import dynamic from "next/dynamic";
import { useState } from "react";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = dynamic(() => import("./components/navbar"), { ssr: false });
const Footer = dynamic(() => import("./components/footer"), { ssr: false });
const ButtonWhite = dynamic(() => import("./components/buttonWhite"), { ssr: false });

export default function Kontak() {
  const [burger, setBurger] = useState(false);
  const toggled = () => {
    setBurger(!burger);
  };

  return (
    <>
      {burger && (
        <div className="flex flex-col fixed z-20 gap-5 text-20 items-center text-center bg-cyan-600 h-full w-[50vw] p-5">
          <h1 className="my-3 text-white text-[18px] font-semibold">Minisya Laundry</h1>
          <div className="p-3 flex flex-col gap-3 text-white">
            <Link href={"/"}>Halaman utama</Link>
            <Link href={"/price"}>Layanan & Harga</Link>
            <Link href={"/kontak"}>Kontak kami</Link>
            <ButtonWhite />
          </div>
        </div>
      )}
      <Navbar toggled={toggled} />
      <section className="w-full md:min-h-screen flex justify-center">
        <div className="flex flex-col gap-10 text-center justify-center mx-0 md:mx-12 my-20">
          <h1 className="text-[21px] md:text-[28px] font-semibold">Kontak Kami</h1>
          <div className="flex lg:flex-row flex-col gap-5 h-screen mx-auto">
            <div className="w-[350px] h-[350px] border border-black rounded-xl flex justify-center items-center">
              <div className="flex flex-col text-start gap-3 w-[250px]">
                <PhoneIcon w={45} h={45} color="#0891B2" />
                <h1 className="text-cyan-600 font-bold">+62 821-2031-8979 (WA)</h1>
                <p>Senin - Minggu | 07.00 - 18.00 WIB</p>
              </div>
            </div>
            <div className="w-[350px] h-[350px] border border-black rounded-xl flex justify-center items-center">
                <div className="flex flex-col text-start gap-3 w-[250px]">
                    <FontAwesomeIcon icon={faLocationDot} style={{ color: "#0891B2", width: 45, height: 45 }} />
                    <h1 className="text-cyan-600 font-bold">Minisya Laundry</h1>
                    <p>Jl. Raya Cijulang, Cikembulan, Kec. Sidamulih, Kab. Pangandaran, Jawa Barat 46365</p>
                </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
