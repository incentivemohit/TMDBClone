import React,{useState} from "react";
import MoviePage from "../components/details/MoviePage/MoviePage";
import { Box } from "@mui/material";
import Heading from "../components/details/MoviePage/Heading";
import CarouselDataFetching from "../components/utility/CarouselDataFetching";

function Popular() {
  const [dataList,setDataList ] = useState([])

  CarouselDataFetching("movie/popular",setDataList);

  return (
    <Box className=" pt-20 flex flex-col ">
      <Box className="pl-12 pt-2 pb-5">
        <Heading heading="Popular" />
      </Box>
      <MoviePage dataList={dataList} />
    </Box>
  );
}

export default Popular;
