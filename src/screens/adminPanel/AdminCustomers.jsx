import React from 'react'
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../theme";
import { mockDataContacts } from "./mockData";
// import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { useSelector } from 'react-redux';
import { getAllUsers } from '../../redux/adminUsersFetch';



const AdminCustomers = () => {
  const customers = useSelector(getAllUsers);


  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "uid", headerName: "ID", flex: 1 },
    {
      field: "username",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
      flex: 1,
    },
    {
      field: "date",
      headerName: "Date Joined",
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
          rows={customers}
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

export default AdminCustomers
