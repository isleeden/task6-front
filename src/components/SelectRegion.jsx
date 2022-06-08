import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import { regions } from "../consts";

export default function SelectRegion({ value, onSelectChange }) {
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Region</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Region"
        value={value}
        onChange={onSelectChange}
      >
        {regions.map((region) => {
          return (
            <MenuItem key={region} value={region}>
              {region}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}
