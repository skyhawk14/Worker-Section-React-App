import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function WebsiteAppBar() {
  const navItems = ["Show All Workers", "Create Worker"];

  const url = {
    [navItems[0]]: "/workers",
    [navItems[1]]: "/workers/create",
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
              to={`/workers`}
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
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default WebsiteAppBar;
