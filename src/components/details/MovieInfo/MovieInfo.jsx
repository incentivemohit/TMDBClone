import React, {  useEffect, useState } from "react";
import {
  Box,
  CircularProgress,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useParams } from "react-router-dom";
import axios from "axios";
import MovieInfoBody from "./MovieInfoBody";
import MovieInfoSidebar from "./MovieInfoSidebar";
import ImageComponent from "../../utility/ImageComponent";


function MovieInfo() {
  const { id, type } = useParams();
  const [ data, setData ] = useState([])

  const getMovie = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/${type}/${id}?api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        console.log(res.data)
        setData([res.data]);
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    getMovie();
  }, [id]);

  return (
    <>
      <Box
        className="px-3 pt-[5rem] pb-4 bg-gray-700"
      >
        { data && data.length!=0? data.map((movie) => {
          return (
            <Box className="flex gap-3 px-4">
              <Box className="w-1/3">
                <ImageComponent
                  rounded={"rounded-3xl"}
                  posterPath={movie.poster_path}
                />
              </Box>
              <Box className="w-full flex flex-col  justify-center">
                <Box className="pl-3 flex flex-col gap-6
                 text-white">
                  <Box className="flex flex-col gap-2">

                  <Typography variant="h4" fontWeight={"bold"}>
                    {movie.title}
                    <span className="text-gray-200">(2013)</span>
                  </Typography>

                  <Box className="flex gap-2 pl-1 ">
                    {movie.genres.map((data) => {
                      return <Typography>{data.name}</Typography>;
                    })}
                  </Box>
                  </Box>

                  <Stack direction="row" alignItems={"center"} spacing={2}>
                    <div className="flex items-center gap-1">
                      <div className="flex w-16 h-16 relative bg-black rounded-full">
                        <CircularProgress
                          variant="determinate"
                          value={Math.floor((movie.vote_average * 100) / 10)}
                          color="success"
                          size={"4rem"}
                          sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            translate: "-50% -50%",
                          }}
                        />
                        <Typography
                          sx={{
                            color: "white",
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            translate: "-50% -50%",
                            padding: "5px 5px",
                          }}
                        >
                          {Math.floor((movie.vote_average * 100) / 10)}%
                        </Typography>
                      </div>
                      <span>User Score</span>
                    </div>

                    <Tooltip sx={{ cursor: "pointer" }} title={"Add to List"}>
                      <Box
                        className="rounded-full p-4 flex"
                        sx={{
                          backgroundColor: "#032541",
                        }}
                      >
                        <FormatListBulletedIcon fontSize="small" />
                      </Box>
                    </Tooltip>
                    <Tooltip
                      sx={{ cursor: "pointer" }}
                      title={"Mark as Favorite"}
                    >
                      <Box
                        className="rounded-full p-4 flex"
                        sx={{
                          backgroundColor: "#032541",
                        }}
                      >
                        <FavoriteIcon fontSize="small" />
                      </Box>
                    </Tooltip>
                    <Tooltip
                      sx={{ cursor: "pointer" }}
                      title={"Add to your watchlist"}
                    >
                      <Box
                        className="rounded-full p-4 flex"
                        sx={{
                          backgroundColor: "#032541",
                        }}
                      >
                        <BookmarkIcon fontSize="small" />
                      </Box>
                    </Tooltip>
                    <Tooltip sx={{ cursor: "pointer" }} title={"Rate it!"}>
                      <Box
                        className="rounded-full p-4 flex"
                        sx={{
                          backgroundColor: "#032541",
                        }}
                      >
                        <StarBorderIcon fontSize="small" />
                      </Box>
                    </Tooltip>
                    <Box className="flex items-center cursor-pointer hover:text-gray-400">
                      <PlayArrowRoundedIcon />{" "}
                      <Typography>Play Trailer</Typography>
                    </Box>
                  </Stack>

                  <Box className="text-white">
                    <Typography variant="h6" fontWeight={"bold"}>
                      Overview
                    </Typography>
                    <Typography variant="subtitle2">
                      {movie.overview}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          );
        }):""}
      </Box>
      <Box className="flex gap-4">
        <MovieInfoBody id={id} type={type} /> <MovieInfoSidebar />
      </Box>
    </>
  );
}

export default MovieInfo;
