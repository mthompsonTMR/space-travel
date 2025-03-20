import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          🚀 Space Travel
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/spacecrafts">
          Spacecrafts
        </Button>
        <Button color="inherit" component={Link} to="/construction">
          Build
        </Button>
        <Button color="inherit" component={Link} to="/planets">
          Planets
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
