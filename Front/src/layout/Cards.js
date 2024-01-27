import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Cards.css';

function Cards({ posts, handleDelete }) {
  const [taskIdToDelete, setTaskIdToDelete] = useState(null);


  const openConfirmation = (id) => {
    setTaskIdToDelete(id)
  } 

  
  const confirmDelete = () => {
    if (taskIdToDelete !== null) {
      handleDelete(taskIdToDelete)
      setTaskIdToDelete(null) // Limpa o ID do item a ser deletado
    }
  }

  const cancelDelete = () => {
    setTaskIdToDelete(null) // Limpa o ID do item a ser deletado
  }


//   const confirmDelete = async () => {
//   try {
//     if (taskIdToDelete !== null) {
//       await handleDelete(taskIdToDelete);
//       closeConfirmation();
//     }
//   } catch (error) {
//     console.error('Erro ao excluir post:', error);
//   }
// };

  return (
    <div className='row'>
      {posts.map((post) => (
        <div className='col-sm-4' style={{width:'346px', height:'500px'}} key={post.id}>
          <div className='card mb-3'>
            <img
              src={`http://localhost:3001/images/${post.foto}`}
              className='card-img-top'
              alt='foto'
              style={{width:'300px', height:'300px', objectFit:'cover'}}
            />
            <div className='card-body'>
              <h5 className='card-title'>{post.nome}</h5>
              <p className='card-text'>
                <i className="bi bi-chat-dots"></i> {post.descricao}
              </p>
            </div>
            <div className='card-footer text-muted'>
              <Link to={`/${post.id}`} className='btn btn-primary'>
                <i className="bi bi-wrench"></i> Editar
              </Link>
              <button
                className='btn btn-secondary mx-2'
                onClick={() => openConfirmation(post.id)}
              >
                <i className="bi bi-trash-fill"></i> Excluir
              </button>
            </div>
          </div>
        </div>
      ))}

{taskIdToDelete !== null && (
        <div className='alert-overlay delete'>
          <div className='alert bg-dark p-4 rounded'>
            <h4 className='mb-4'>Realmente deseja excluir?</h4>
            <div className='button-group'>
              <button className='btn btn-danger' onClick={confirmDelete}>
                Sim
              </button>
              <button className='btn btn-secondary' onClick={cancelDelete}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cards;
