// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import Container from "@mui/material/Container";
// import Box from "@mui/material/Box";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Button from "@mui/material/Button";
// import DeleteIcon from "@mui/icons-material/Delete";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import CancelIcon from "@mui/icons-material/Cancel";
// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// export default function Home() {
//   const [files, setFiles] = useState([]);
//   const [accordionContent, setAccordionContent] = useState({});

//   useEffect(() => {
//     loadFiles();
//   }, []);

//   const loadFiles = async () => {
//     try {
//       const result = await axios.get("http://localhost:9090/files");
//       setFiles(result.data);
//     } catch (error) {
//       console.error("Dosyaları yükleme hatası:", error);
//     }
//   };

//   const deleteFile = async (url) => {
//     try {
//       await axios.delete(url);
//       console.log("Dosya silindi:", url);
//       loadFiles();
//     } catch (error) {
//       console.error("Dosya silme hatası:", error);
//     }
//   };

//   const viewResult = async (url, index) => {
//     try {
//       const response = await axios.get(url);
//       // Gelen veriyi durum içinde saklayın
//       setAccordionContent((prevState) => ({
//         ...prevState,
//         [index]: response.data.scanResult,
//       }));
//       loadFiles();
//     } catch (error) {
//       console.error("İçerik gösterme hatası:", error);
//     }
//   };

//   return (
//     <Container>
//       <Box mt={4}>
//         <Link to="/uploadfiles">
//           <Button variant="contained" color="primary" sx={{ mr: 2 }}>
//             Add File
//           </Button>
//         </Link>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>S.N</TableCell>
//               <TableCell>Folder Name</TableCell>
//               <TableCell>Type</TableCell>
//               <TableCell>Size (Kbyte)</TableCell>
//               <TableCell>Status</TableCell>
//               <TableCell>Action</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {files.map((file, index) => (
//               <TableRow
//                 key={index}
//                 onClick={() => viewResult(file.url, index)} // TableRow'a tıklamada viewResult çağrılıyor
//                 style={{ cursor: "pointer" }} // Tıklanabilir bir görünüm için cursor ekleniyor
//               >
//                 <TableCell>{index + 1}</TableCell>
//                 <TableCell>{file.name}</TableCell>
//                 <TableCell>{file.type}</TableCell>
//                 <TableCell>{file.size}</TableCell>
//                 <TableCell>
//                   {file.scanResult === "CLEAR" ? (
//                     <CheckCircleIcon sx={{ color: "green" }} />
//                   ) : (
//                     <CancelIcon sx={{ color: "red" }} />
//                   )}
//                 </TableCell>
//                 <TableCell>
//                   <Button
//                     variant="outlined"
//                     color="secondary"
//                     onClick={() => deleteFile(file.url)}
//                     startIcon={<DeleteIcon />}
//                   >
//                     Delete
//                   </Button>
//                   {accordionContent[index] && (
//                     <Accordion>
//                       <AccordionSummary
//                         expandIcon={<ExpandMoreIcon />}
//                         aria-controls={`panel-${index}-content`}
//                         id={`panel-${index}-header`}
//                       >
//                         <Typography>Result Detail</Typography>
//                       </AccordionSummary>
//                       <AccordionDetails>
//                         <Typography>
//                           {accordionContent[index]}
//                           {/* Dosya içeriği burada görüntülenir */}
//                         </Typography>
//                       </AccordionDetails>
//                     </Accordion>
//                   )}
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </Box>
//     </Container>
//   );
// }
