import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Home.css';
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import dadoService from "../services/phonebook";

function Home() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Adicione esta linha
  const urlBase = 'http://localhost:3001/images/';
  

  useEffect(() => {
    fetchData(); // Carrega os dados iniciais
  }, []);

  const fetchData = () => {
    dadoService
      .getAll()
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        if (error.response) {
          console.error("Erro na requisição:", error.response);
        } else if (error.request) {
          console.error("Não foi possível se conectar ao servidor.");
          setError(
            "Não foi possível se conectar ao servidor. Verifique sua conexão de rede."
          );
        } else {
          console.error("Erro na configuração da requisição:", error.message);
        }
      });
  };

  const handlePostClick = (postId) => {
    // Navegar para a página Coment com o ID do post
    navigate(`/coment/${postId}`);
  };

  return (
    <div className="main">
      <Header />
      <div className="container telaadd m-5 p-3">
        <h2 className="mt-2"></h2>
        {error ? (
          <p className="alert alert-warning" role="alert">
            {error}
          </p>
        ) : (
          <>
            <div className="my-3 ">
              {posts.map((post) => (
                <div className='col-sm-4 ' key={post.id}>
                  <div className='card mb-3'>
                    <img
                      src={urlBase + post.foto}
                      className='card-img-top'
                      alt='foto'
                    />
                    <div className='card-body '>
                      <h5 className='card-title'>{post.nome}</h5>
                      <p className='card-text '>
                        <i className="bi bi-chat-dots"></i> {post.descricao}
                      </p>
                      <Link to={`/coment/${post.id}`} className='btn btn-primary'>
                <i className="bi bi-wrench"></i> Ver Comentarios
              </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
