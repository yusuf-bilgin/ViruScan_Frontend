import React, { useState, useEffect } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Avatar from "@mui/material/Avatar";
import axios from "axios"; 
import AccountBoxIcon from '@mui/icons-material/AccountBox';

export default function Login({ onLogin }) {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [mailAddress, setMailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [errorMessage]);

  // Geçerli email kontrolü.
  const validateEmail = (inputEmail) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputEmail);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateEmail(mailAddress)) {
      setIsEmailValid(false);
      return;
    }

    setIsEmailValid(true);

    axios
      .post("http://localhost:9091/api/users/login", {
        mailAddress: mailAddress,
        password: password,
      })
      .then((response) => {
        if (response.data.message === "OK") {
          // Kullanıcı girişi başarılıysa onLogin işlemini çağırarak isLoggedIn'i true yapar.
          onLogin();
          navigate("/home");
        } else {
          setErrorMessage("Kullanıcı bulunamadı.");
        }
      })
      .catch((error) => {
        console.error("Giriş işlemi sırasında bir hata oluştu:", error);
        setErrorMessage("Kullanıcı bulunamadı (Geçersiz mail veya şifre)");
      });
  };

  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          px: 4,
          py: 6,
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ bgcolor: "primary.main" }}>
          <AccountBoxIcon />
        </Avatar>
        <Typography
          component="h1"
          variant="h5"
          sx={{ display: "flex", alignItems: "center" }}
        >
          Kullanıcı Girişi
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="mailAddress"
            label="Email Adresi"
            name="email"
            autoComplete="email"
            autoFocus
            value={mailAddress}
            onChange={(e) => setMailAddress(e.target.value)}
            error={!isEmailValid}
            helperText={!isEmailValid ? "Lütfen geçerli bir e-posta girin" : ""}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Şifre"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Beni hatırla"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Giriş Yap
          </Button>
          {errorMessage && (
            <Alert severity="warning">
              <AlertTitle>HATA</AlertTitle>
              {errorMessage}
            </Alert>
          )}
          <Grid container>
            <Grid item>
              <Link component={RouterLink} to="/signUp" variant="body2">
                {"Hesabınız yok mu? Kayıt olun"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
