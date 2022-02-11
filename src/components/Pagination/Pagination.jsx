import React from "react";
import { Box, Pagination } from "@mui/material";

const CustomPagination = ({
  paginationCount,
  currentPage,
  handlePaginationChange,
}) => {
  return (
    <Box
      sx={{
        gridArea: { md: "3 / 2 / 5 / 4", xs: "3 / 1 / 3 / 5" },
        justifySelf: "center",
      }}
    >
      <Pagination
        count={paginationCount}
        page={currentPage}
        onChange={handlePaginationChange}
      />
    </Box>
  );
};

export default CustomPagination;
