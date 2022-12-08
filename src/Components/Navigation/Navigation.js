import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { RoutePaths } from "../../App";

export const Navigation = () => (
  <nav>
    <LinkButton to={RoutePaths["list"]} label="Invoices"></LinkButton>
    <LinkButton to={RoutePaths["add"]} label="Add New Invoice"></LinkButton>
  </nav>
);

const LinkButton = ({ to, label }) => {
  return (
    <Link to={to}>
      <Button>{label}</Button>
    </Link>
  );
};
