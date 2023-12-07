import { FC } from "react";
import {
  TableHead,
  TableRow,
  TableCell,
  TextField,
  Typography,
  Autocomplete,
} from "@mui/material";
import style from "./Head.module.scss";
import { sxField, fields, sxCell, active } from "./script";
import Icon from "@/images/svg/v.svg?react";
import { sx } from "@/components/barBlock/BarComboBox/style";

const Head: FC = () => {
  const handleInput = () => {
    console.log("ghjghj");
  };

  return (
    <TableHead>
      <TableRow sx={{ width: "80%", display: "block" }}>
        {fields.map(({ name, label }, i) => (
          <TableCell align="left" key={i} sx={sxCell}>
            <TextField
              name={name}
              className={style.field}
              label={label}
              inputProps={{
                className: style.input,
                onInput: handleInput,
              }}
              InputLabelProps={{
                className: style.label,
              }}
              sx={sxField}
            />
          </TableCell>
        ))}

        <TableCell sx={sxCell}>
          <Autocomplete
            disablePortal
            isOptionEqualToValue={(option, value) => option.id === value.id}
            defaultValue={active[0]}
            popupIcon={<Icon width={"0.5rem"} height={"1rem"} />}
            options={active}
            renderInput={(params) => (
              <TextField
                {...params}
                InputProps={{
                  ...params.InputProps,
                  className: style.complite,
                }}
              />
            )}
            sx={sx}
          />
        </TableCell>

        <TableCell sx={sxCell}>
          <Typography
            sx={{ color: "#657a9d" }}
            variant="body1"
            component="span"
          >
            Экспорт
          </Typography>
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

export default Head;
