import React, { useState } from "react";
import { TextField, Button, Stack } from "@mui/material";
import { Form, useNavigate } from "react-router-dom";
import uniqid from "uniqid";
import { createWorker } from "./utils/api";
import "./create-worker.css";
const CreateWorker = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [jobtitle, setJobtitle] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [mobileNumber, setMobilenumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emergencyNumber1, setEmergency1] = useState("");
  const [emergencyNumber2, setEmergency2] = useState("");
  const [emergencyNotes, setEmergencyNotes] = useState("");
  const navigate = useNavigate();
  const submitHandler = async function () {
    let workerObj = {
      FirstName: firstName,
      LastName: lastName,
      JobTitle: jobtitle,
      StreetAddress: streetAddress,
      City: city,
      PostalCode: postalCode,
      MobileNumber: mobileNumber,
      PhoneNumber: phoneNumber,
      DateHired: new Date(),
      Position: "worker",
      EmployeeNumber: uniqid(),
      EmergencyContact1: emergencyNumber1,
      EmergencyContact2: emergencyNumber2,
      EmergencyNotes: emergencyNotes,
    };
    let workerId = await createWorker(workerObj);
    return navigate(`/workers/${workerId}`);
  };
  return (
    <Form
      method="post"
      action="/events"
      style={{
        marginLeft: "20px",
        width: "90vw",
      }}
      onSubmit={(event) => {
        event.preventDefault();
        submitHandler();
      }}
    >
      <h1
        style={{
          fontWeight: 600,
        }}
      >
        Create Worker
      </h1>
      <Stack spacing={1} direction="row" sx={{ marginBottom: 2 }}>
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
        sx={{ mb: 2 }}
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
        sx={{ mb: 2 }}
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
        sx={{ mb: 2 }}
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
        sx={{ mb: 2 }}
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
        sx={{ mb: 2 }}
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
        sx={{ mb: 2 }}
      />
      <TextField
        type="text"
        variant="outlined"
        color="secondary"
        label="Emergency Contact1"
        onChange={(e) => setEmergency1(e.target.value)}
        value={emergencyNumber1}
        fullWidth
        required
        sx={{ mb: 2 }}
      />
      <TextField
        type="text"
        variant="outlined"
        color="secondary"
        label="Emergency Contact2"
        onChange={(e) => setEmergency2(e.target.value)}
        value={emergencyNumber2}
        fullWidth
        required
        sx={{ mb: 2 }}
      />
      <TextField
        type="text"
        variant="outlined"
        color="secondary"
        label="Emergency Notes"
        onChange={(e) => setEmergencyNotes(e.target.value)}
        value={emergencyNotes}
        fullWidth
        required
        sx={{ mb: 2 }}
      />
      <Button
        variant="outlined"
        color="primary"
        type="submit"
        style={{
          backgroundColor: "orange",
          color: "white",
        }}
        className="registerButton"
      >
        Register
      </Button>
    </Form>
  );
};

export default CreateWorker;
