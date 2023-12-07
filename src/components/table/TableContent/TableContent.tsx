// import clsx from "clsx";
// import style from "./TableContent.module.scss";
import { FC } from "react";
import { TableBody, TableRow } from "@mui/material";
import { useParams } from "react-router-dom";

const TableContent: FC = () => {
  const { city, menu } = useParams();

  console.log(city);
  console.log(menu);
  return (
    <TableBody>
      <TableRow></TableRow>
    </TableBody>
  );
};

export default TableContent;
