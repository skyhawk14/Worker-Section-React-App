import Avatar from "@mui/material/Avatar";
import PhoneIcon from "@mui/icons-material/Phone";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import "./worker-details.css";
import { useParams } from "react-router-dom";
import { getWorker } from "./utils/api";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import DoneIcon from "@mui/icons-material/Done";
import { stringAvatar } from "./utils/utility";

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
          justifyContent: "center",
          alignContent: "center",
          padding: "20px",
          margin: "0",
          border: "20px solid cadetblue",
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
    // ToDo: loading can be done better and can be handled during routing
    <div>Loading</div>
  );
}
