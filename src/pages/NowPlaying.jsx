import React, {  useState } from "react";
import { Box } from "@mui/material";
import MoviePage from "../components/details/MoviePage/MoviePage";
import Heading from "../components/details/MoviePage/Heading";
import CarouselDataFetching from "../components/utility/CarouselDataFetching";

function NowPlaying() {
  const [dataList,setDataList ] = useState([])

  CarouselDataFetching("movie/now_playing",setDataList);

  return (
    <Box className=" pt-20 flex flex-col ">
      <Box className="pl-12 pt-2 pb-5">
        <Heading heading="Now Playing" />
      </Box>
      <MoviePage dataList={dataList} />
    </Box>
  );
}

export default NowPlaying;
