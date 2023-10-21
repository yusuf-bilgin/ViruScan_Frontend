import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";

export default function CustomTable({
  files,
  deleteFile,
  viewResult,
  hideRow,
  resultDetail,
  page,
  rowsPerPage,
  setPage,
  setRowsPerPage,
}) {
  // Sayfa başına görüntülenecek satır sayısı
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, files.length - page * rowsPerPage);

  return (
    <div>
      <TablePagination
        component="div"
        count={files.length}
        page={page}
        onPageChange={(event, newPage) => setPage(newPage)}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={(event) => {
          setRowsPerPage(parseInt(event.target.value, 10));
          setPage(0);
        }}
        sx={{ textAlign: "center" }}
      />
      
      {/* elevation ile gölgelendirme */}
      <Paper elevation={9}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">
                <strong>S.N</strong>
              </TableCell>
              <TableCell align="center">
                <strong>Folder Name</strong>
              </TableCell>
              <TableCell align="center">
                <strong>Type</strong>
              </TableCell>
              <TableCell align="center">
                <strong>Size (Kbyte)</strong>
              </TableCell>
              <TableCell align="center">
                <strong>Status</strong>
              </TableCell>
              <TableCell align="center">
                <strong>Detail</strong>
              </TableCell>
              <TableCell align="center">
                <strong>Action</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? files.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : files
            ).map((file, index) => (
              <React.Fragment key={index}>
                <TableRow>
                  <TableCell align="center">
                    {index + 1 + page * rowsPerPage}
                  </TableCell>
                  <TableCell align="center">{file.name}</TableCell>
                  <TableCell align="center">{file.type}</TableCell>
                  <TableCell align="center">{file.size}</TableCell>
                  <TableCell align="center">
                    {file.scanResult === "CLEAR" ? (
                      <CheckCircleIcon sx={{ color: "green" }} />
                    ) : (
                      <CancelIcon sx={{ color: "red" }} />
                    )}
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => {
                        if (resultDetail[index]) {
                          hideRow(index);
                        } else {
                          viewResult(file.url, index);
                        }
                      }}
                    >
                      {resultDetail[index] ? "Hide" : "Show"}
                    </Button>
                  </TableCell>
                  <TableCell align="center">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Button
                        variant="outlined"
                        color="error"
                        onClick={() => deleteFile(file.url)}
                        startIcon={<DeleteIcon />}
                      >
                        Sil
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                {resultDetail[index] && (
                  <TableRow>
                    <TableCell colSpan={7} align="center">
                      {resultDetail[index]}
                    </TableCell>
                  </TableRow>
                )}
              </React.Fragment>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={7} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}
