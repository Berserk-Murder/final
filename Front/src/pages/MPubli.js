import { useEffect, useState } from "react";
import './MPubli.css'
import dadoService from "../services/phonebook";
import useAuth from "../hooks/useAuth";


// import Table from '../layout/Table'
import Input from "../layout/Input";
import Cards from "../layout/Cards";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

function MPubli() {
  const [posts, setPosts] = useState([]);
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [foto, setFoto] = useState(null);
  const [fotoPreview, setFotoPreview] = useState(null); // Adicionando estado para a prévia da imagem
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState(null);


  const {user} = useAuth();

  useEffect(() => {
    fetchData(); // Carrega os dados iniciais
  }, []);

  const fetchData = () => {
    dadoService
      .getMyPosts(user.id)
      .then((response) => {
        setPosts(response.data);
        setShowForm(false);
      })
      .catch((error) => {
        if (error.response) {
          // O servidor respondeu com um status de erro
          console.error("Erro na requisição:", error.response);
        } else if (error.request) {
          // A requisição foi feita, mas não houve resposta do servidor
          console.error("Não foi possível se conectar ao servidor.");
          setError(
            "Não foi possível se conectar ao servidor. Verifique sua conexão de rede."
          );
        } else {
          // Algo aconteceu na configuração da requisição que causou o erro
          console.error("Erro na configuração da requisição:", error.message);
        }
      });
  };

  const addDado = async (event) => {
    event.preventDefault();
    
    const dadoObject = {
      nome,
      descricao,
      foto,
      user_id: user.id
    };
    
    await dadoService.create(dadoObject);

    setFoto(null);
    setFotoPreview(null);// Limpar a imagem após o envio

    // Após a criação, atualize a lista de dados chamando fetchData novamente
    fetchData();
  };

  const handleNomeChange = (event) => {
    // console.log(event.target.value);
    setNome(event.target.value);
  };

  const handleDescricaochange = (event) => {
    // console.log(event.target.value);
    setDescricao(event.target.value);
  };


  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFoto(file);

    // Exibindo uma prévia da imagem
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFotoPreview(e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      setFotoPreview(null);
    }
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleDelete = async (id) => {
    await dadoService.remove(id);
    // Após a exclusão, atualize a lista de dados chamando fetchData novamente
    fetchData();
  };

  return (
    <div className="main">
      <Header />
      <div className="container telaadd">

        <h2 className="mt-2"></h2>
        {error ? (
          <p className="alert alert-warning" role="alert">
            {error}
          </p>
        ) : (
          <>
            <button onClick={toggleForm} className=" add ">
              {showForm ? "Voltar" : "Novo"}
            </button>

            {showForm ? (
              <>
                
                <form onSubmit={addDado} className="subtle add1 p-2 ">
                  <Input
                    textLabel="nome"
                    text="Nome"
                    inputType="text"
                    textPlaceholder="Digite o seu nome..."
                    handleChange={handleNomeChange}
                    isPhone={false}
                  />
                  <Input
                    textLabel="descricao"
                    text="Descrição"
                    inputType="text"
                    textPlaceholder="Digite sua Descrição"
                    handleChange={handleDescricaochange}
                    isPhone={false}
                  />
                  <div className="form-group">
                    <label htmlFor="foto">Foto: </label>
                    <input
                      type="file"
                      id="foto"
                      className="form-control-file m-2"
                      onChange={handleFileChange}
                    />
                    {fotoPreview && (
                      <img
                      className="previmg"
                        src={fotoPreview}
                        alt="Preview"
                        style={{ maxWidth: "200px" }}
                      />
                    )}
                  </div>
                  <button className='btn btn-primary m-2'>Cadastrar</button>
                </form>
                <br />
              </>
            ) : (
              <div className="my-3">
                
                <Cards posts={posts} handleDelete={handleDelete} />
              </div>
            )}
          </>
        )}
      </div>
      <Footer/>
    </div>
  );
}

export default MPubli;