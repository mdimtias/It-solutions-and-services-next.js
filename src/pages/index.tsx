import Head from 'next/head'
import Navbar from '../component/Home/Navbar/Navbar'
import Hero from "../component/Home/Hero/Hero";
import BestServices from "../component/Home/BestServices/BestServices";
import FeaturedServices from "../component/Home/FeaturedServices/FeaturedServices";
import FeaturedTechnology from "../component/Home/FeaturedTechnology/FeaturedTechnology";
import Footer from "../component/Home/Footer/Footer";
import Integration from "../component/Home/Integration/Integration";
import LatestNews from "../component/Home/LatestNews/LatestNews";
import Reports from "../component/Home/Reports/Reports";
import Subscribe from "../component/Home/Subscribe/Subscribe";
import Testimonial from "../component/Home/Testimonial/Testimonial";
import TopBrand from "../component/Home/TopBrand/TopBrand";
import WorkProcess from "../component/Home/WorkProcess/WorkProcess";

export default function Home() {
  return (
    <>
      <Head>
        <title>SoftBik - It Solution and Services</title>
        <meta name="description" content="SoftBik - It Solution and Services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className="">
        <Navbar></Navbar>
        <Hero></Hero>
        <TopBrand></TopBrand>
        <BestServices></BestServices>
        <FeaturedServices></FeaturedServices>
        <FeaturedTechnology></FeaturedTechnology>
        <Reports></Reports>
        <WorkProcess></WorkProcess> 
        <Testimonial></Testimonial>
        <Subscribe></Subscribe>
        <Integration></Integration>
        <LatestNews></LatestNews> 
        <Footer></Footer>
      </main>
    </>
  )
}
