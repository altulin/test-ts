import { useEffect } from "react";
import { FC } from "react";

import Promo from "../components/Promo/Promo";

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
