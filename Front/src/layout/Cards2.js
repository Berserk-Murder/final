import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';

function Cards2({ posts, onPostClick }) {
  const urlBase = 'http://localhost:3001/images/';

  if (posts.length === 0) {
    return (
      <div>
        <p>Não existem dados a serem exibidos!</p>
      </div>
    );
  }

  return (
    <div className='row'>
      {posts.map((post) => (
        <div className='col-sm-4' style={{width:'50%', height:'150%'}} key={post.id}>
          <div className='card mb-3'>
            <img 
            src={urlBase + post.foto} 
            className='card-img-top' 
            alt='foto' 
            style={{width:'100%', height:'350px', objectFit:'cover'}}
            />
            <div className='card-body'>
              <h5 className='card-title'>{post.nome}</h5>
              <p className='card-text'>
                <i className="bi bi-chat-dots"></i> {post.descricao}
              </p>
              {/* Botão para ver comentários */}
              <button className="btn btn-primary" onClick={() => onPostClick(post.id)}>
                Ver Comentários
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards2;
