import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Search from "../Search/Search";

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
          <Typography color="white" variant="h3" fontWeight={"bold"}>
            Welcome.
          </Typography>
          <Typography color="white" fontSize={23} fontWeight={"bold"}>
            Millions of movies, TV shows and people to discover. Explore now.
          </Typography>
        </Box>

        <Search />
      </Stack>
    </div>
  );
}

export default Banner;
