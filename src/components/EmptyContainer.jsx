import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const EmptyContainer = ({ message = "No Data Available" }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "200px",
        width: "100%",
      }}
    >
      <Typography variant="h6">{message}</Typography>
    </Box>
  );
};

export default EmptyContainer;
