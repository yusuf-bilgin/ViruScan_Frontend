// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import Container from "@mui/material/Container";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import Alert from "@mui/material/Alert";
// import CloudUploadIcon from "@mui/icons-material/CloudUpload";
// import Stack from "@mui/material/Stack";
// import DeleteIcon from "@mui/icons-material/Delete";
// import SendIcon from "@mui/icons-material/Send";

// function FileUpload() {
//   const [file, setFile] = useState(null);
//   const [uploadMessage, setUploadMessage] = useState(null);
//   const [errorMessage, setErrorMessage] = useState(null);

//   useEffect(() => {
//     if (uploadMessage || errorMessage) {
//       const timer = setTimeout(() => {
//         setUploadMessage(null);
//         setErrorMessage(null);
//       }, 3000);
//       return () => clearTimeout(timer);
//     }
//   }, [uploadMessage, errorMessage]);

//   const handleFileChange = (event) => {
//     setFile(event.target.files[0]);
//   };

//   const handleUpload = async () => {
//     try {
//       if (!file) {
//         setErrorMessage("Lütfen bir dosya seçin.");
//         return;
//       }

//       const formData = new FormData();
//       formData.append("file", file);

//       const response = await axios.post(
//         "http://localhost:9090/uploadScan",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       setFile(null);
//       setUploadMessage("Dosya başarıyla yüklendi.");
//     } catch (error) {
//       console.error("Dosya yükleme hatası:", error);
//       console.error("Dosya yükleme hatası:", error.response.data);
//       setErrorMessage("Dosya yükleme hatası: " + error.message);
//     }
//   };

//   return (
//     <Container maxWidth="sm">
//       <Box
//         sx={{
//           border: 1,
//           borderColor: "divider",
//           borderRadius: 1,
//           p: 4,
//           mt: 2,
//           boxShadow: 1,
//         }}
//       >
//         <Typography variant="h5" component="div" gutterBottom>
//           Dosya Yükle
//         </Typography>
//         <input
//           type="file"
//           id="formFile"
//           onChange={handleFileChange}
//           style={{ display: "none" }}
//         />
//         <label htmlFor="formFile">
//           <Button
//             variant="contained"
//             component="span"
//             startIcon={<CloudUploadIcon />}
//           >
//             Dosya Seç
//           </Button>

//           <Stack direction="row" spacing={8}>
//             <Button
//               variant="outlined"
//               onClick={handleUpload}
//               endIcon={<SendIcon />}
//             >
//               Gönder
//             </Button>
//             <Link to="/" style={{ textDecoration: "none" }}>
//               <Button variant="contained" color="primary">
//                 Geri
//               </Button>
//             </Link>
//           </Stack>
//         </label>

//         {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
//         {uploadMessage && <Alert severity="success">{uploadMessage}</Alert>}
//       </Box>
//     </Container>
//   );
// }

// export default FileUpload;
