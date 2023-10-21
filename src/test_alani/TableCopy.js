 /* <TableBody>
          {(rowsPerPage > 0
            ? files.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : files
          ).map((file, index) => (
            <React.Fragment key={index}>
              <TableRow>
                <TableCell>{index + 1 + page * rowsPerPage}</TableCell>
                <TableCell>{file.name}</TableCell>
                <TableCell>{file.type}</TableCell>
                <TableCell>{file.size}</TableCell>
                <TableCell>
                  {file.scanResult === "CLEAR" ? (
                    <CheckCircleIcon sx={{ color: "green" }} />
                  ) : (
                    <CancelIcon sx={{ color: "red" }} />
                  )}
                </TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => {
                      if (accordionContent[index]) {
                        hideAccordion(index);
                      } else {
                        viewResult(file.url, index);
                      }
                    }}
                  >
                    {accordionContent[index] ? "Hide" : "Show"}
                  </Button>
                  {accordionContent[index] && (
                    <div>
                      <CustomAccordion content={accordionContent[index]} />
                    </div>
                  )}
                </TableCell>
                <TableCell>
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
            </React.Fragment>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody> */