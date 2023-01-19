import React, { useState, FC } from "react";
import { Box, Typography } from "@mui/material";
import { Info as InfoIcon, Close as CloseIcon } from "@mui/icons-material";

import strings from "../../strings.json";

export const Info = () => {
  const [showInfo, setShowInfo] = useState(false);
  const handleSetShowInfo = (newState: boolean) => {
    setShowInfo(newState);
  };
  return (
    <div>
      <InfoIcon
        onClick={() => {
          setShowInfo(true);
        }}
      />
      <Modal setShowInfo={handleSetShowInfo} isShown={showInfo} />
    </div>
  );
};

interface ModalProps {
  setShowInfo: (newState: boolean) => void;
  isShown: boolean;
}

export const Modal: FC<ModalProps> = ({ setShowInfo, isShown }) => {
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
