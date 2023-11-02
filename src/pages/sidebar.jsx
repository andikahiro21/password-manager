import { useState } from "react";
import "../styles/sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import HomeeIcon from "/./home.svg";
import PasswordIcon from "/./password.svg";
import HttpsIcon from "@mui/icons-material/Https";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FolderIcon from "@mui/icons-material/Folder";
import ImageIcon from "@mui/icons-material/Image";
import DescriptionIcon from "@mui/icons-material/Description";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function Sidebar() {
  const [open, setState] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }

    setState(open);
  };
  return (
    <div className="navigation">
      <div className="hamburger">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer(true)}
          sx={{
            mr: 2,
            display: {
              xs: "block",
              sm: "none",
            },
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer anchor="left" open={open} onClose={toggleDrawer(false)} onOpen={toggleDrawer(true)}>
          <Box
            sx={{
              p: 2,
              height: 1,
              backgroundColor: "#dbc8ff",
            }}
          >
            <IconButton sx={{ mb: 2 }}>
              <CloseIcon onClick={toggleDrawer(false)} />
            </IconButton>

            <Divider sx={{ mb: 2 }} />

            <Box sx={{ mb: 2 }}>
              <Link className="linkNone" to="/">
                <ListItemButton>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItemButton>
              </Link>

              <Link className="linkNone" to="/add-password">
                <ListItemButton>
                  <ListItemIcon>
                    <HttpsIcon sx={{ color: "primary.main" }} />
                  </ListItemIcon>
                  <ListItemText primary="Add Password" />
                </ListItemButton>
              </Link>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                position: "absolute",
                bottom: "0",
                left: "50%",
                transform: "translate(-50%, 0)",
              }}
            ></Box>
          </Box>
        </Drawer>
      </div>
      <div className="sidebar">
        <Link className="linkNone" to="/">
          <h1>Password Manager</h1>
        </Link>
        <ul>
          <Link className="linkNone" to="/">
            <li>
              <img src={HomeeIcon} alt="" />
              Home
            </li>
          </Link>
          <Link className="linkNone" to="/add-password">
            <li>
              <img src={PasswordIcon} alt="" />
              Add Password
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
