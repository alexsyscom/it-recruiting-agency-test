import React from "react";
import { Box } from "@mui/material";

const List = ({ list, renderItem }) => {
  return (
    <Box
      sx={{
        gridArea: "2 / 1 / 2 / 5",
        display: "grid",
        margin: "0 20px",
        gridTemplateColumns: {
          xs: "repeat(1,1fr)",
          smm: "repeat(2,1fr)",
          sm: "repeat(3, 1fr)",
          md: "repeat(4, 1fr)",
          xl: "repeat(5, 1fr)",
        },
        gridTemplateRows: "repeat(3, 1fr)",
        gap: "20px",
      }}
    >
      {list.map(renderItem)}
    </Box>
  );
};

export default List;
