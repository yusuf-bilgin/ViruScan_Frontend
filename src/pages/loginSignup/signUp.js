import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { useState, useEffect } from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import BadgeIcon from "@mui/icons-material/Badge";

const theme = createTheme();

export default function SignUp() {
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [mailAddress, setMailAddress] = useState("");

  const validateEmail = (inputEmail) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputEmail);
  };

  useEffect(() => {
    if ((successMessage, errorMessage)) {
      const timer = setTimeout(() => {
        setSuccessMessage(null);
        setErrorMessage(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage, errorMessage]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateEmail(mailAddress)) {
      setIsEmailValid(false);
      return;
    }

    setIsEmailValid(true);

    const data = new FormData(event.currentTarget);
    const formData = {
      userName: data.get("firstName"),
      userSurname: data.get("lastName"),
      mailAddress: data.get("email"),
      password: data.get("password"),
    };

    axios
      .post("http://localhost:9091/api/users/signup", formData)
      .then((response) => {
        console.log("Başarıyla kayıt oldunuz.", response.data);
        setSuccessMessage("Kayıt işlemi başarıyla gerçekleşti.");
      })
      .catch((error) => {
        console.error("Kayıt işlemi sırasında bir hata oluştu:", error);
        setErrorMessage("Kayıt işlemi sırasında bir hata oluştu.");
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
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
          <Avatar sx={{ m: 2, bgcolor: "primary.main" }}>
            <BadgeIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Kayıt Ol
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="İsim"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Soyisim"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Adresi"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={(e) => setMailAddress(e.target.value)}
                  error={!isEmailValid}
                  helperText={
                    !isEmailValid ? "Lütfen geçerli bir e-posta girin" : ""
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Şifre"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="Güncellemeleri e-posta yoluyla almak istiyorum."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Kayıt Ol
            </Button>
            {successMessage && (
              <Alert severity="success">
                <AlertTitle>Başarılı</AlertTitle>
                {successMessage}
              </Alert>
            )}
            {errorMessage && (
              <Alert severity="error">
                <AlertTitle>HATA</AlertTitle>
                {errorMessage}
              </Alert>
            )}
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  Zaten hesabınız var mı? Giriş yap
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
