import { Link } from "react-router-dom";

function Table({ posts, handleDelete }) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nome</th>
          <th scope="col">Descrições</th>
          <th scope="col">Ações</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post, index) => (
          <tr key={post.id}>
            <td>{index + 1}</td>
            <td>{post.nome}</td>
            <td>{post.descricao}</td>
            <td>
              <Link to={`/${post.id}`} className="btn btn-success">
                <i className="bi bi-pencil"></i> Editar
              </Link>
              <button
                className="btn btn-danger mx-2"
                onClick={() => handleDelete(post.id)}
              >
                <i className="bi bi-trash3"></i> Excluir
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
