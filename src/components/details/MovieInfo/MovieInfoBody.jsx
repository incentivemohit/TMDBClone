import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import "../../../index.css";
import PersonCard from "../../Cards/PersonCard";
import BasicTabs from "./Tabs";
import axios from "axios";

function MovieInfoBody({ id,type }) {
  const [personList, setPersonList] = useState([]);

  const getPerson = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/${type}/${id}?api_key=${process.env.REACT_API_KEY}&language=en-US&append_to_response=credits`
      )
      .then((res) => {
        setPersonList(res.data.credits.cast);
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    getPerson();
  }, []);

  return (
    <>
      <Box className="w-3/4 pl-12 ">
        <Box className="flex gap-4 py-2 ">
          <Typography variant="h6" fontWeight={"700"}>
            Top Billed Cast
          </Typography>
        </Box>
        <div>
          <div id="carousel" className="overflow-auto pt-3 pb-8">
            <ul className="flex gap-4 pb-5">
              {personList.map((data) => {
                return (
                  <li key={data.id}>
                    <PersonCard
                      profilePath={data.profile_path}
                      name={data.name}
                      character={data.character}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <Typography className="py-4">Full Cast & Crew</Typography>
        <hr />
        <Box className="flex ">
          <BasicTabs />
        </Box>
      </Box>
    </>
  );
}

export default MovieInfoBody;
