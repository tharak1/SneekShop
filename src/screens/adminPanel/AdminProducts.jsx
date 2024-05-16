import React from 'react'
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../theme";
import { mockDataContacts } from "./mockData";
// import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { useSelector } from 'react-redux';
import { getProducts } from '../../redux/productsSlice';

const AdminProducts = () => {
  const temp = useSelector(getProducts);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 1 },
    {
      field: "title",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "CoverimageUrl",
      headerName: "Image",
      type: "image",
      headerAlign: "left",
      align: "left",
      // flex:0.5,
      height:150,
      renderCell: (params) => <img src={params.value} className="h-full"/>,
    },
    {
      field: "price",
      headerName: "Price",
      flex: 1,
    },
    {
      field: "category",
      headerName: "Category",
      flex: 1,
    },
    {
      field: "description",
      headerName: "Description",
      flex: 0.5,
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
  ];

  return (
    <div className="h-screen">
      <Box
        m="40px 0 0 0"
        height="80vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
            color:"#FFFFFF"
          },
          "& .name-column--cell": {
            color: "#FFFFFF",
          },
          "& .MuiDataGrid-columnHeaderContainer": {
            backgroundColor: "rgb(31, 41 ,55)",
            // color:"#FFFFFF",
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "rgb(31, 41 ,55)",
            // color:"#FFFFFF",
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: "rgb(31, 41 ,55)",
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
            borderBottomRightRadius:"5px",
            borderBottomLeftRadius:"5px"
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${"#FFFFFF"} !important`,
            marginBottom:"10px"
          },
        }}
      >
        <DataGrid
          rows={temp.items}
          columns={columns}
          slots={{ toolbar: GridToolbar }}
          sx={{
            ".data-grid-header": {
              backgroundColor: "rgb(31, 41, 55)",
            },
          }}
        />
      </Box>
    </div>
  );
}

export default AdminProducts
