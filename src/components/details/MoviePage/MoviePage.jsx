import { Box } from "@mui/material";
import React from "react";
import Main from "./Main";
import Sidebar from "./Sidebar";

function MoviePage({dataList}) {
  return (
    <>
      <Box className="flex gap-2 px-5">
        <Sidebar/>
        <Main dataList={dataList}/>
      </Box>
    </>
  );
}

export default MoviePage;
