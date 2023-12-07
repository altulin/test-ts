import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TableContent from "./components/table/TableContent/TableContent";

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route path="/:city/:menu" element={<TableContent />} />
      </Route>
    </Routes>
  );
};

export default App;
