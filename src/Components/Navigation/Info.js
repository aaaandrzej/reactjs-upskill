import React, { useState } from "react";
import Box from "@mui/material/Box";
import InfoIcon from "@mui/icons-material/Info";
import CloseIcon from "@mui/icons-material/Close";
import strings from "../../strings.json";
import { Typography } from "@mui/material";

export const Info = () => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div>
      <InfoIcon
        onClick={() => {
          setShowInfo(true);
        }}
      />
      {showInfo && <Modal setShowInfo={setShowInfo} />}
    </div>
  );
};
const Modal = ({ setShowInfo }) => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: "50%",
        left: "50%",
        width: "50%",
        height: "50%",
        background: "gray",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Typography sx={{ margin: "5%" }}>{strings.loremIpsum}</Typography>

      <CloseIcon
        onClick={() => {
          setShowInfo(false);
        }}
        sx={{
          position: "fixed",
          top: "0%",
          right: "0%",
        }}
      />
    </Box>
  );
};
