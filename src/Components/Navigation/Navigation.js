import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

// TODO extract RouteItems to a function like below so it can be used with different nodes
// export const RouteItems = ({routes}) => (
//     Object.values(routes).map(({ route, label }) => (
//      <Link to={route} label={label} key={route}>
//      *children*
//      </Link>
//     ))
// );

// const LinkButton = ({ to, label }) => {
//   return (
//     <Link to={to}>
//       <Button>{label}</Button>
//     </Link>
//   );
// };

const siteName = "Księgowość Kogucik";

export function Navigation({ routes }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Narrow view */}
          <MonetizationOnIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {siteName}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {Object.values(routes).map(({ route, label }) => (
                // TODO 1 fix styling as it's lost now
                // TODO 2 extract route mapping to a function
                <Link to={route} key={label}>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{label}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>

          {/* Wide view */}
          <MonetizationOnIcon
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {siteName}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {Object.values(routes).map(({ route, label }) => (
              // TODO 2 extract route mapping to a function
              <Link to={route} key={label}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                  key={label}
                >
                  {label}
                </Button>
              </Link>
            ))}
          </Box>
          <Info />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

const Info = () => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setShowInfo(true);
        }}
      >
        I
      </button>
      {showInfo && (
       <Modal setShowInfo={setShowInfo} />
      )}
    </div>
  );
};

const Modal = ({setShowInfo}) => {
  return (
     <Box
          sx={{
            position: "fixed",
            top: "50%",
            left: "50%",
            width: "50%",
            height: "50%",
            background: "red",
            transform: "translate(-50%, -50%)",
          }}
        >
          Info{" "}
          <button
            onClick={() => {
              setShowInfo(false);
            }}
          >
            Close
          </button>
        </Box>
  )
}