import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

interface Column {
    id: 'creator' | 'title' | 'createDate';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
  }
  
  const columns: Column[] = [
    { id: 'creator', label: '작성자'},
    { id: 'title', label: '제목', minWidth: 200 },
    {
      id: 'createDate',
      label: '작성일',
      align:'right',
      minWidth: 170,
    },
  ];

const Notice = () =>{      

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState<any>(10);
    const [noticeList, setNoticeList] =  useState<any>([]);
    const navigate = useNavigate();

    const handleChangePage = (event: unknown, newPage: number) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };


    useEffect(() => {
      getNoticeList()
    }, []);

    const getNoticeList = async () => {

      await axios.get("/notice/list")
      .then(
        payload => {
          setNoticeList(payload.data);
          console.log('noticelist', noticeList);
        }
      )
      .catch(e => toast.error("데이터를 가져올 수 없습니다. 다시 시도해주세요"));
    }


    const goToUnitPage = (data: any) => {
      navigate("/notice/board", {state: {data}});
    }

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
            {noticeList
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((unitNotice:any) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={unitNotice.title}>
                    {columns.map((column) => {
                      const value = unitNotice[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}
                        onClick={() =>goToUnitPage(unitNotice)}
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
        count={noticeList.length}
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