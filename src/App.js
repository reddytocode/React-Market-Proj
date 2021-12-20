import {Link} from "react-router-dom";
import {AppBar, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Routes, Route } from "react-router-dom";
import UsersPage from "./routes/users";
import ProfilesPage from "./routes/profiles";


function App() {
  return (
      <div className="App">
          <h1>Welcome to React Router!</h1>
          <Routes>
              <Route path="/" element={<UsersPage />} />
              <Route path="about" element={<ProfilesPage />} />
          </Routes>
      </div>
  );
}

export default App;
