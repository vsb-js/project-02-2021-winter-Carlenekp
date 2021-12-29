import { useEffect, useState } from "react";
import axios from "axios";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import { apiUrl } from "../config";

export function Details() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // we don't have any error handling here, what if it goes wrong?
    axios.get(`${apiUrl}/details`).then((response) => {
      console.log(response.data);
      setData(response.data);
    });
  }, []);

  // The loading is extremely important even though it can be extremely fast!
  // Because we don't have any interaction on this view ( the data doesn't change)
  // we don't need additional state for loading. But in other cases we might need state with loading
  if (!data) {
    return <div>Loading...</div>;
  }

  // using simple table https://mui.com/components/tables/
  return (
    <Grid container justifyContent={"center"} spacing={2}>
      <Grid item>
        <TableContainer component={Paper} style={{ maxWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Review</TableCell>
                <TableCell>Equipment</TableCell>
                <TableCell>Movement</TableCell>
                <TableCell>artId</TableCell>
                <TableCell>Created At</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {row.review} 
                  </TableCell>
                  <TableCell>{row.equipment}</TableCell>
                  <TableCell component="th" scope="row">
                    {row.movement} 
                  </TableCell>
                  <TableCell>{row.artId}</TableCell>
                  <TableCell>{row.createdAt}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item>
        <Button
          variant="outlined"
          startIcon={<AddIcon />}
          component={Link}
          to={"/details/createDetail"}
        >
          Create Detail
        </Button>
      </Grid>
    </Grid>
  );
}
