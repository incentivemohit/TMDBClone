import { Box, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

export default function Tabs({ data, bgColor, textColor, setDataList }) {
  const [index, setIndex] = useState(0);

  const getData = async (id, url) => {
    setIndex(id);
    await axios
      .get(
        `https://api.themoviedb.org/3/${url}?api_key=${process.env.REACT_API_KEY}`
      )
      .then((res) => {
        setDataList(res.data.results);
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <>
      <Box className="flex h-fit items-center border border-1 rounded-2xl">
        {data && data.length !== 0
          ? data.map((item) => {
              return (
                <Box
                  key={item.id}
                  onClick={() => getData(item.id, item.url)}
                  className={`${
                    index === item.id ? `${bgColor} ${textColor}` : null
                  } cursor-pointer px-4 py-1 rounded-2xl`}
                >
                  <Typography fontSize={15}>{item.title}</Typography>
                </Box>
              );
            })
          : ""}
      </Box>
    </>
  );
}
