const conn = require('../db/conn')

const read = (request, response) => {
  conn('tab_dados')
    .select()
    .then((dados) => {
      response.json(dados)
    })
}

const create = (request, response) => {
  const { user_id, nome, descricao, } = request.body

  let foto = ''
  if (request.file) {
    const image = request.file
    foto = image.filename
  }

  let errors = []

  if (!nome) {
    errors.push({ error: 'Nome não fornecido' })
  }

  if (!descricao) {
    errors.push({ error: 'Descrição não fornecido' })
  }

  if (errors.length > 0) {
    return response.status(400).json(errors)
  }

  conn('tab_dados')
    .insert({
      user_id,
      nome,
      descricao,
      foto,
    })
    .then((_) => {
      response.json({ msg: 'Publicação realizada com sucesso!' })
    })
    .catch((error) => {
      response.status(500).json({
        error: 'Erro ao inserir a Publicação' + error,
      })
    })
}

const update = (request, response) => {
  const { nome, descricao } = request.body

  let foto = ''
  if (request.file) {
    const image = request.file
    foto = image.filename
  }
  
  const id = Number(request.params.id)

  if (!nome) {
    return response.status(400).json({
      error: 'Nome não fornecido!',
    })
  }
  conn('tab_dados')
    .update({
      nome,
      descricao,
      foto,
    })
    .where({ id: id })
    .then((_) => {
      response.status(200).json({ msg: 'Publicação atualizada com sucesso!' })
    })
    .catch((error) => {
      response.status(500).json({
        error: 'Erro ao inserir a Publicação no banco de dados',
      })
    })
}

const readById = (request, response) => {
  const id = Number(request.params.id)
  conn('tab_dados')
    .where({ id: id })
    .first()
    .then((person) => {
      response.status(200).json(person)
    })
    .catch((error) => {
      response.status(500).json({
        error: 'Erro ao buscar a Publicação no banco de dados!',
      })
    })
}

const readMyPost = (request, response) => {
  const user_id = Number(request.params.id)
  conn('tab_dados')
    .where({ user_id : user_id })
    .select()
    .then((post) => {
      response.status(200).json(post)
    })
    .catch((error) => {
      response.status(500).json({
        error: 'Erro ao buscar a Publicação no banco de dados!',
      })
    })
}

const readComment = (request, response) => {
  const user_id = Number(request.params.id)
  conn('tab_dados')
    .where({ user_id : user_id })
    .first()
    .then((comment) => {
      response.status(200).json(comment)
    })
    .catch((error) => {
      response.status(500).json({
        error: 'Erro ao buscar o Comentário no banco de dados! Tente Novamente.',
      })
    })
}

const del = (request, response) => {
  const id = Number(request.params.id)
  console.log(id)
  conn('tab_dados')
    .del()
    .where({ id: id })
    .then((_) => {
      response.status(200).json({ msg: 'A Publicação foi excluida!' })
    })
    .catch((error) => {
      console.log(error)
      response.status(500).json({
        error: 'Erro ao excluir a Publicação do banco de dados!',
      })
    })
}

module.exports = { read, create, update, readById, readMyPost, readComment, del }