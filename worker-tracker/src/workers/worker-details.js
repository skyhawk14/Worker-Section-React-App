import Avatar from "@mui/material/Avatar";
import PhoneIcon from "@mui/icons-material/Phone";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import "./worker-details.css";
import { useParams } from "react-router-dom";
import { getWorker } from "./utils/api";
import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import DoneIcon from "@mui/icons-material/Done";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  // textAlign: "center",
  color: theme.palette.text.secondary,
}));

function stringToColor(string = "") {
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

function stringAvatar(name = "") {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children:
      name !== ""
        ? name
            .split(" ")
            .map((n) => n.charAt(0).toUpperCase())
            .join("")
        : "U",
  };
}
export default function WorkerDetails() {
  const { workerId } = useParams();
  console.log(workerId);
  const [workerData, setWorkerData] = useState({});

  useEffect(() => {
    async function loadWorker(workerId) {
      try {
        let res = await getWorker(workerId);
        setWorkerData(res.data);
      } catch (err) {
        loadWorker(workerId);
      }
    }
    loadWorker(workerId);
  }, []);
  const [isDone, setIsDone] = useState(true);
  return Object.keys(workerData).length > 0 ? (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={2}
        style={{
          // height: "100vh",
          // width: "100vw",
          justifyContent: "center",
          alignContent: "center",
          padding: "20px",
          margin: "0",
          border: "50px solid rgb(31,144,234)",
          borderRadius: "40px",
        }}
      >
        <Grid item xs={12} md={12}></Grid>
        <Grid item xs={12} md={4}>
          <div className="profilePageContainer">
            <Avatar
              className="avatar"
              style={{
                height: "150px",
                width: "150px",
                outline: "4px solid gray",
                margin: "30px",
                padding: "30px",
                color: "black",
                fontWeight: "600",
                fontSize: "18px",
              }}
              {...stringAvatar(
                workerData.FirstName?.concat(workerData.LastModifiedOn)
              )}
            />
            <p>
              <span className="workerId">{workerData.EmployerId}</span>
              <span>
                {isDone ? (
                  <ContentCopyIcon
                    className="copyIcon"
                    onClick={() => {
                      navigator.clipboard.writeText(workerData.EmployerId);
                      setIsDone(false);
                      setTimeout(() => {
                        setIsDone(true);
                      }, 3000);
                    }}
                  />
                ) : (
                  <DoneIcon />
                )}
              </span>
            </p>
          </div>
        </Grid>
        <Grid item xs={12} md={8}>
          <div className="profileDataContainer">
            <div>
              <p
                style={{
                  fontSize: "24px",
                  fontWeight: "800",
                  // color: "rgb(1,174,239)",
                }}
              >
                <span>Name</span>
                {workerData.FirstName} {workerData.LastName}
              </p>
              <p>
                <span>Job Title</span>
                {workerData.JobTitle}
              </p>
            </div>
            <hr className="hr" />
            <div
              className="contact"
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div>
                <span>Contact Information</span>
              </div>
              <div style={{}}>
                <p
                  className="phoneNueNumer"
                  style={{
                    color: "rgb(1,174,239)",
                  }}
                >
                  <PhoneIcon />
                  <span>{workerData.MobileNumber}</span>
                </p>
                <p
                  className="mobileNumber"
                  style={{
                    color: "rgb(1,174,239)",
                  }}
                >
                  <PhoneAndroidIcon />
                  <span>{workerData.PhoneNumber}</span>
                </p>
              </div>
            </div>
            <hr className="hr" />
            <div
              className="contact"
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "30px",
              }}
            >
              <div>
                <span>Emergency Contacts</span>
              </div>
              <div style={{}}>
                <p
                  className="phoneNueNumer"
                  style={{
                    color: "rgb(1,174,239)",
                  }}
                >
                  <PhoneIcon />
                  <span>{workerData.EmergencyContact1}</span>
                </p>
                <p
                  className="mobileNumber"
                  style={{
                    color: "rgb(1,174,239)",
                  }}
                >
                  <PhoneAndroidIcon />
                  <span>{workerData.EmergencyContact2}</span>
                </p>
              </div>
            </div>
            <hr className="hr" />
            <div className="address">
              <p>Address</p>
              <div>
                <p>Street Address: {workerData.StreetAddress}</p>
                <p>City: {workerData.City}</p>
                <p>Postal Code: {workerData.PostalCode}</p>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </Box>
  ) : (
    // <div className="pageContainer">
    //   <div className="profilePageContainer">
    //     <Avatar
    //       style={{
    //         width: "200px",
    //         height: "200px",
    //         outline: "4px solid gray",
    //         margin: "30px",
    //         padding: "30px",
    //       }}
    //       {...stringAvatar(
    //         workerData.FirstName?.concat(workerData.LastModifiedOn)
    //       )}
    //     />
    //     <p>
    //       <span className="workerId">{workerData.EmployerId}</span>
    //       <span>
    //         <ContentCopyIcon className="copyIcon" />
    //       </span>
    //     </p>
    //   </div>
    //   <div className="profileDataContainer">
    //     <div>
    //       <p>
    //         <span>Job Title</span>
    //         {workerData.JobTitle}
    //       </p>
    //       <p>
    //         <span>Name</span>
    //         {workerData.FirstName} {workerData.LastName}
    //       </p>
    //     </div>
    //     <div
    //       className="contact"
    //       style={{
    //         display: "flex",
    //         flexDirection: "row",
    //       }}
    //     >
    //       <div>
    //         <span>Contact Information</span>
    //       </div>
    //       <div style={{}}>
    //         <p className="phoneNueNumer">
    //           <PhoneIcon />
    //           <span>{workerData.MobileNumber}</span>
    //         </p>
    //         <p className="mobileNumber">
    //           <PhoneAndroidIcon />
    //           <span>{workerData.PhoneNumber}</span>
    //         </p>
    //       </div>
    //     </div>
    //     <div
    //       className="contact"
    //       style={{
    //         display: "flex",
    //         flexDirection: "row",
    //         marginTop: "30px",
    //       }}
    //     >
    //       <div>
    //         <span>Emergency Contacts</span>
    //       </div>
    //       <div style={{}}>
    //         <p className="phoneNueNumer">
    //           <PhoneIcon />
    //           <span>{workerData.EmergencyContact1}</span>
    //         </p>
    //         <p className="mobileNumber">
    //           <PhoneAndroidIcon />
    //           <span>{workerData.EmergencyContact2}</span>
    //         </p>
    //       </div>
    //     </div>
    //     <div className="address">
    //       <p>Address</p>
    //       <div>
    //         <p>Street Address: {workerData.StreetAddress}</p>
    //         <p>City: {workerData.City}</p>
    //         <p>Postal Code: {workerData.PostalCode}</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div>Loading</div>
  );
}
