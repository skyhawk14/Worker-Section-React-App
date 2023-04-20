import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import "./worker-card.css";
import PhoneIcon from "@mui/icons-material/Phone";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import SignpostIcon from "@mui/icons-material/Signpost";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import Button from "@mui/material/Button";
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

export default function WorkerCard({ workerData }) {
  return (
    <Card
      sx={{ maxWidth: 345, height: 345, margin: "30px" }}
      className="workerCard"
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          height: "100%",
        }}
      >
        <div
          style={{
            height: "100%",
            display: "flex",
            marginTop: "40px",
            width: "30vw",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            style={{
              width: "60px",
              height: "60px",
            }}
            {...stringAvatar(workerData.fName.concat(workerData.lName))}
          />
        </div>
        <div
          className="cardData"
          style={{
            height: "100%",
            display: "flex",
            width: "60vw",
            marginTop: "40px",
            flexDirection: "column",
          }}
        >
          <p>
            {workerData.fName}&nbsp;{workerData.lName}
          </p>
          <p>{workerData.jobTitle}</p>
          <p className="phoneNumber">
            <PhoneIcon />
            <span>{workerData.mobileNumber}</span>
          </p>
          <p className="mobileNumber">
            <PhoneAndroidIcon />
            <span>{workerData.phoneNumber}</span>
          </p>
          <div className="address">
            <p>
              <SignpostIcon />
              <span>{workerData.streetAddress}</span>
            </p>
            <p>
              <LocationCityIcon />
              <span>{workerData.city}</span>
            </p>
            <p>
              <LocalPostOfficeIcon />
              <span>{workerData.postalCode}</span>
            </p>
          </div>
          <Button
            style={{
              width: "150px",
              marginTop: "20px",
            }}
            variant="outlined"
          >
            Show More
          </Button>
        </div>
      </div>
    </Card>
  );
}
