import { FC, ChangeEvent } from "react";
import { Pagination, Table, TableContainer } from "@mui/material";
import Head from "../Head/Head";
import { Outlet, useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "@/hooks/hook";
import { axs } from "@/api/axs/response";
import { setGoods, setPages } from "@/store/appSlice";

const TableBlock: FC = () => {
  const { pages } = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();
  const { city, menu } = useParams();

  const handleChange = async (_: ChangeEvent<unknown>, value: number) => {
    try {
      const response = await axs.get(
        `/filial/${city}/${menu}/?limit=5&page=${value}`
      );

      if (response.status !== 200) return;

      dispatch(setGoods(response.data.data));
      dispatch(setPages(response.data.max_pages));
    } catch (error) {
      dispatch(setGoods(null));
      dispatch(setPages(null));
    }
  };

  return (
    <>
      <TableContainer>
        <Table>
          <Head />
          <Outlet />
        </Table>
      </TableContainer>

      {pages && <Pagination count={pages} onChange={handleChange} />}
    </>
  );
};

export default TableBlock;
