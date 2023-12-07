import { FC } from "react";
import { Link, List, ListItem } from "@mui/material";
import { links, ILinks } from "./var";
import { useAppSelector } from "@/hooks/hook";
import clsx from "clsx";
import style from "./BarLinks.module.scss";

const BarLinks: FC = () => {
  const { currentFilial } = useAppSelector((state) => state.app);

  return (
    currentFilial && (
      <List>
        {links.map(({ label, value }: ILinks, i: number) => (
          <ListItem key={i} sx={{ p: 0 }}>
            <Link
              className={clsx(style.link)}
              href={`${currentFilial.id}/${value}`}
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
    )
  );
};

export default BarLinks;
