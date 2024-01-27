import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import dadoService from '../services/phonebook'
import Input from '../layout/Input'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import './Editar.css'

function Editar() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [descricao, setDescricao] = useState('')
  const [foto, setFoto] = useState(null)
  const [fotoPreview, setFotoPreview] = useState(null)
  const [fotoAntiga, setFotoAntiga] = useState(null) // Adicionando estado para a prévia da imagem

  useEffect(() => {
    dadoService.getOne(id).then((response) => {
      setNome(response.data.nome)
      setDescricao(response.data.descricao)

      setFotoAntiga('http://localhost:3001/images/' + response.data.foto)
    })
  }, [id, foto, navigate])

  const handleNomeChange = (event) => {
    // console.log(event.target.value);
    setNome(event.target.value)
  }

  const handleDescricaochange = (event) => {
    // console.log(event.target.value);
    setDescricao(event.target.value)
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    setFoto(file)

    // Exibindo uma prévia da imagem
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setFotoPreview(e.target.result)
      }
      reader.readAsDataURL(file)
    } else {
      setFotoPreview(null)
    }
  }

  const editObject = async (event) => {
    event.preventDefault()

    const dadoObject = {
      nome,
      descricao,
      foto,
    }

    console.log(dadoObject)

    await dadoService.update(id, dadoObject)

    navigate('/MPubli')
  }

  const cancel = () => {
    navigate('/MPubli')
  }

  return (
    <div className='back'>
      <Header />
    <div className='container editbg'>
      <h2>Editar Publicações</h2>
      <hr />
      <form onSubmit={editObject}>
        <Input
          textLabel='nome'
          text='Nome'
          inputType='text'
          textPlaceholder='Novo Nome'
          handleChange={handleNomeChange}
          isPhone={false}
          defaultValue={nome}
        />
        <Input
          textLabel='descricao'
          text='Descrição'
          inputType='text'
          textPlaceholder='Novo Descrição'
          handleChange={handleDescricaochange}
          isPhone={false}
          defaultValue={descricao}
        />
        
        <div className='form-group'>
          <label htmlFor='foto'>Foto: </label>
          <input
            type='file'
            id='foto'
            className='form-control-file m-2'
            onChange={handleFileChange}
          />
          {fotoPreview ? (
            <img
            className='prvw'
              src={fotoPreview}
              alt='Preview'
              style={{ maxWidth: '200px' }}
            />
          ) : fotoAntiga ? (
            <img 
            className='previmg'
             src={fotoAntiga} 
             alt='Preview' 
             style={{ maxWidth: '200px' }} />
          ) : null}
        </div>
        <button className='btn btn-primary m-2'>Editar</button>
        <button className='btn btn-danger m-2' onClick={() => cancel()}>
          Cancelar
        </button>
      </form>
    </div>
    <Footer />
    </div >
  )
}

export default Editar
