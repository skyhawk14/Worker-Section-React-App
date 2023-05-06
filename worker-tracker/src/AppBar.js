import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./firebase/setup";
function WebsiteAppBar() {
  const navItems = ["Show All Workers", "Create Worker"];
  const navigate = useNavigate();
  const url = {
    [navItems[0]]: "/",
    [navItems[1]]: "/create",
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        style={{
          background: "rgb(85,119,210)",
          opacity: "1",
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Link
              to={`/`}
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "24px",
                fontWeight: "600",
                marginRight: "10px",
              }}
            >
              WorkersApp
            </Link>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff" }}>
                <Link
                  to={url[item]}
                  style={{
                    textDecoration: "none",
                    color: "white",
                    fontSize: "18px",
                    fontWeight: "600",
                    marginRight: "10px",
                  }}
                >
                  {item}
                </Link>
              </Button>
            ))}
            <Button
              sx={{ color: "#fff" }}
              onClick={(e) => {
                debugger;

                signOut(auth)
                  .then(() => {
                    console.log("User logged out successfully");
                    return navigate("/login");
                  })
                  .catch((err) => {
                    console.log("Error occured while doing logout", err);
                  });
              }}
            >
              <span
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "18px",
                  fontWeight: "600",
                  marginRight: "10px",
                }}
              >
                Log Out
              </span>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default WebsiteAppBar;
