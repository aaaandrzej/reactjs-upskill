import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export const Navigation = (routes) => (
  <nav>
    {routes.map(({ route, label }) => (
      <LinkButton to={route} label={label} key={route} />
    ))}
  </nav>
);

const LinkButton = ({ to, label }) => {
  return (
    <Link to={to}>
      <Button>{label}</Button>
    </Link>
  );
};
