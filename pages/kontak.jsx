import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("./components/navbar"), {ssr: false});
const Footer = dynamic(()=> import("./components/footer"), {ssr: false})

export default function Kontak (){
    return(
        <>
        <Navbar/>
            <section className="w-full md:min-h-screen flex justify-center">
                <div className="flex flex-col justify-center mx-0 md:mx-12 my-20 border border-black">
                    <h1 className="text-[21px] md:text-[28px] font-semibold">Kontak Kami</h1>
                    <div className="flex">
                        <div className="w-[300px] h-[200px] border border-black"></div>
                        <div></div>
                    </div>
                </div>
            </section>
        <Footer/>
        </>
    )
}