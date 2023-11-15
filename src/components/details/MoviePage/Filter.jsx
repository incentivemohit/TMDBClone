import { Box, Checkbox, FormGroup, Typography } from "@mui/material";
import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Chips from '../../utility/Chips'

const list = [
  "Action",
  "Adventure",
  "Animation",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "History",
  "Horror",
  "Music",
  "Mystery",
  "Romance",
  "Thriller",
  "War",
  "Western",
];

function Filter() {
  const [value, setValue] = React.useState("one");

  return (
    <>
      <Box className="flex flex-col gap-3">
        <hr />
        <Box className="flex flex-col">
          <Typography variant="overline-text">Show Me</Typography>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="one"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="one"
                control={<Radio />}
                label="Everything"
              />
              <FormControlLabel
                value="two"
                control={<Radio />}
                label="Movies I Haven't Seen"
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Movies I Have Seen"
              />
            </RadioGroup>
          </FormControl>
        </Box>
        <hr />
        <Box>
          <Typography variant="overline-text">Availabilities</Typography>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              label={
                <Typography variant="overline-text">
                  Search all availabilities?
                </Typography>
              }
            />
          </FormGroup>
        </Box>
        <hr />
        <Box className="flex flex-col gap-2">
          <Typography variant="overline-text">Genres</Typography>

          <Chips list={list}/>
        </Box>
      </Box>
    </>
  );
}

export default Filter;
