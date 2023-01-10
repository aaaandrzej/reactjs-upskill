import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { Info as InfoIcon, Close as CloseIcon } from "@mui/icons-material";

import strings from "../../strings.json";

export const Info = () => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div>
      <InfoIcon
        onClick={() => {
          setShowInfo(true);
        }}
      />
      <Modal setShowInfo={setShowInfo} isShown={showInfo} />
    </div>
  );
};
export const Modal = ({ setShowInfo, isShown }) => {
  if (!isShown) return null;
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
        data-testid="closeButton"
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
