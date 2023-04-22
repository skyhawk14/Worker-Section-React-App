import { Outlet, useLoaderData } from "react-router-dom";
import WebsiteAppBar from "../AppBar";
import { forwardRef, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function MainApp() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <WebsiteAppBar />
      <div
        id="detail"
        style={{
          marginTop: "50px",
        }}
      >
        <Outlet />
      </div>
    </>
  );
}
