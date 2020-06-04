import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";

const States = (props) => {
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-autowidth-label">
        Select state
      </InputLabel>
      <Select
        labelId="demo-simple-select-autowidth-label"
        id="demo-simple-select-autowidth"
      >
        <MenuItem value={"Karnataka"}>Karnataka</MenuItem>
        <MenuItem value={"Maharastra"}>Maharastra</MenuItem>
      </Select>
    </FormControl>
  );
};

export default States;
