import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Logo from "@/images/svg/log.svg?react";

import { FC } from "react";

const Label: FC = () => {
  return (
    <List
      sx={{
        bgcolor: "#fff",
        p: "0.625rem",
        boxShadow: "0px 0.25rem 0.25rem 0px rgba(0, 0, 0, 0.25);",
        "& .MuiListItemButton-root:hover": {
          bgcolor: "transparent",
          "&, & .MuiListItemIcon-root": {
            color: "transparent",
          },
        },
      }}
    >
      <ListItemButton sx={{ p: 0 }}>
        <Avatar
          sx={{
            textTransform: "uppercase",
            width: "2.625rem",
            height: "2.625rem",
            bgcolor: "#072659",
          }}
        >
          ф
        </Avatar>
        <Grid container direction="column" sx={{ ml: "1rem", p: 0 }}>
          <Grid>
            <Typography
              variant="body1"
              component="span"
              sx={{ textTransform: "uppercase" }}
            >
              Название фирмы
            </Typography>
          </Grid>

          <Grid>
            <Typography variant="body1" component="p">
              Лоскутникова В.П.
            </Typography>
          </Grid>
        </Grid>
      </ListItemButton>

      <ListItem sx={{ mt: "0.624rem", mb: "0.3125rem", p: 0 }}>
        <Divider
          sx={{
            bgcolor: "#072659",
            width: "100%",
            height: "0.0625rem",
            border: 0,
          }}
        />
      </ListItem>

      <ListItemButton sx={{ p: 0 }}>
        <Logo width={"2.625rem"} height={"2.625rem"} />
        <Typography
          variant="body1"
          component="span"
          sx={{ textTransform: "uppercase", ml: "0.625rem" }}
        >
          Складской учет
        </Typography>
      </ListItemButton>
    </List>
  );
};

export default Label;
