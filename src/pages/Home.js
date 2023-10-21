import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "@mui/material/Container";
import CustomTable from "../components/table/Table";


export default function Home() {
  const [files, setFiles] = useState([]);
  const [resultDetail, setResultDetail] = useState({});
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    loadFiles();
  }, []);

  const loadFiles = async () => {
    try {
      const result = await axios.get("http://localhost:9091/files");
      setFiles(result.data);
    } catch (error) {
      console.error("Dosyaları yükleme hatası:", error);
    }
  };

  const deleteFile = async (url) => {
    try {
      await axios.delete(url);
      console.log("Dosya silindi:", url);
      loadFiles();
    } catch (error) {
      console.error("Dosya silme hatası:", error);
    }
  };

  const viewResult = async (url, index) => {
    try {
      const response = await axios.get(url);
      setResultDetail((prevState) => ({
        ...prevState,
        [index]: response.data.scanResult,
      }));
    } catch (error) {
      console.error("İçerik gösterme hatası:", error);
    }
  };

  const hideRow = (index) => {
    setResultDetail((prevState) => ({
      ...prevState,
      [index]: null,
    }));
  };

  return (
    <Container>
      <CustomTable
        files={files}
        deleteFile={deleteFile}
        viewResult={viewResult}
        hideRow={hideRow}
        resultDetail={resultDetail}
        page={page}
        rowsPerPage={rowsPerPage}
        setPage={setPage}
        setRowsPerPage={setRowsPerPage}
      />

    </Container>
  );
}
