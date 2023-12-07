import { FC } from "react";
import { Box, Divider } from "@mui/material";
import BarSelect from "../BarSelect/BarSelect";
import BarLinks from "../BarLinks/BarLinks";

const BarContent: FC = () => {
  return (
    <Box sx={{ mt: "1rem" }}>
      <BarSelect />

      <Divider
        sx={{
          bgcolor: "#657A9D",
          width: "100%",
          height: "0.0625rem",
          mt: "0.625rem",
          mb: "0.625rem",
          border: 0,
        }}
      />

      <BarLinks />
    </Box>
  );
};

export default BarContent;
