import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Stack from "@mui/material/Stack";
import SendIcon from "@mui/icons-material/Send";
import AlertTitle from "@mui/material/AlertTitle";
import Dropzone from "react-dropzone";
import "./UploadFile.css";

function FileUpload() {
  const [file, setFile] = useState(null);
  const [uploadMessage, setUploadMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [warningMessage, setWarningMessage] = useState(null);

  useEffect(() => {
    if (uploadMessage || errorMessage || warningMessage) {
      const timer = setTimeout(() => {
        setUploadMessage(null);
        setErrorMessage(null);
        setWarningMessage(null);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [uploadMessage, errorMessage, warningMessage]);

  const handleFileChange = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
  };

  const handleUpload = async () => {
    try {
      if (!file) {
        setWarningMessage("Lütfen bir dosya seçin.");
        return;
      }

      const formData = new FormData();
      formData.append("file", file);

      const response = await axios.post(
        "http://localhost:9091/uploadScan",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setFile(null);
      setUploadMessage("Dosya başarıyla yüklendi.");
    } catch (error) {
      console.error("Dosya yükleme hatası:", error);
      console.error("Dosya yükleme hatası:", error.response.data);
      setErrorMessage(
        "Dosya yükleme hatası: Türkçe karakter sorunu veya aynı dosya yüklendi! " +
          error.message
      );
    }
  };

  return (
    <Container maxWidth="md" sx={{ marginTop: "70px" }}>
      <Box
        sx={{
          border: 1,
          borderColor: "divider",
          borderRadius: 1,
          p: 4,
          mt: 2,
          boxShadow: 1,
        }}
      >
        <Typography variant="h5" component="div" gutterBottom>
          Dosya Yükle
        </Typography>
        <div style={{ margin: "20px 0" }} />

        {/* react-dropzone özelliği*/}
        <Dropzone onDrop={handleFileChange}>
          {({ getRootProps, getInputProps }) => (
            <div
              {...getRootProps()}
              style={{
                cursor: "pointer",
                border: "3px dashed #2196F3", 
                borderRadius: "20px", // Köşe yarıçapı
                padding: "40px", 
                textAlign: "center",
                backgroundColor: "#f7f7f7",
              }}
            >
              <input {...getInputProps()} />
              <Button
                variant="contained"
                component="span"
                startIcon={<CloudUploadIcon />}
                className="upload-button"
                sx={{
                  padding: "15px 24px",
                  borderRadius: "50px",
                }}
              >
                Dosya Seç
              </Button>
              <p style={{ marginTop: "20px" }}>
                Dosyalarınızı sürükleyip bırakabilir veya buraya
                tıklayabilirsiniz.
              </p>
            </div>
          )}
        </Dropzone>

        <div style={{ margin: "20px 0" }} />

        {/* Seçilen dosyayı göstermek için */}
        {file && (
          <Typography
            variant="body2"
            component="div"
            gutterBottom
            sx={{
              fontFamily: "Arial, sans-serif",
              backgroundColor: "#e0e0e0",
              padding: "20px",
            }}
          >
            Seçilen Dosya: {file.name}
          </Typography>
        )}

        <div style={{ margin: "20px 0" }} />

        <Stack direction="row" spacing={4} justifyContent="center">
          <Button
            variant="contained"
            onClick={handleUpload}
            endIcon={<SendIcon />}
          >
            Analiz Et
          </Button>
          <Link to="/home" style={{ textDecoration: "none" }}>
            <Button variant="outlined" color="primary">
              Geri
            </Button>
          </Link>
        </Stack>

        <div style={{ margin: "20px 0" }} />

        {warningMessage && (
          <Alert severity="warning">
            <AlertTitle>UYARI</AlertTitle>
            {warningMessage}
          </Alert>
        )}
        {errorMessage && (
          <Alert severity="error">
            <AlertTitle>HATA</AlertTitle>
            {errorMessage}
          </Alert>
        )}
        {uploadMessage && (
          <Alert severity="success">
            <AlertTitle>BAŞARILI</AlertTitle>
            {uploadMessage}
          </Alert>
        )}
      </Box>
    </Container>
  );
}

export default FileUpload;
