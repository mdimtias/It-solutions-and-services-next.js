import Hero from "./Pages/Home/Hero/Hero";
import Integration from "./Pages/Home/Integration/Integration";
import LatestNews from "./Pages/Home/LatestNews/LatestNews";
import Subscribe from "./Pages/Home/Subscribe/Subscribe";
import Testimonial from "./Pages/Home/Testimonial/Testimonial";

export default function Home() {
  return (
    <main className="">
        {/* <Hero></Hero>
        <Subscribe></Subscribe>
        <Integration></Integration> */}
        <LatestNews></LatestNews>
        <Testimonial></Testimonial>
    </main>
  )
}
