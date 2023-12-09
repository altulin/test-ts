import { FC, useCallback, useEffect } from "react";
import { TableBody, TableRow, TableCell, Typography } from "@mui/material";
import { useAppSelector, useAppDispatch } from "@/hooks/hook";
import { axs } from "@/api/axs/response";
import { useParams } from "react-router-dom";
import { setGoods, setPages } from "@/store/appSlice";
import { checkArr } from "@/service/checkArr";
import TableData from "../TableData/TableData";
import TableIcons from "../TableIcons/TableIcons";

const TableContent: FC = () => {
  const { city, menu } = useParams();
  const { goods } = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();

  const initialFetch = useCallback(async () => {
    try {
      const response = await axs.get(`/filial/${city}/${menu}/?limit=5&page=1`);

      if (response.status !== 200) return;

      dispatch(setGoods(response.data.data));
      dispatch(setPages(response.data.max_pages));
    } catch (error) {
      dispatch(setGoods(null));
      dispatch(setPages(null));
    }
  }, [city, dispatch, menu]);

  useEffect(() => {
    initialFetch();
  }, [city, initialFetch, menu]);

  return (
    <TableBody>
      {checkArr(goods) &&
        goods?.map((item) => (
          <TableRow key={item.id}>
            {[item.name, item.filial.name, item.tt.name].map((row, i) => (
              <TableData key={i}>{row}</TableData>
            ))}

            <TableData>{item.active ? "Активно" : "Не активно"}</TableData>

            <TableCell sx={{ verticalAlign: "top" }}>
              {item.export.map((word, i) => (
                <Typography key={i} variant="body1" component="p">
                  {word}
                </Typography>
              ))}
            </TableCell>

            <TableIcons />
          </TableRow>
        ))}
    </TableBody>
  );
};

export default TableContent;
