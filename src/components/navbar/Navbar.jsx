import Nav from "react-bootstrap/Nav";
import "./nav.module.css";

const Navbar = () => {
  return (
    <Nav variant="underline" className="justify-content ms-5 mt-2" as="nav">
      <Nav.Item>
        <Nav.Link className="link-body-emphasis" href="/">
          Reports
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          className="link-body-emphasis"
          eventKey="/cadrep"
          href="/cadrep"
        >
          Cadastrar Representante
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          className="link-body-emphasis"
          eventKey="/cadfunc"
          href="/cadfunc"
        >
          Cadastrar funcionario
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};
export default Navbar;
