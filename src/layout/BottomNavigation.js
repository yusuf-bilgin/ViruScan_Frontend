import React, { useState } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import { Link, useNavigate } from "react-router-dom";
import "./BottomNavigationStyle.css";

function BottomNavigationComponent({ onLogout, isLoggedIn }) {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Çıkış yapılması gerektiğinde onLogout işlemini çağırarak isLoggedIn'i false yap
    onLogout();
    navigate("/");
  };

  return (
    <Box>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Sonuçlar"
          icon={<FactCheckIcon />}
          component={Link}
          to="/home"
        />

        <BottomNavigationAction
          label="Yükle"
          icon={<FileUploadIcon />}
          component={Link}
          to="/uploadfiles"
        />

        <BottomNavigationAction
          label="Çıkış"
          icon={<ExitToAppIcon />}
          component={Link}
          onClick={handleLogout}
        />
      </BottomNavigation>
    </Box>
  );
}

export default BottomNavigationComponent;
