import { useCallback } from "react";
import { useAppDispatch } from "./hook";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useFetchToStore = (axs: any, reducer: any) => {
  const dispatch = useAppDispatch();

  const fetch = useCallback(async () => {
    try {
      const response = await axs();
      dispatch(reducer(response.data));
    } catch (error) {
      //
    }
  }, [axs, dispatch, reducer]);

  return fetch;
};

export default useFetchToStore;
