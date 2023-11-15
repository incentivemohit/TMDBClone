import { Box } from "@mui/material";
import React from "react";
import MovieCard from "../../Cards/MovieCard";
import { Link } from "react-router-dom";

function Main({ dataList }) {
  return (
    <>
      <Box>
        <ul className="flex gap-6 justify-center flex-wrap pb-4">
          {dataList.map((movie) => {
            return (
              <li className="border-1 border w-[11rem] pb-2 h-fit rounded-xl shadow-lg">
                <Link
                  to={`/${movie.title ? "movie" : "tv"}/${movie.id}/${
                    movie.title ? movie.title : movie.name
                  }`}
                >
                  <MovieCard
                    id={movie.id}
                    title={movie.title ? movie.title : movie.name}
                    voteAverage={movie.vote_average}
                    posterPath={movie.poster_path}
                    releaseDate={movie.release_date}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </Box>
    </>
  );
}

export default Main;
