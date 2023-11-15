import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Contributors from "./Contributors";
import Chips from "../../utility/Chips";

const list = ["assasin","airport","client","sociopath","revenge","murder","lawyer","brutality","dominican republic","secret"]

function MovieInfoSidebar() {
  return (
    <>
      <Box className="w-1/5 flex justify-center py-5">
        <Box className="flex flex-col gap-5">
          <Stack direction={"row"} spacing={2} justifyContent={"center"}>
            <FacebookRoundedIcon fontSize="large" />
            <TwitterIcon fontSize="large" />
            <InstagramIcon fontSize="large" />
          </Stack>
          <Stack spacing={2}>
            <Box>
              <Typography variant="body1" fontWeight={"bold"}>
                Status
              </Typography>
              <Typography variant="subtitle1" fontSize={13}>
                Released
              </Typography>
            </Box>
            <Box>
              <Typography variant="body1" fontWeight={"bold"}>
                Original Language
              </Typography>
              <Typography variant="subtitle1" fontSize={13}>
                English
              </Typography>
            </Box>
            <Box>
              <Typography variant="body1" fontWeight={"bold"}>
                Budget
              </Typography>
              <Typography variant="subtitle1" fontSize={13}>
                $20,000,000.00
              </Typography>
            </Box>
            <Box>
              <Typography variant="body1" fontWeight={"bold"}>
                Revenue
              </Typography>
              <Typography variant="subtitle1" fontSize={13}>
                $217,000,000.00
              </Typography>
            </Box>
          </Stack>

          <Box className="flex flex-col gap-2">
            <Typography variant="h4" fontSize={17} fontWeight={700}>
              Keywords
            </Typography>
            <Box className="w-full flex flex-wrap gap-2">
              <Chips list={list}/>
            </Box>
          </Box>
          <Box className="flex flex-col gap-2">
            <Typography variant="h4" fontSize={17} fontWeight={700}>
              Top Contributors
            </Typography>
            <Box className="flex flex-col gap-2">
              <Contributors />
              <Contributors />
              <Contributors />
              <Contributors />
              <Contributors />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default MovieInfoSidebar;
