import HomeNav from "../components/Navbar/HomeNav";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import HeroImg from "../assets/images/accomodation/hero.png"
import React from "react";

const AccomodationCartpage: React.FC = () => {
  // Your component logic here
  return (
    <>
    <HomeNav />
    <Hero className="homeHero" heroImage={HeroImg} textClass="heroText" title="Find your accommodation" text="Lorem ipsum dolor sit amet consectetur. Amet dignissim et enim id ipsum leo amet. Pellentesque l
obortis ultrices molestie imperdiet lectus at. Turpis morbi adipiscing quis pulvinar. Ullamcorper pellentesque sc
elerisque quis porttitor ipsum eget consectetur. Arcu tincidunt facilisi orci nulla turpis egestas tellus pulvinar elit. Vel iaculis s
ed vivamus dignissim et cras." />
    
    <Footer />
    </>
)};

export default AccomodationCartpage;

export {}; 