import { FC } from "react";
import Label from "../Label/Label";
import { Box } from "@mui/material";
import BarContent from "../BarContent/BarContent";

const Bar: FC = () => {
  return (
    <Box sx={{ p: 0 }}>
      <Label />
      <BarContent />
    </Box>
  );
};

export default Bar;
