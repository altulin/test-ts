import { FC, FormEvent, SyntheticEvent, useCallback, useEffect } from "react";
import {
  TableHead,
  TableRow,
  TableCell,
  TextField,
  Typography,
  Autocomplete,
} from "@mui/material";
import style from "./Head.module.scss";
import {
  sxField,
  fields,
  sxCell,
  active,
  IActive,
  getParams,
  tdStyle,
} from "./script";
import Icon from "@/images/svg/v.svg?react";
import { sx } from "@/components/barBlock/BarComboBox/style";
import { useDebounce } from "@uidotdev/usehooks";
import { useAppDispatch, useAppSelector } from "@/hooks/hook";
import { setGoods, setPages, setSearch } from "@/store/appSlice";
import { useParams } from "react-router-dom";
import { axs } from "@/api/axs/response";

const Head: FC = () => {
  const { city, menu } = useParams();
  const { search } = useAppSelector((state) => state.app);
  const debouncedSearch = useDebounce(search, 500);
  const dispatch = useAppDispatch();

  const handleInput: (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => Promise<void> = async (event) => {
    const { value, name } = event.target as HTMLInputElement;

    dispatch(
      setSearch({
        ...search,
        [name]: value,
      })
    );
  };

  const fetch = useCallback(async () => {
    if (!debouncedSearch) return;
    if (!city) return;

    try {
      const response = await axs.get(
        `/filial/${city}/${menu}/?limit=5&page=1`,
        {
          params: getParams(debouncedSearch),
        }
      );
      dispatch(setGoods(response.data.data));
      dispatch(setPages(response.data.max_pages));
    } catch (error) {
      dispatch(setGoods(null));
      dispatch(setPages(null));
    }
  }, [city, debouncedSearch, dispatch, menu]);

  useEffect(() => {
    fetch();
  }, [debouncedSearch, fetch]);

  return (
    <TableHead>
      <TableRow className={style.head}>
        {fields.map(({ name, label }, i) => (
          <TableCell align="left" key={i} sx={{ ...sxCell, ...tdStyle }}>
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

        <TableCell sx={{ ...sxCell, ...tdStyle }}>
          <Autocomplete
            disablePortal
            popupIcon={<Icon width={"0.5rem"} height={"1rem"} />}
            options={active}
            renderInput={(params) => (
              <TextField
                className={style.field}
                {...params}
                label="Статус"
                InputProps={{
                  ...params.InputProps,

                  className: style.complete,
                }}
                InputLabelProps={{
                  className: style.label,
                }}
                sx={sxField}
              />
            )}
            sx={sx}
            onChange={(
              _: SyntheticEvent<Element, Event>,
              value: IActive | null
            ) => {
              value &&
                dispatch(
                  setSearch({
                    ...search,
                    active: value.value,
                  })
                );
            }}
          />
        </TableCell>

        <TableCell sx={{ ...sxCell, ...tdStyle }}>
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
