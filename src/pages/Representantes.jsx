import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import TableRepresentantes from "../components/tablerepresentantes/TableRepresentantes";
import "./global.module.css";

export default function Representantes() {
  return (
    <>
      <div className="">
        <Navbar />
        <TableRepresentantes />
        <Footer />
      </div>
    </>
  );
}
