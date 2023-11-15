import React,{useEffect, useState} from "react";
import { Box, Typography } from "@mui/material";
import "../../../index.css";
import Tabs from "../../utility/Tabs";
import CardsList from "../../utility/CardsList";
import axios from "axios";

const tabData = [
  {
    id: 0,
    title: "Movies",
    url: "/movie/top_rated",
  },
  {
    id: 1,
    title: "On TV",
    url: "/tv/top_rated",
  },
];

function FreeToWatch() {
  const [dataList, setDataList] = useState([]);

  const getData = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}`
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
      <Box className=" pt-7">
        <Box className="flex gap-4 py-2 pl-12">
          <Typography variant="h6" fontWeight={"700"}>
            Free To Watch
          </Typography>
          <Tabs
            data={tabData}
            setDataList={setDataList}
            bgColor={"bg-black"}
            textColor={"text-white"}
          />
        </Box>
        <div id="carousel" className="overflow-auto pt-3 pb-8">
          <CardsList dataList={dataList} />
        </div>
      </Box>
    </>
  );
}

export default FreeToWatch;
