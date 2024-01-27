import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import dadoService from "../services/phonebook";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import "./Coment.css";

function Coment() {
  const { id } = useParams();
  const [nome, setNome] = useState("");
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);
  const [descricao, setDescricao] = useState("");
  const [foto, setFoto] = useState(null);
  const { user } = useAuth();
  const urlBase = "http://localhost:3001/images/";
  const [taskIdToDelete, setTaskIdToDelete] = useState(null);

  const fetchData = async () => {
    try {
      const response = await dadoService.getOne(id);
      setNome(response.data.nome);
      setDescricao(response.data.descricao);
      setFoto(response.data.foto);

      const commentsResponse = await dadoService.getCommentsByPostId(id);
      setComments(commentsResponse.data);
    } catch (error) {
      console.error("Erro ao obter dados:", error);
    }
  };

  
  useEffect(() => {
    fetchData();
  }, [id, foto]);

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const submitComment = () => {
    // Certifique-se de que o newComment não está vazio antes de enviar
    if (newComment.trim() === "") {
      setError("O comentário não pode estar vazio.");
      return;
    }

    const dadoObject = {
      comment: newComment,
      user_id: user.id,
      post_id: id,
    };

    // Envia o novo comentário para o backend
    dadoService
      .createComment(dadoObject)
      .then(() => {
        setNewComment("");
        setError(null); // Limpar qualquer erro anterior
        fetchData(); // Atualiza os comentários após enviar um novo
      })
      .catch((error) => {
        console.error("Erro ao criar comentário:", error);
        setError("Erro ao criar comentário.");
      });
  };
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
  const handleDelete = async (id) => {
    await dadoService.removeComs(id);
    // Após a exclusão, atualize a lista de dados chamando fetchData novamente
    fetchData();
  };

  return (
    <div className="bg-black" style={{color: "#fff"}}>
      <Header />
      <br/>
      <div className="container">
        {error}
        <h2> Comentários </h2>
        <hr />
        {/* Exibe o post aqui */}
        <div>
          <h2 className="post-title ">{nome}</h2>
          <p className="post-description">{descricao}</p>
          <img src={urlBase + foto} className="card-img-top" alt="foto" style={{position:'fixed', width:'146px', height:'146px', objectFit:'cover', borderRadius:'10px'}}/>
          <div className="comment-form mt-3" style={{color: "#fff"}}>
            <textarea
            style={{width:'100%', height:'150px', marginTop:"7.5%", marginLeft:''}}
            input type="textbox"
              className="form-control bg-dark"
              rows="4"
              placeholder="Adicione um comentário..." 
              value={newComment}
              onChange={handleCommentChange}
            />
            <button className="btn btn-primary mt-2" onClick={submitComment}>
              Enviar Comentário
            </button>
          </div>
        </div>

        {comments.length === 0 ? (
          <p>Nenhum comentário disponível.</p>
        ) : (
          comments.map((comment) => (
            <div className='card mb-3'>
            <div className='card-body bg-black' style={{color: "#fff"}}>
              <p className='card-text bg-black'>
                <i className="bi bi-chat-dots"></i> {comment.comment}
              </p>
            </div>
            <div className='card-footer text-muted bg-black'>
              <Link to={`/coment/${comment.id}/edit`} className='btn btn-primary'>
                <i className="bi bi-wrench"></i> Editar
              </Link>
              <button
                className='btn btn-secondary mx-2'
                onClick={() => openConfirmation(comment.id)}
              >
                <i className="bi bi-trash-fill"></i> Excluir
              </button>
            </div>
          </div>
            )
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
      <Footer />
    </div>
  );
}

export default Coment;
