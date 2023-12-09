import { FC, FormEvent, useCallback, useEffect, useState } from "react";
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
import { useDebounce } from "@uidotdev/usehooks";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "@/hooks/hook";
import { axs } from "@/api/axs/response";
import { setGoods, setPages } from "@/store/appSlice";

const Head: FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const { city, menu } = useParams();
  const dispatch = useAppDispatch();

  const handleInput = async (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value } = event.target as HTMLInputElement;
    setSearchTerm(value);
  };

  const fetch = useCallback(async () => {
    try {
      const response = await axs.get(
        `/filial/${city}/${menu}/?limit=5&page=1&name=${debouncedSearchTerm}`
      );
      dispatch(setGoods(response.data.data));
      dispatch(setPages(response.data.max_pages));
    } catch (error) {
      dispatch(setGoods(null));
      dispatch(setPages(null));
    }
  }, [city, debouncedSearchTerm, dispatch, menu]);

  useEffect(() => {
    fetch();
  }, [debouncedSearchTerm, fetch]);

  return (
    <TableHead>
      <TableRow>
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
