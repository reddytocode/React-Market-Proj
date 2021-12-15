import {Link} from "react-router-dom";
import {AppBar, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';


function App() {
  return (
    <div>
        <AppBar position="static">
            <Toolbar variant="dense">
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit" component="div">
                    <Link to="/users">Users</Link>
                </Typography>
                <Typography variant="h6" color="inherit" component="div" pl="10">
                    <Link to="/profiles">Profiles</Link>
                </Typography>
            </Toolbar>
        </AppBar>

    </div>
  );
}

export default App;
