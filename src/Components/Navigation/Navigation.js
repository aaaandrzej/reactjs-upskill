import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export const Navigation = () => (
  <nav>
    <LinkButton to="/" label="Invoices"></LinkButton>
    <LinkButton to="/create" label="Add New Invoice"></LinkButton>
  </nav>
);

const LinkButton = ({ to, label }) => {
  return (
    <Button component={Link} to={to}>
      {label}
    </Button>
    // TODO refactor this to look more like
    //     <Link to={to}>
    //     <Button>
    //       {label}
    //     </Button>
    //     </Link>
  );
};
