import { useAppDispatch } from "./hook";

const useFetchToStore = (axs, reducer) => {
  const dispatch = useAppDispatch();

  const fetch = async () => {
    try {
      const response = await axs();
      dispatch(reducer(response.data));
    } catch (error) {
      //
    }
  };

  return fetch;
};

export default useFetchToStore;
