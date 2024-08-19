import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import "./global.module.css";
import "../pages/global.module.css";

export default function Reports() {
  return (
    <>
      <div className="pageReports">
        <Navbar />
        <p>Sou a página de reports</p>
        <Footer />
      </div>
    </>
  );
}
