import React from "react";
import { Slider, TextField, FormLabel, Grid, Button } from "@mui/material";
import SelectRegion from "./SelectRegion";

export default function Controls({ params, setParams, onSubmit, onGetCsv }) {
  const handleErrorChange = (e) => {
    if (e.target.value === "") {
      setParams({ ...params, errors: 0 });
    } else {
      setParams({ ...params, errors: parseFloat(e.target.value) });
    }
  };

  const handleSeedChange = (e) => {
    setParams({ ...params, seed: e.target.value });
  };

  const handleRegionChange = (e) => {
    setParams({ ...params, region: e.target.value });
  };

  return (
    <Grid container sx={{ mt: 10 }} spacing={2}>
      <Grid item xs={12}>
        <SelectRegion
          value={params.region}
          onSelectChange={handleRegionChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Seed"
          variant="outlined"
          fullWidth
          onChange={handleSeedChange}
          value={params.seed}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Error Value"
          variant="outlined"
          fullWidth
          type="number"
          onChange={handleErrorChange}
          value={params.errors}
        />
      </Grid>
      <Grid item xs={6}>
        <FormLabel>Error value:</FormLabel>
        <Slider
          defaultValue={30}
          valueLabelDisplay="auto"
          step={0.25}
          marks
          min={0}
          max={10}
          onChange={handleErrorChange}
          value={params.errors}
        />
      </Grid>
      <Grid item xs={12} textAlign="center">
        <Button size="large" variant="contained" onClick={onSubmit}>
          Get Data
        </Button>
        <Button size="large" variant="contained" onClick={onGetCsv}>
          Get Csv
        </Button>
      </Grid>
    </Grid>
  );
}
