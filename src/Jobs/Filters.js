import "./Filters.scss";
import React from "react";
import { observer } from "mobx-react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
// import filtersStore from "./FiltersStore";

const Filters = () => {
  const handlePostJob = () => alert("Coming soon!");

  return (
    <Box component="div" id="top-bar">
      <h2>Welcome to our Jobs board</h2>
      <p>
        Made with{" "}
        <span role="img" aria-label="Heart">
          ❤️
        </span>{" "}
        for developers, by developers
      </p>
      <Button color="primary" variant="outlined" onClick={handlePostJob} disableRipple>
        Post a Job
      </Button>
    </Box>
  );
};

export default observer(Filters);
