import listFuncionario from "../../shared/listFuncionario";
import { Table } from "react-bootstrap";

const TableFuncionarios = () => {
  const ListarFuncionarios = () =>
    listFuncionario.map((funcionario) => (
      <tbody>
        <tr key={funcionario.id_func}>
          <td></td>
          <td>{funcionario.id_func}</td>
          <td>{funcionario.nome}</td>
          <td>{funcionario.email}</td>
          <td>{funcionario.cargo}</td>
        </tr>
      </tbody>
    ));

  return (
    <>
      <div className="w-100 h-55 text-center d-flex flex-column my-2">
        <h1>Tabela de funcionarios</h1>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th></th>
              <th>ID</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Cargo</th>
            </tr>
          </thead>
          <ListarFuncionarios />
        </Table>
      </div>
    </>
  );
};
export default TableFuncionarios;
