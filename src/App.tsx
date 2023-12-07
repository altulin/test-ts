import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        {/* <Route path="/:city/:menu" element={<Table />} /> */}
      </Route>
    </Routes>
  );
};

export default App;
