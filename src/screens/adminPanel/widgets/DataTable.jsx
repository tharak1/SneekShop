import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../../redux/productsSlice';





function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function CustomizedTables() {
  const dispatch = useDispatch();
  const temp = useSelector(getProducts);
  

    const theme1 = useTheme();
    const colors = tokens(theme1.palette.mode);


    const StyledTableCell = styled(TableCell)(({ theme }) => ({

        [`&.${tableCellClasses.head}`]: {
      
          backgroundColor: "rgb(31, 41 ,55)",
          color: "#FFFFFF",
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
          color: "#FFFFFF",

        },
      }));
      
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: "#525252",
          color: "#FFFFFF",
          

        },
        '&:nth-of-type(even)': {
            backgroundColor: "#3d3d3d",
          color: "#FFFFFF",

          },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));










  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell >Id</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Image</StyledTableCell>
            <StyledTableCell align="right">Category</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {temp.items.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="right">{row.title}</StyledTableCell>
              <StyledTableCell align="right"> <div className="flex justify-end"><img src={row.CoverimageUrl} alt="x" className="h-20"/></div> </StyledTableCell>
              <StyledTableCell align="right">{row.category}</StyledTableCell>
              <StyledTableCell align="right">{row.price}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
