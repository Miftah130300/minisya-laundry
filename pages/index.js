import Head from "next/head";
import Image from "next/image";
import toko from "../public/foto/toko-crop.png";
import pickup from "../public/foto/pickup.jpg";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
const Navbar = dynamic(() => import("./components/navbar"), {ssr: false});
const Gmaps = dynamic(()=> import("./components/googlemaps"), {loading: ()=> {<p>Loading..</p>}, ssr: false})
const ButtonCyan = dynamic(() => import("./components/buttonCyan"), {ssr: false});
const ButtonWhite = dynamic(() => import("./components/buttonWhite"), {ssr: false});
const Footer = dynamic(()=> import("./components/footer"), {ssr: false})

export default function Home() {
  const [burgerClick, onBurgerClick] = useState(false)
  const toggled = () => {
    onBurgerClick(!burgerClick)
  }
  return (
    <div>
    {burgerClick &&
        <div className="flex flex-col fixed z-20 gap-5 text-20 items-center text-center bg-cyan-600 h-full w-[50vw] p-5">
            <h1 className="my-3 text-white text-[18px] font-semibold">Minisya Laundry</h1>
            <div className="p-3 flex flex-col gap-3 text-white">
            <Link href={'/'}>Halaman utama</Link>
            <Link href={'/price'}>Layanan & Harga</Link>
            <Link href={'/kontak'}>Kontak kami</Link>
            <ButtonWhite/>
            </div>
        </div>
    }
      <Head>
        <title>Laundry Antar-Jemput Pangandaran | Gratis Ongkir</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar toggled={toggled} />
        <div className="flex-grow h-full">
          <section className="w-full h-screen md:flex">
            <div className="md:w-screen">
              <div className="text-center md:text-start md:ml-12 mx-3 md:mx-0 mt-20 h-full flex flex-col items-center md:items-start gap-3 md:gap-5">
                <div>
                  <h1 className="text-[21px] md:text-[32px] font-semibold">
                    <span className="mb-3">
                      Pesan, <span className="text-cyan-600">jemput,</span> dan
                      antar.
                    </span>
                    <br />
                    <span className="text-cyan-600">
                      Solusi mudah
                    </span> dengan{" "}
                    <span className="text-cyan-600">harga pas.</span>
                  </h1>
                  <h3 className="mt-3">
                    Laundry antar-jemput untuk kamu yang gak mau repot
                  </h3>
                </div>
                <ButtonCyan/>
              </div>
            </div>
            <div className="flex justify-end w-screen mt-20 md:mt-0">
              <Image
                src={toko}
                width={511}
                height={505}
                className="object-cover"
                alt="toko minisya laundry"
              />
            </div>
          </section>
          <section className="w-full">
            <div className="flex justify-center items-center bg-cyan-600 mx-5 md:my-10 md:m-10 rounded-2xl h-[500px]">
              <div className="flex flex-col md:flex-row justify-between mx-5 md:mx-10 max-h-[400px] w-full">
                <div className="flex max-w-[520px] max-h-[328px] shadow rounded-2xl">
                  <Image
                    src={pickup}
                    className="object-cover shadow rounded-2xl"
                    alt="pickup gratis"
                  />
                </div>
                <div className="max-w-[520px] max-h-[328px] flex flex-col justify-between gap-10 md:gap-0">
                  <h2 className="text-[21px] md:text-[28px] text-white mt-3">
                    Kami melayani antar-jemput pakaian{" "}
                    <strong className="text-[#FBD46B]">tanpa ongkir</strong> di wilayah Pangandaran.
                  </h2>
                  <ButtonWhite/>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full md:min-h-screen flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center mx-0 md:mx-12 mt-20">
              <h2 className="text-[21px] md:text-[28px] font-semibold">
                Layanan Kami
              </h2>
              <div className="flex mt-[100px] flex-col md:flex-row gap-5">
                <div className="bg-white h-[419px] w-[283px] shadow-xl rounded-2xl flex flex-col">
                  <div className="flex justify-center items-center w-[80px] h-[35px] bg-white top-[60px] relative">
                    <h1 className="font-semibold">3 Hari</h1>
                  </div>
                  <div className="w-full h-full max-h-[200px] bg-[#8CCEEA] rounded-t-2xl flex flex-col justify-center items-center">
                    <div>
                      <div className="text-[28px] text-white font-semibold">
                        Rp7.000
                      </div>
                      <div className="text-[24px] text-white font-semibold text-end">
                        /kg
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center h-[200px]">
                    <ul>
                      <li>Gratis ongkir antar-jemput</li>
                      <li>Cuci dan strika</li>
                      <li>3 hari selesai (7 hari kerja)</li>
                      <li>Dikemas plastik</li>
                      <li>Gratis komplain</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-white h-[419px] w-[283px] shadow-xl rounded-2xl">
                  <div className="flex justify-center items-center w-[80px] h-[35px] bg-white top-[60px] relative">
                    <h1 className="font-semibold">2 Hari</h1>
                  </div>
                  <div className="w-full h-full max-h-[200px] bg-[#8CCEEA] rounded-t-2xl flex flex-col justify-center items-center">
                    <div>
                      <div className="text-[28px] text-white font-semibold">
                        Rp8.000
                      </div>
                      <div className="text-[24px] text-white font-semibold text-end">
                        /kg
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center h-[200px]">
                    <ul>
                      <li>Gratis ongkir antar-jemput</li>
                      <li>Cuci dan strika</li>
                      <li>2 hari selesai (7 hari kerja)</li>
                      <li>Dikemas plastik</li>
                      <li>Gratis komplain</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-white h-[419px] w-[283px] shadow-xl rounded-2xl">
                  <div className="flex justify-center items-center w-[80px] h-[35px] bg-white top-[60px] relative">
                    <h1 className="font-semibold">1 Hari</h1>
                  </div>
                  <div className="w-full h-full max-h-[200px] bg-[#8CCEEA] rounded-t-2xl flex flex-col justify-center items-center">
                    <ul>
                      <div className="text-[28px] text-white font-semibold">
                        Rp10.000
                      </div>
                      <div className="text-[24px] text-white font-semibold text-end">
                        /kg
                      </div>
                    </ul>
                  </div>
                  <div className="flex justify-center items-center h-[200px]">
                    <ul>
                      <li>Gratis ongkir antar-jemput</li>
                      <li>Cuci dan strika</li>
                      <li>24 jam selesai (7 hari kerja)</li>
                      <li>Dikemas plastik</li>
                      <li>Gratis komplain</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-white h-[419px] w-[283px] shadow-xl rounded-2xl">
                  <div className="flex justify-center items-center w-[150px] h-[35px] bg-white top-[60px] relative">
                    <h1 className="font-semibold">Express 6 jam</h1>
                  </div>
                  <div className="w-full h-full max-h-[200px] bg-[#FBD46B] rounded-t-2xl flex flex-col justify-center items-center">
                    <div>
                      <div className="text-[28px] text-white font-semibold">
                        Rp15.000
                      </div>
                      <div className="text-[24px] text-white font-semibold text-end">
                        /kg
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center h-[200px]">
                    <ul>
                      <li>Gratis ongkir antar-jemput</li>
                      <li>Cuci dan strika</li>
                      <li>6 jam selesai (7 hari kerja)</li>
                      <li>Dikemas plastik</li>
                      <li>Gratis komplain</li>
                    </ul>
                  </div>
                </div>
              </div>
              <Link href="/price" className="text-cyan-600 mt-[100px]">Lihat lebih banyak</Link>
            </div>
          </section>
          <section className="w-full md:min-h-screen flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center mt-10">
              <div
                id="judul"
                className="flex flex-col justify-center items-center px-10 mx-auto text-center max-w-[600px] w-full"
              >
                <h2 className="text-[21px] md:text-[28px] font-semibold">
                  Cara Memesan
                </h2>
                <h3>
                  Kamu bisa langsung datang ke outlet kami, atau pesan secara
                  online dan gratis <i>pickup</i> dengan langkah berikut:
                </h3>
              </div>
              <div
                id="timeline"
                className="flex flex-col md:flex-row mt-[100px] gap-10 mx-12"
              >
                <div
                  id="step-1"
                  className="w-full max-w-[300px] h-full max-h-[500px] flex flex-col justify-center items-center"
                >
                  <div className="flex justify-center items-center h-[70px] w-[70px] rounded-full bg-cyan-600">
                    <div className="text-white font-semibold">1</div>
                  </div>
                  <div className="flex justify-center items-center mx-auto text-center w-full max-w-[200px] mt-5">
                    <div>Pesan via WhatsApp melalui tombol di bawah</div>
                  </div>
                </div>
                <div
                  id="step-2"
                  className="w-full max-w-[300px] h-full max-h-[500px] flex flex-col justify-center items-center"
                >
                  <div className="flex justify-center items-center h-[70px] w-[70px] rounded-full bg-cyan-600">
                    <div className="text-white font-semibold">2</div>
                  </div>
                  <div className="flex justify-center items-center mx-auto text-center w-full max-w-[200px] mt-5">
                    <div>Pilih layanan dan sertakan alamat pickup</div>
                  </div>
                </div>
                <div
                  id="step-3"
                  className="w-full max-w-[300px] h-full max-h-[500px] flex flex-col justify-center items-center"
                >
                  <div className="flex justify-center items-center h-[70px] w-[70px] rounded-full bg-cyan-600">
                    <div className="text-white font-semibold">3</div>
                  </div>
                  <div className="flex justify-center items-center mx-auto text-center w-full max-w-[200px] mt-5">
                    <div>Tim kami akan menjemput sesuai alamat</div>
                  </div>
                </div>
                <div
                  id="step-4"
                  className="w-full max-w-[300px] h-full max-h-[500px] flex flex-col justify-center items-center"
                >
                  <div className="flex justify-center items-center h-[70px] w-[70px] rounded-full bg-cyan-600">
                    <div className="text-white font-semibold">4</div>
                  </div>
                  <div className="flex justify-center items-center mx-auto text-center w-full max-w-[200px] mt-5">
                    <div>Laundry segera diproses sesuai pesanan</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full md:min-h-screen mb-12">
            <div className="flex flex-col justify-center items-center my-[50px]">
              <h2 className="text-[21px] md:text-[28px] font-semibold">
                Alamat Kami
              </h2>
            </div>
            <Gmaps/>
          </section>
        </div>
      </main>
      <Footer/>
    </div>
  );
}
