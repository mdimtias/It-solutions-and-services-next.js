import Image from "next/image";
import ClientLogo1 from "./../../../assets/ClientLogo/client-logo-1.svg";
import ClientLogo2 from "./../../../assets/ClientLogo/client-logo-2.svg";
import ClientLogo3 from "./../../../assets/ClientLogo/client-logo-3.svg";
import ClientLogo4 from "./../../../assets/ClientLogo/client-logo-4.svg";
import ClientLogo5 from "./../../../assets/ClientLogo/client-logo-5.svg";
import ClientLogo6 from "./../../../assets/ClientLogo/client-logo-6.svg";
import ClientLogo7 from "./../../../assets/ClientLogo/client-logo-7.svg";
import ClientLogo8 from "./../../../assets/ClientLogo/client-logo-8.svg";


const TopBrand = () => {
    return (
       <section className="top-brand py-10 lg:py-20 bg-white">
            <div className="container mx-auto lg:px-20 px-5">
            <div className="flex flex-wrap gap-10 justify-center items-center">
                <Image src={ClientLogo1} alt=""></Image>
                <Image src={ClientLogo2} alt=""></Image>
                <Image src={ClientLogo3} alt=""></Image>
                <Image src={ClientLogo4} alt=""></Image>
                <Image src={ClientLogo5} alt=""></Image>
                <Image src={ClientLogo6} alt=""></Image>
                <Image src={ClientLogo7} alt=""></Image>
                <Image src={ClientLogo8} alt=""></Image>
            </div>
            <h2 className="text-lg font-bold text-black mt-8 text-center">Trusted More than 25,00+ Companies Around the World</h2>
            </div>
       </section>
    );
};

export default TopBrand;