import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { apiUrl } from "../config";

export function CreateArt() {
  // There are more ways how we can handle forms with React
  // One of them is to handle it with single state and onChange
  // We want to have only 1 state for the form data! Multiple states can lead to problems
  const [formState, setFormState] = useState({
    type: "",
    creator: "",
    title: "",
    year: "",
    country: "",
    inspiration: "",
  });

  // we want to have some kind of action result when we hit the API
  const [actionResult, setActionResult] = useState(null);

  function onTitleChange(e) {
    const inputValue = e.target.value;
    setFormState ((prevState) => {
      return { ...prevState, ...{ title: inputValue } };
    });
  }

  function onTypeChange(e) {
    setFormState((prevState) => {
      return { ...prevState, ...{ type: e.target.value } };
    });
  }
  function onCreatorChange(e) {
    setFormState((prevState) => {
      return { ...prevState, ...{  creator: e.target.value } };
    });
  }
  function onYearChange(e) {
    setFormState((prevState) => {
      return { ...prevState, ...{ year: e.target.value } };
    });
  }
  function onCountryChange(e) {
    setFormState((prevState) => {
      return { ...prevState, ...{ country: e.target.value } };
    });
  }
  function onInspirationChange(e) {
    setFormState((prevState) => {
      return { ...prevState, ...{ inspiration: e.target.value } };
    });
  }


  function handleFormSubmit() {
    console.log(formState);

    // We could include some form validation

    axios
      .post(`${apiUrl}/arts`, {
        type: formState.type,
        creator: formState.creator,
        title: formState.title,
        year: formState.year,
        country: formState.country,
        inspiration: formState.inspiration,
      })
      .then((response) => {
        console.log(response.data);

        const dataFromServer = response.data;
        // This is something we have specified which is returned
        if (dataFromServer.success === "OK") {
          setActionResult("Art successfully created");
        }
      })
      .catch((reason) => {
        console.error(reason);
        setActionResult("There was an error creating the art");
      })
      .finally(
        // Finally is action which will happen regardless if it goes to "then" or "catch"

        // Let's clear the form
        setFormState({
            type: "",
            creator: "",
            title: "",
            year: "",
            country: "",
            inspiration: "",
        }),
      );
  }

  // Btw we should definitely better design our form with CSS, add margins and other things
  return (
    <div>
      <Box component="form" noValidate>
        <div>
          <TextField
            required
            id="type"
            label="Type"
            defaultValue=""
            value={formState.type}
            onChange={onTypeChange}
          />
          <TextField
            required
            id="creator"
            label="Creator"
            defaultValue=""
            value={formState.creator}
            onChange={onCreatorChange}
          />
          <TextField
            required
            id="title"
            label="Title"
            defaultValue=""
            value={formState.title}
            onChange={onTitleChange}
          />
          <TextField
            required
            id="year"
            label="Year"
            defaultValue=""
            value={formState.year}
            onChange={onYearChange}
          />
          <TextField
            required
            id="country"
            label="Country"
            defaultValue=""
            value={formState.country}
            onChange={onCountryChange}
          />
          <TextField
            required
            id="inspiration"
            label="Inspiration"
            defaultValue=""
            value={formState.inspiration}
            onChange={onInspirationChange}
          />
        </div>
        <Button variant="outlined" onClick={handleFormSubmit}>
          Submit
        </Button>
      </Box>
      {actionResult}
    </div>
  );
}
