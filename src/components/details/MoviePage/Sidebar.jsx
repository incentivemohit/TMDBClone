import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import { Box, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import Sort from "./Sort";
import Filter from "./Filter";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";

function Sidebar() {
  return (
    <>
      <Box className="w-2/5 flex ">
        <Box className="w-72 flex flex-col gap-3">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="shadow-md"
            >
              <Typography>Sort</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="py-2">Sort Results By</Typography>
              <Sort />
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="shadow-md"
            >
              <Typography>Where to Watch</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box className="p-2">
                <Typography variant="overline-text" fontSize={13}>
                  My Services <ModeEditOutlineOutlinedIcon fontSize="small" />{" "}
                </Typography>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox />}
                    label={
                      <Typography variant="overline-text">
                        Restrict searches to my subscribed servies?
                      </Typography>
                    }
                  />
                </FormGroup>
              </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="shadow-md"
            >
              <Typography>Filters</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Filter />
            </AccordionDetails>
          </Accordion>
          <Box className="text-center mx-auto bg-gray-100 py-2 w-11/12 border  border-1 rounded-3xl">
            <Typography>Search</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Sidebar;
