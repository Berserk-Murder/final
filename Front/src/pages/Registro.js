import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../layout/Header";
import './Registro.css';
import Footer from "../layout/Footer";

function Registro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const urlBase = "http://localhost:3001/api/users/save";

  const handleRegistro = async () => {
    try {
      // Requisição POST para uma API de cadastro de usuários
      const response = await axios.post(urlBase, {
        nome: nome,
        email: email,
        senha: senha,
      });

      console.log("Usuário cadastrado com sucesso:", response.data);
     
      navigate("/login");
    } catch (exception) {
      setError("Erro ao cadastrar usuário. Tente novamente."); 
      setTimeout(() => {
        setError(null); // Limpa a mensagem de erro após 5 segundos
      }, 5000);
    }
  };

  return (
    <div className='d-flex flex-column min-vh-100 main'>
      <Header />
      <div className="container mt-3 animate__animated animate__fadeIn">
        <h2 className="text-center m-5 p-5 " id="Treg">Registro</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <form className="bg-light p-4 mx-auto m-3 log1">
          <div className="mb-3 ">
            <label htmlFor="nome" className="form-label">
              Nome:
            </label>
            <input
              type="text"
              className="form-control"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              E-mail:
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="senha" className="form-label">
              Senha:
            </label>
            <input
              type="password"
              className="form-control"
              id="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleRegistro}
          >
            Registrar
          </button>
          <p className="mt-3 text-center">
            Já tem uma conta? <Link to="/login">Faça login aqui</Link>.
          </p>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Registro;