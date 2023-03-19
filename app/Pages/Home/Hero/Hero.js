import Image from "next/image";
import Link from "next/link";
import RotoShow from "./../../../assets/Client/client-1.svg";
import Waves from "./../../../assets/Client/client-2.svg";
import HeroImage from "./../../../assets/Hero/hero-image.svg";
import HeroBottomImage from "./../../../assets/Hero/hero-bottom-image.svg";
import Animated from "./../../../assets/Hero/animated-screen-2.svg";
const Hero = () => {
    return (
        <section className="hero-section py-12 lg:py-24 min-h-screen bg-[#111827] relative">
            <Image src={HeroBottomImage} alt="It Consultancy" className="absolute bottom-0"></Image>
            <div className="container mx-auto px-5">
                {/* <div className="flex items-center justify-between flex-col md:flex-row"> */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <div className="hero-section-content xl:pr-10">
                        <h5 className="text-yellow-400 text-md font-semibold">#1 Software Company In World</h5>
                        <h1 className="text-white font-extrabold text-5xl py-3">Advanced Feature to Grow Your Business</h1>
                        <p className="text-lg text-[#d9d9d9]">Proactively coordinate quality quality vectors vis-a-vis supply chains engage client-centric web services.</p>
                        <div className="hero-action-button flex gap-5 py-8">
                            <Link href="/"><button className="text-white font-bold bg-[#175cff] hover:bg-[#0044E3] text-lg py-3 px-8">Request For Demo</button></Link>
                            <Link href="/"><button className="text-white font-bold bg-[#111827] hover:bg-white hover:text-black transition-all text-lg py-3 px-8 border border-gray-400">Learn More</button></Link>
                        </div>
                        <div className="our-top-client">
                            <h6 className="text-gray-400 text-base font-bold">Our Top Client</h6>
                            <div className="flex gap-2 flex-wrap">
                                <Image src={RotoShow} alt="RotoShow"></Image>
                                <Image src={Waves} alt="Waves"></Image>
                                <Image src={RotoShow} alt="RotoShow"></Image>
                            </div>
                        </div>
                    </div>
                    <div className="hero-section-mage relative pt-5 md:pt-0 flex items-end">
                        <Image className="absolute right-0 top-16 xl:top-0" src={Animated} alt="Software Development"></Image>
                        <Image className="relative z-10" src={HeroImage} alt="Software Development"></Image>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;