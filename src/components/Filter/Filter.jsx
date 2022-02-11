import React from "react";
import { Box, Button, TextField, Stack } from "@mui/material";

const Filter = ({ filter, submitHandler, changeHandler }) => {
  return (
    <Box
      component="form"
      sx={{
        gridArea: {
          smm: "1 / 2 / 1 / 4",
          md: "1 / 2 / 1 / 4",
          xs: "1 / 1 / 1 / 5",
        },
      }}
      onSubmit={submitHandler}
    >
      <Stack direction="row" spacing={2}>
        <TextField
          id="id"
          type="number"
          label="Input Id for filtering(1,2,3 etc)"
          variant="outlined"
          size="small"
          sx={{ flexGrow: 1 }}
          value={filter}
          onChange={changeHandler}
        />
        <Button type="submit" color="primary" variant="outlined">
          Filter
        </Button>
      </Stack>
    </Box>
  );
};

export default Filter;
