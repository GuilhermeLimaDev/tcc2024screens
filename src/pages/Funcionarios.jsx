import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import TableFuncionarios from "../components/tablefuncionarios/TableFuncionarios";
import "./global.module.css";

export default function Funcionarios() {
  return (
    <>
      <div className="page-funcionarios">
        <Navbar />
        <TableFuncionarios />
        <Footer />
      </div>
    </>
  );
}
