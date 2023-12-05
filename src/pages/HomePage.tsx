import { useEffect } from "react";
import { FC } from "react";

import Promo from "../components/home/Promo/Promo";

const HomePage: FC = () => {
  useEffect(() => {
    // document.title = "";
  }, []);

  return (
    <>
      <Promo />
    </>
  );
};
export default HomePage;
