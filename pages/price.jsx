import dynamic from "next/dynamic";
import Link from "next/link";
import { useState, useEffect } from "react";
const Navbar = dynamic(() => import("./components/navbar"), {ssr: false});
const Footer = dynamic(()=> import("./components/footer"), {ssr: false})
const ButtonWhite = dynamic(() => import("./components/buttonWhite"), {ssr: false});

export default function price(){
    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
        setIsClient(true)
    }, [])

    const [open, setOpen] = useState(false)
    const toggled = () => {
        setOpen(!open)
    }
    return(
    <>
    {open &&
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
    <Navbar toggled={toggled}/>
    <section className="w-full md:min-h-screen flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center mx-0 md:mx-12 my-20">
            <h1 className="text-[21px] md:text-[28px] font-semibold">
                Harga Kiloan
            </h1>
                <div className="flex flex-col md:flex-row gap-5">
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
            <h2 className="text-[21px] md:text-[28px] font-semibold mt-20 mb-6">
                Harga Satuan
            </h2>
            <div className="flex">
                {isClient ? (
                    <table className="text-center min-w-[300px] lg:min-w-[500px] shadow-md">
                        <thead>
                            <tr className="bg-[#8CCEEA] h-[80px] rounded-2xl text-white">
                                <th>Daftar barang</th>
                                <th>Harga</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Hanya setrika</td>
                                <td>Rp4.000/kg</td>
                            </tr>
                            <tr className="blue-table">
                                <td>Sepatu</td>
                                <td>Rp10.000/kg</td>
                            </tr>
                            <tr>
                                <td>Karpet</td>
                                <td>Rp15.000/m2</td>
                            </tr>
                            <tr className="blue-table">
                                <td>Sprei</td>
                                <td>Rp10.000/set</td>
                            </tr>
                            <tr>
                                <td>Bed cover</td>
                                <td>Rp20.000/set</td>
                            </tr>
                            <tr className="blue-table">
                                <td>Boneka</td>
                                <td>Rp20.000/pcs</td>
                            </tr>
                            <tr>
                                <td>Selimut</td>
                                <td>Rp15.000/set</td>
                            </tr>
                        </tbody>
                    </table>
                ) : (
                    <p>This is rendered component on server</p>
                )}
            </div>
        </div>
    </section>
    <Footer/>
    </>
    )
}