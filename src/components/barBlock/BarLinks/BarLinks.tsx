import { FC } from "react";
import { Link, List, ListItem } from "@mui/material";
import { links, ILinks } from "./var";
import { useAppSelector, useAppDispatch } from "@/hooks/hook";
import clsx from "clsx";
import style from "./BarLinks.module.scss";
import { Link as RouterLink } from "react-router-dom";
import { setSearch } from "@/store/appSlice";

const BarLinks: FC = () => {
  const { currentFilial } = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();

  const onClickHandle = () => {
    dispatch(setSearch(null));
  };

  return (
    <List>
      {links.map(({ label, value }: ILinks, i: number) => (
        <ListItem key={i} sx={{ p: 0 }}>
          <Link
            component={RouterLink}
            onClick={onClickHandle}
            className={clsx(style.link)}
            to={currentFilial ? `/${currentFilial.id}/${value}` : "/"}
            variant="body2"
            sx={{
              color: "#072659",
              p: "0.3rem 0.625rem",
              display: "block",
              width: "100%",
            }}
            underline="none"
          >{`- ${label}`}</Link>
        </ListItem>
      ))}
    </List>
  );
};

export default BarLinks;
