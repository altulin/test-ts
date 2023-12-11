import { Autocomplete, TextField } from "@mui/material";
import { FC, useEffect, SyntheticEvent } from "react";
import Icon from "@/images/svg/v.svg?react";
import { sx } from "./style";
import { getFilials } from "@/api/axs/response";
import { setCurrentFilial, setFilials } from "@/store/appSlice";
import useFetchToStore from "@/hooks/fetchToStore";
import { useAppSelector, useAppDispatch } from "@/hooks/hook";
import { IFilialItem } from "@/store/initialState";
import styles from "./BarComboBox.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import styleLabel from "@/components/table/Head/Head.module.scss";
import { sxField } from "@/components/table/Head/script";

const BarComboBox: FC = () => {
  const fetch = useFetchToStore(getFilials, setFilials);
  const dispatch = useAppDispatch();
  const { filials, currentFilial } = useAppSelector((state) => state.app);
  const { menu } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentFilial?.id) {
      let path: string = `/${currentFilial.id}`;
      // path = menu ? `${path}/${menu}` : `${path}/${links[0].value}`;
      path = menu ? `${path}/${menu}` : `/`;
      navigate(path);
    }
  }, [currentFilial, menu, navigate]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return (
    filials && (
      <Autocomplete
        isOptionEqualToValue={(option, value) => option.id === value.id}
        popupIcon={<Icon width={"0.5rem"} height={"1rem"} />}
        options={filials}
        sx={sx}
        className={styles.autocomplete}
        renderInput={(params) => {
          return (
            <TextField
              className={styleLabel.field}
              label="Город"
              {...params}
              InputProps={{
                ...params.InputProps,
                className: styles.input,
              }}
              InputLabelProps={{
                className: styleLabel.label,
              }}
              sx={sxField}
            />
          );
        }}
        onChange={(
          _: SyntheticEvent<Element, Event>,
          value: IFilialItem | null
        ) => {
          value && dispatch(setCurrentFilial(value));
        }}
      />
    )
  );
};

export default BarComboBox;
