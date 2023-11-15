import Banner from "../Banner/Banner";
import FreeToWatch from "../Carousel/FreeToWatch/FreeToWatch";
import LatestTrailers from "../Carousel/LatestTrailers/LatestTrailers";
import TrendingCarousel from "../Carousel/TrendingCarousel/TrendingCarousel";
import Popular from "../Carousel/WhatPopular/Popular";

function Home() {
  return (
    <>
      <Banner />
      <TrendingCarousel />
      <LatestTrailers />
      <Popular />
      <FreeToWatch />
    </>
  );
}

export default Home;
