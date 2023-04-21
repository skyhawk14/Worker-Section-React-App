import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { data as workersData } from "./data";
import WorkerCard from "./worker-card";

export default function WorkersGrid() {
  let newData = workersData.map((d) => {
    return {
      id: d.Id,
      isActive: d.Active,
      fName: d.FirstName,
      lName: d.LastName,
      jobTitle: d.JobTitle,
      postalCode: d.PostalCode,
      mobileNumber: d.MobileNumber,
      phoneNumber: d.PhoneNumber,
      employeeNumber: d.EmployeeNumber,
      createdOn: d.CreatedOn,
      streetAddress: d.StreetAddress,
      city: d.City,
      postalCode: d.PostalCode,
    };
  });
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {newData.map((workerData) => (
          <WorkerCard workerData={workerData} />
        ))}
      </Grid>
    </Box>
  );
}
