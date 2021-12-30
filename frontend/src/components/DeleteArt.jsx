import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { apiUrl } from "../config";
import{ Link} from "react-router-dom";
import {useHistory } from "react-router-dom";



export function DeleteArt() {
  // There are more ways how we can handle forms with React
  // One of them is to handle it with single state and onChange
  // We want to have only 1 state for the form data! Multiple states can lead to problems
  let history = useHistory();
  const [formState, setFormState] = useState({
    id: "",
  });

  // we want to have some kind of action result when we hit the API
  const [actionResult, setActionResult] = useState(null);

  function onDeleteChange(e) {
    history.push(e.target.value )  ;    

    setFormState((prevState) => {
      return { ...prevState, ...{ id: e.target.value } };

    }); 
  }



  function handleFormSubmit() {
    console.log(formState);

    // We could include some form validation

    axios
      .delete(`${apiUrl}/arts/:id`, {
        id: formState.id,   

      })
      .then((response) => {
        console.log(response.data);

        const dataFromServer = response.data;
        // This is something we have specified which is returned
        if (dataFromServer.success === "OK") {
          setActionResult("Art successfully deleted");
        }
      })
      .catch((reason) => {
        console.error(reason);
        setActionResult("There was an error deleting the art");
      })
      
  }

  // Btw we should definitely better design our form with CSS, add margins and other things
  return (
    <div>
      <Box component="form" noValidate>
        <div>
          <TextField
            required
            id="id"
            label="Id"
            defaultValue=""
            value={formState.id}
            onChange={onDeleteChange}
          />
         
        </div>
        <Button variant="outlined" onClick={handleFormSubmit}>
          Delete
        </Button>
        
      </Box>
      {actionResult}
    </div>
  );
}
