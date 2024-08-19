import listRepresentante from "../../shared/listRepresentante";
import { Table } from "react-bootstrap";

const TableRepresentantes = () => {
  const ListarRepresentantes = () =>
    listRepresentante.map((representante) => (
      <tbody>
        <tr key={representante.rm}>
          <td></td>
          <td>{representante.rm}</td>
          <td>{representante.nome}</td>
          <td>{representante.turma}</td>
          <td>{representante.periodo}</td>
          <td>{representante.curso}</td>
        </tr>
      </tbody>
    ));

  return (
    <>
      <div className="w-0 h-55 text-center d-flex flex-column">
        <h1>Tabela de representantes</h1>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th></th>
              <th>RM</th>
              <th>Nome</th>
              <th>Turma</th>
              <th>Periodo</th>
              <th>Curso</th>
            </tr>
          </thead>
          <ListarRepresentantes />
        </Table>
      </div>
    </>
  );
};
export default TableRepresentantes;
