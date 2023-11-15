import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import "../../../index.css";
import axios from "axios";
import CardsList from '../../utility/CardsList'
import Tabs from "../../utility/Tabs";

const tabData = [
  {
    id: 0,
    title: "Today",
    url: "trending/movie/day",
  },
  {
    id: 1,
    title: "This Week",
    url: "trending/movie/week",
  },
];

function TrendingCarousel() {
  const [dataList, setDataList] = useState([]);

  const getData = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        setDataList(res.data.results);
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Box className=" flex flex-col gap-2 ">
        <Box className="flex items-center gap-4 pt-2 pl-12">
          <Typography variant="h6" fontWeight={"700"}>
            Trending 
          </Typography>
          <Tabs data={tabData} bgColor={"bg-black"} textColor={"text-white"} setDataList={setDataList}/>
        </Box>
        <div
          id="carousel"
          className="overflow-auto"
          style={{
            backgroundImage: `url("https://www.pngitem.com/pimgs/m/12-126268_sound-pixel-wave-transparent-sound-wave-png-png.png")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
        <CardsList dataList={dataList} />
        </div>
      </Box>
    </>
  );
}

export default TrendingCarousel;
