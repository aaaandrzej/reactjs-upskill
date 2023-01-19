import React, { useState } from "react";
import type { MouseEvent } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  MenuItem,
  Button,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
} from "@mui/material";
import {
  MonetizationOn as MonetizationOnIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";

import strings from "../../strings.json";
import { Info } from "./Info";

interface NavigationProps {
  routes: Routes;
}

interface RouteItemsProps {
  routes: Routes;
  wide: boolean;
}

interface LinkVariantProps {
  label: string;
  wide: boolean;
}

interface Route {
  route: string;
  label: string;
}

interface Routes {
  add: Route;
  list: Route;
}

export function Navigation({ routes }: NavigationProps) {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const RouteItems = ({ routes, wide }: RouteItemsProps) =>
    Object.values(routes).map(({ route, label }: Route) => (
      <Link to={route} label={label} key={route}>
        <LinkVariant label={label} wide={wide} />
      </Link>
    ));

  const LinkVariant = ({ label, wide }: LinkVariantProps) => {
    if (wide)
      return (
        <Button
          onClick={handleCloseNavMenu}
          sx={{ my: 2, color: "white", display: "block" }}
          key={label}
        >
          {label}
        </Button>
      );
    else
      return (
        <MenuItem onClick={handleCloseNavMenu}>
          <Typography textAlign="center">{label}</Typography>
        </MenuItem>
      );
  };

  return (
    <AppBar position="static" className="fixed-height-appbar-wrapper">
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
            {strings.siteName}
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
              <RouteItems routes={routes} wide={false} />
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
            {strings.siteName}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <RouteItems routes={routes} wide={true} />
          </Box>
          <Info />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
