import FeaturedServices from "./Pages/Home/FeaturedServices/FeaturedServices";
import Hero from "./Pages/Home/Hero/Hero";
import Integration from "./Pages/Home/Integration/Integration";
import LatestNews from "./Pages/Home/LatestNews/LatestNews";
import Reports from "./Pages/Home/Reports/Reports";
import Subscribe from "./Pages/Home/Subscribe/Subscribe";
import Testimonial from "./Pages/Home/Testimonial/Testimonial";
import WorkProcess from "./Pages/Home/WorkProcess/WorkProcess";

export default function Home() {
  return (
    <main className="">
        {/* <Hero></Hero>
        <Subscribe></Subscribe>
        <Integration></Integration>
        <LatestNews></LatestNews>
        <Testimonial></Testimonial> */}
        {/* <WorkProcess></WorkProcess> */}
        {/* <Reports></Reports> */}
        <FeaturedServices></FeaturedServices>
    </main>
  )
}
