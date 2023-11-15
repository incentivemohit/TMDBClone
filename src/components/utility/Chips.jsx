import { Typography } from "@mui/material";
import React from "react";

export default function Chips({ list }) {
  return (
    <>
      <ul className="flex flex-wrap gap-2">
        {list.map((item) => {
          return (
            <li className="bg-gray-200 rounded-xl px-2">
              <Typography fontSize={14}>{item}</Typography>
            </li>
          );
        })}
      </ul>
    </>
  );
}
