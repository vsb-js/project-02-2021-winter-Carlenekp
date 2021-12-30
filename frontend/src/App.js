import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { AppBar, Box, Button, Grid, IconButton, Toolbar } from "@mui/material";
import { Details } from "./components/Details";
import HomeIcon from "@mui/icons-material/Home";
import { CreateDetail } from "./components/CreateDetail";
import { Arts } from "./components/Arts";
import { CreateArt } from "./components/CreateArt";
import { DeleteArt } from "./components/DeleteArt";


// We could use for example the app bar for main menu https://mui.com/components/app-bar/#main-content
function MyNavigation() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ marginBottom: 20 }}>
        <Toolbar>
          <Link to={"/"}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <HomeIcon />
            </IconButton>
          </Link>
          <Button color="inherit" component={Link} to={"/arts"}>
            Arts
          </Button>
          <Button color="inherit" component={Link} to={"/details"}>Details</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

function Home() {
  return( 
    <div style={{ fontSize: 30, color:"blue" }}  >Welcome to our site!</div>

  );
  
}

function App() {
  return (
    <div>
      <Router>
        <MyNavigation />
        <Grid container justifyContent={"center"}> 
            <Route path="/" ><Home /></Route>
        </Grid>
        <Grid container justifyContent={"center"}>
          <Route exact path="/arts"><Arts /></Route>
        </Grid>
        <Grid container justifyContent={"center"}>
          <Route path="/arts/CreateArt"> <CreateArt /> </Route>
        </Grid>
        <Grid container justifyContent={"center"}>
           <Route path="/arts/DeleteArt"><DeleteArt /></Route> 
        </Grid>
        <Grid container justifyContent={"center"}>
           <Route path="/details" ><Details /> </Route>
        </Grid>
          <Grid container justifyContent={"center"}>
            <Route path="/details/CreateDetail" ><CreateDetail/> </Route>
        </Grid>
      </Router>
    </div>
  );
}

export default App;
