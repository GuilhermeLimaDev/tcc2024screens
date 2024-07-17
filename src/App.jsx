import "./styles.css";
import Reports from "./pages/Reports";
import Funcionarios from "./pages/Funcionarios";
import Representantes from "./pages/Representantes";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Reports />} />
        <Route path="/cadrep" element={<Representantes />} />
        <Route path="/cadfunc" element={<Funcionarios />} />
      </Routes>
    </>
  );
};
export default App;
