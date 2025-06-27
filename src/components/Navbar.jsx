import { Stack, Typography, IconButton } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      top: 0,
      background: "#1e1e2f",
      justifyContent: "space-between",
      zIndex: 1000,
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <img src={logo} alt="MeTube Logo" height={45} />
      <Typography variant="h5" color="#a855f7" fontWeight="bold">
        MeTube
      </Typography>
    </Link>

    <SearchBar />

    {/* Optional future theme toggle button */}
    {/* 
    <IconButton onClick={toggleDarkMode}>
      {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton> 
    */}
  </Stack>
);

export default Navbar;
