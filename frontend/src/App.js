import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AppBar, Box, Button, Grid, IconButton, Toolbar } from "@mui/material";
import { Details } from "./components/Details";
import HomeIcon from "@mui/icons-material/Home";
import { CreateDetail } from "./components/CreateDetail";
import { Arts } from "./components/Arts";
import { CreateArt } from "./components/CreateArt";


// We could use for example the app bar for main menu https://mui.com/components/app-bar/#main-content
function MyNavigation() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ marginBottom: 10 }}>
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
          {/*It's possible to use the classic react router link but it will have ugly colors*/}
          {/*<Button color="inherit">*/}
          {/*  <Link to={"/users"}>*/}
          {/*    Users*/}
          {/*  </Link>*/}
          {/*</Button>*/}
          {/*We can pass a component into a button so it behaves as link but doesn't color it*/}
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
  return <div>Welcome to our site!</div>;
}

function App() {
  return (
    <div>
      <Router>
        <MyNavigation />
        <Grid container justifyContent={"center"}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/arts" element={<Arts />} />
            <Route path="/arts/CreateArt" element={<CreateArt />} />
            <Route path="/details" element={<Details />} />
            <Route path="/details/CreateDetail" element={<CreateDetail />} />


          </Routes>
        </Grid>
      </Router>
    </div>
  );
}

export default App;
