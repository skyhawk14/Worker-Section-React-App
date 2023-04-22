import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import WorkerCard from "./worker-card";

export default function WorkersGrid({ workersData }) {
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
    <Box
      sx={{ flexGrow: 1 }}
      style={{
        overflow: "scroll",
        height: "80vh",
      }}
    >
      {newData.length > 0 ? (
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {newData.map((workerData) => (
            <WorkerCard key={workerData.id} workerData={workerData} />
          ))}
        </Grid>
      ) : (
        <>No Data Found</>
      )}
    </Box>
  );
}
