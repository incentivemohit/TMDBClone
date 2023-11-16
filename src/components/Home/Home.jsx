import { useContext, useEffect } from "react";
import Banner from "../Banner/Banner";
import FreeToWatch from "../Carousel/FreeToWatch/FreeToWatch";
import LatestTrailers from "../Carousel/LatestTrailers/LatestTrailers";
import TrendingCarousel from "../Carousel/TrendingCarousel/TrendingCarousel";
import Popular from "../Carousel/WhatPopular/Popular";
import { Context } from "../../Context";
import SearchContainer from "../Search/SearchContainer";

function Home() {
  const { search } = useContext(Context);

  useEffect(() => {}, [search]);

  return (
    <>
      <Banner />
      {search && search.length !== 0 ? (
        <SearchContainer search={search} />
      ) : (
        <>
          <TrendingCarousel />
          <LatestTrailers />
          <Popular />
          <FreeToWatch />
        </>
      )}
    </>
  );
}

export default Home;
