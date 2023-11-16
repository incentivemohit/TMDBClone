import React from "react";
import Main from "../details/MoviePage/Main";
import { Box, Typography } from "@mui/material";

export default function SearchContainer({ search }) {
  return (
    <>
      <Box className="flex flex-col gap-4 pt-1">
        <Typography
          fontSize={20}
          className=" text-center bg-black text-white py-2"
        >
          Search Results ({search.length})
        </Typography>
        <Main dataList={search} />
      </Box>
    </>
  );
}
