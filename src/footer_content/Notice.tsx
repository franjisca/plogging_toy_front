import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import React from "react";

interface Column {
    id: '작성자' | '제목' | '작성일';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
  }
  
  const columns: Column[] = [
    { id: '작성자', label: '작성자'},
    { id: '제목', label: '제목', minWidth: 200 },
    {
      id: '작성일',
      label: '작성일',
      align:'right',
      minWidth: 170,
    },
  ];
  
  interface Data {
    작성자 : string;
    제목: string;
    작성일: string;
  }
  
  function createData(
    작성자: string,
    제목: string,
    작성일: string,
  ): Data {
    return { 작성자, 제목, 작성일};
  }
  
  const rows = [
    createData('admin', '안녕하세요', '2024.05.12'),
  ];

const Notice = () =>{      

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
    const handleChangePage = (event: unknown, newPage: number) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
  

    return <div className="main_contents">
        <div className="meeting-area">
            <div className="fix-text-area">
                <h1 className="color-darkgray">공지사항</h1>
            </div>
            <Paper sx={{ width: '100%', marginTop: '3vh' }}>
      <TableContainer sx={{ height: '63vh' }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={5}>
                올라온 공지사항을 필독해주세요!
              </TableCell>
            </TableRow>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 57, minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.제목}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}
                        onClick={() => alert("게시글을 클릭하였습니다.")}
                        >
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 15, 20, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
            
        </div>
    
    </div>
}

export default Notice;