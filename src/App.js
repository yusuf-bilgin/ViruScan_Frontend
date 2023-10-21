import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import ButtonAppBar from "./layout/AppBar";
import Home from "./pages/Home";
import FileUpload from "./pages/UploadFile";
import BottomNavigationComponent from "./layout/BottomNavigation";
import Login from "./pages/loginSignup/login";
import SignUp from "./pages/loginSignup/signUp";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Kullanıcı girişi yapıldığında bu işlevi çağırarak isLoggedIn durumunu güncelleyin.
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Kullanıcı çıkış yaptığında bu işlevi çağırarak isLoggedIn durumunu güncelleyin.
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <CssBaseline />

      <div className="app-bar">
        <ButtonAppBar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      </div>

      <Container maxWidth="lg">
        <Routes>
          <Route
            path="/home"
            element={isLoggedIn ? <Home /> : <Navigate to="/" />}
          />
          <Route
            path="/uploadfiles"
            element={isLoggedIn ? <FileUpload /> : <Navigate to="/" />}
          />
          <Route path="/" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Container>
      {isLoggedIn && (
        <footer className="bottom-navigation">
          <BottomNavigationComponent />
        </footer>
      )}
    </Router>
  );
}

export default App;
