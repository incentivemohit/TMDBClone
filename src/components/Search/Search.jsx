import { Box, Stack, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../Context";
import axios from "axios";

export default function Search() {
  const { setSearch } = useContext(Context);
  const [state, setState] = useState("");

  const handleSearch = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${state}&api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        console.log(res.data.results);
        setSearch(res.data.results)
      })
      .catch((err) => {
        console.log(err.message);
      });
  };



  return (
    <>
      <Stack
        direction={"row"}
        className="rounded-3xl"
        sx={{
          backgroundColor: "white",
          width: "98%",
          height: "45px",
        }}
      >
        <input
          type="search"
          value={state}
          onChange={(e) => setState(e.target.value)}
          placeholder="Search for a movie,tv,show,person....."
          style={{
            width: "100%",
            border: "none",
            fontSize: "18px",
            paddingLeft: "10px",
            marginLeft: "20px",
            outline: "none",
          }}
        />

        <Box
          className="w-28 cursor-pointer flex justify-center items-center bg-gradient-to-r from-green-400 to-blue-400 h-full"
          sx={{
            borderRadius: "20px",
          }}
          onClick={()=>handleSearch()}
        >
          <Typography fontSize={15} fontWeight={"bold"} color={"white"}>
            Search
          </Typography>
        </Box>
      </Stack>
    </>
  );
}
