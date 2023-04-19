import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import "./WorkerTable.css";
const columns1 = [
  {
    id: "Name",
    label: "Name",
    minWidth: 200,
    align: "left",
  },
  {
    id: "Address",
    label: "Address",
    minWidth: 200,
    align: "left",
  },
  {
    id: "Contact",
    label: "Contact",
    minWidth: 200,
    align: "left",
  },
  {
    id: "EmergencyContact",
    label: "EmergencyContact",
    minWidth: 200,
    align: "left",
  },
  {
    id: "CreatedOn",
    label: "CreatedOn",
    minWidth: 200,
    align: "right",
  },
  {
    id: "LastModifiedOn",
    label: "LastModifiedOn",
    minWidth: 200,
    align: "right",
  },
];

const formatAddress = function (streetAddress, city, postalCode) {
  let addressObj = {
    ["Street Address"]: streetAddress,
    ["City"]: city,
    ["Postal Code"]: postalCode,
  };
  return Object.keys(addressObj)
    .map((key) => {
      return addressObj[key] ? `${key}:${addressObj[key]}` : null;
    })
    .filter((data) => data !== null)
    .join("\n");
};
const formatContacts = function (...contacts) {
  console.log(contacts);
  return contacts
    .map((contact) => contact)
    .filter((data) => data !== null && data !== "")
    .join(", ");
};

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: name
      .split(" ")
      .map((n) => n.charAt(0).toUpperCase())
      .join(""),
  };
}

function getAvatar(name) {
  return <Avatar {...stringAvatar(name)} />;
}
export default function WorkersTable({ workersData }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  let newData = workersData.map((d) => {
    return {
      Id: d.Id,
      Active: d.Active,
      Name: d.FirstName.concat(" ").concat(d.LastName),
      JobTitle: d.JobTitle,
      EmployerId: d.EmployerId,
      Address:
        formatAddress(d.StreetAddress, d.City, d.PostalCode) ||
        "Address not found",
      Contact:
        formatContacts(d.MobileNumber, d.PhoneNumber) || "Contacts not found",
      EmployeeNumber: d.EmployeeNumber,
      EmergencyContact:
        formatContacts(d.EmergencyContact1, d.EmergencyContact2) ||
        "Emergency Contacts not found",
      EmergencyNotes: d.EmergencyNotes,
      CreatedOn: d.CreatedOn,
      LastModifiedOn: d.LastModifiedOn,
    };
  });
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "90%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="workers table">
          <TableHead>
            <TableRow role="checkbox" tabIndex={-1}>
              {columns1.map((column, idx) => (
                <TableCell
                  style={{
                    zIndex: idx === 0 && 4,
                    position: idx === 0 ? "sticky" : "",
                    left: 0,
                    boxShadow:
                      idx === 0 && `16px 0 16px -16px rgba(0,0,0,0.1) inset`,
                    // background: idx === 0 ? "grey" : "white",
                    minWidth: column.minWidth,
                  }}
                  key={column.id}
                  align={column.align}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {newData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                console.log(row, index);
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.Id}>
                    {columns1.map((column, idx) => {
                      const value = row[column.id];
                      return (
                        <TableCell
                          style={{
                            position: idx === 0 ? "sticky" : "",
                            left: 0,
                            boxShadow:
                              idx === 0 &&
                              `16px 0 16px -16px rgba(0,0,0,0.1) inset`,
                          }}
                          key={column.id}
                          align={column.align}
                        >
                          <div
                            style={{
                              display: "flex",
                            }}
                          >
                            {idx === 0 && <div>{getAvatar(value)}</div>}
                            <p
                              style={{
                                display: "flex",
                                alignItems: "center",
                                margin: "0 0 0 10px",
                              }}
                            >
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </p>
                          </div>
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
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={newData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
