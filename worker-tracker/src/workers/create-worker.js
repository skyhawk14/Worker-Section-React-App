// export default function CreateWorker() {
//   return (
//     <Form method="post" action="/events">
//       <input type="text" name="title" />
//       <input type="text" name="description" />
//       <button type="submit">Create</button>
//     </Form>
//   );
// }

import React, { useState } from "react";
import { TextField, Button, Container, Stack } from "@mui/material";
import { Link, Form } from "react-router-dom";

const CreateWorker = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [jobtitle, setJobtitle] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [mobileNumber, setMobilenumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <Form method="post" action="/events">
      <h2>Register Form</h2>
      <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
        <TextField
          type="text"
          variant="outlined"
          color="secondary"
          label="First Name"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
          fullWidth
          required
        />
        <TextField
          type="text"
          variant="outlined"
          color="secondary"
          label="Last Name"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
          fullWidth
          required
        />
      </Stack>
      <TextField
        type="text"
        variant="outlined"
        color="secondary"
        label="Job Title"
        onChange={(e) => setJobtitle(e.target.value)}
        value={jobtitle}
        fullWidth
        required
        sx={{ mb: 4 }}
      />
      <TextField
        type="text"
        variant="outlined"
        color="secondary"
        label="Street Address"
        onChange={(e) => setStreetAddress(e.target.value)}
        value={streetAddress}
        fullWidth
        required
        sx={{ mb: 4 }}
      />
      <TextField
        type="text"
        variant="outlined"
        color="secondary"
        label="City"
        onChange={(e) => setCity(e.target.value)}
        value={city}
        fullWidth
        required
        sx={{ mb: 4 }}
      />
      <TextField
        type="text"
        variant="outlined"
        color="secondary"
        label="Postal Code"
        onChange={(e) => setPostalCode(e.target.value)}
        value={postalCode}
        fullWidth
        required
        sx={{ mb: 4 }}
      />
      <TextField
        type="text"
        variant="outlined"
        color="secondary"
        label="Mobile Number"
        onChange={(e) => setMobilenumber(e.target.value)}
        value={mobileNumber}
        fullWidth
        required
        sx={{ mb: 4 }}
      />
      <TextField
        type="text"
        variant="outlined"
        color="secondary"
        label="Phone Number"
        onChange={(e) => setPhoneNumber(e.target.value)}
        value={phoneNumber}
        fullWidth
        required
        sx={{ mb: 4 }}
      />

      <Button variant="outlined" color="secondary" type="submit">
        Register
      </Button>
    </Form>
  );
};

export default CreateWorker;
