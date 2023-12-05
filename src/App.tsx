import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Template from "./templates_pages/Template";
import HomePage from "./pages/HomePage";
import RequireAuth from "./hoc/RequireAuth";
import ModalManager from "./components/modal/ModalManager";

const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Template />}>
          <Route index element={<HomePage />} />
          <Route
            path="/private"
            element={<RequireAuth>{/* <Private /> */}</RequireAuth>}
          />
        </Route>
      </Routes>
      <ModalManager />
      <div id="modal-root"></div>
    </>
  );
};

export default App;
