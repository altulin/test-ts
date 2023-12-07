import clsx from "clsx";
import style from "./TableContent.module.scss";
import { FC } from "react";

const TableContent: FC = () => {
  return (
    <section className={clsx(style.tableContent)}>
      <div className={clsx(style.tableContent__inner)}>
        TableContent Component
      </div>
    </section>
  );
};

export default TableContent;
