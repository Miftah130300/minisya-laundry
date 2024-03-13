import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("./components/navbar"), {ssr: false});
const Footer = dynamic(()=> import("./components/footer"), {ssr: false})

export default function Kontak (){
    return(
        <>
        <Navbar/>
            <section className="w-full md:min-h-screen flex justify-center">
                    <h1 className="text-[21px] md:text-[28px] font-semibold">Kontak Kami</h1>
            </section>
        <Footer/>
        </>
    )
}
