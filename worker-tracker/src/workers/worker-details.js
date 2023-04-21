import Avatar from "@mui/material/Avatar";
import PhoneIcon from "@mui/icons-material/Phone";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import "./worker-details.css";

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
    children:
      name !== ""
        ? name
            .split(" ")
            .map((n) => n.charAt(0).toUpperCase())
            .join("")
        : "U",
  };
}
export default function WorkerDetails({ id }) {
  const workerData = {
    Id: "bd7bde62-073b-40f0-ae4e-a4a8336147d0",
    Active: true,
    FirstName: "a",
    LastName: "a",
    JobTitle: "a",
    EmployerId: "629e5a81-fb1c-4b78-9d8d-cd498c677436",
    StreetAddress: "a",
    City: "a",
    PostalCode: "a",
    MobileNumber: "9100679394",
    PhoneNumber: "9100679394",
    DateHired: "2023-03-24T18:30:00",
    EmployeeNumber: "j",
    EmergencyContact1: "9100679394",
    EmergencyContact2: "",
    EmergencyNotes: "",
    CreatedOn: "2023-03-24T20:02:12.493",
    LastModifiedOn: "2023-03-24T20:02:12.87",
    PictureId: null,
  };
  return (
    <div className="pageContainer">
      <div className="profilePageContainer">
        <Avatar
          style={{
            width: "200px",
            height: "200px",
            outline: "4px solid gray",
            margin: "30px",
            padding: "30px",
          }}
          {...stringAvatar(
            workerData.FirstName.concat(workerData.LastModifiedOn)
          )}
        />
        <p>
          <span className="workerId">{workerData.EmployerId}</span>
          <span>
            <ContentCopyIcon className="copyIcon" />
          </span>
        </p>
      </div>
      <div className="profileDataContainer">
        <div>
          <p>
            <span>Job Title</span>
            {workerData.JobTitle}
          </p>
          <p>
            <span>Name</span>
            {workerData.FirstName} {workerData.LastName}
          </p>
        </div>
        <div></div>
        <p className="phoneNueNumer">
          <PhoneIcon />
          <span>{workerData.MobileNumber}</span>
        </p>
        <p className="mobileNumber">
          <PhoneAndroidIcon />
          <span>{workerData.PhoneNumber}</span>
        </p>
        <div className="address">
          <p>Address</p>
          <div>
            <p>Street Address: {workerData.StreetAddress}</p>
            <p>City: {workerData.City}</p>
            <p>Postal Code: {workerData.PostalCode}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
