import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AdbIcon from '@mui/icons-material/Adb';
import DarkMode from "../components/darkMode/DarkMode";
import Tooltip from "@mui/material/Tooltip";
import "./AppBarStyle.css";


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" className="app-bar">
        <Toolbar>
          <Tooltip title="Logo Viruscan">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <AdbIcon />
            </IconButton>
          </Tooltip>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              ViruScan Application  
          </Typography>
          <DarkMode />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
