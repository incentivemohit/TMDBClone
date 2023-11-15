import { Box, Stack, Typography } from "@mui/material";
import React from "react";

function Banner() {
  return (
    <div
      style={{
        height: "23rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "end",
        backgroundSize: "cover",
        backgroundImage: `url("https://www.themoviedb.org/t/p/original/p4QdHpKCKCmU81BYZa3JPVGV2WK.jpg")`,
      }}
    >
      <Stack
        spacing={7}
        sx={{
          paddingLeft: "2rem",
          paddingBottom: "3rem",
          width: "100%",
        }}
      >
        <Box className="pl-3">
          <Typography color="white" variant="h3"  fontWeight={'bold'}>
            Welcome.
          </Typography>
          <Typography color="white" fontSize={23} fontWeight={"bold"}>
            Millions of movies, TV shows and people to discover. Explore now.
          </Typography>
        </Box>

        <Stack
          direction={"row"}
          className="rounded-l-2xl rounded-r-3xl pl-3"
          sx={{
            backgroundColor: "white",
            width: "98%",height:"42px"
          }}
        >
          <input
            type="search"
            placeholder="Search for a movie,tv,show,person....."
            style={{
              width: "100%",
              border: "none",
              fontSize: "18px",
              paddingLeft: "10px",
              outline: "none",
            }}
          />

          <Box
            className="w-24 flex justify-center items-center bg-gradient-to-r from-green-400 to-blue-400 h-full"
            sx={{
              borderRadius: "20px",height:"42px"
            }}
          >
            <Typography fontSize={15} fontWeight={"bold"} color={"white"}>
              Search
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </div>
  );
}

export default Banner;
