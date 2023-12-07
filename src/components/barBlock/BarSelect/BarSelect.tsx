import { Box, Typography } from "@mui/material";
import { FC } from "react";
import BarComboBox from "../BarComboBox/BarComboBox";

const BarSelect: FC = () => {
  return (
    <Box>
      <Typography
        variant="body2"
        component="p"
        sx={{ color: "#657A9D", mb: "0.3125rem" }}
      >
        Филиалы
      </Typography>
      <BarComboBox />
    </Box>
  );
};

export default BarSelect;
