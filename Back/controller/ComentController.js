const conn = require("../db/conn");

const read = (request, response) => {

  const postId = Number(request.params.id) 

  conn("tab_coments")
    .select("id", "user_id", "comment")
    .where({ post_id: postId })
    .then((comments) => {
      response.status(200).json(comments);
    })
    .catch((error) =>
      response
        .status(500)
        .json({ error: "Não foi possível recuperar a lista de usuários" })
    );
};

const create = async (request, response) => {
  const { user_id, post_id, comment } = request.body;
  

  let errors = [];

  if (!comment) {
    errors.push({ error: "Campo não pode estar vazio!" });
  }

  if (errors.length > 0) {
    return response.status(400).json(errors);
  }

  conn("tab_coments")
    .insert({
      comment,
      user_id,
      post_id,
    })
    .then(() => {
      response.json({ msg: "Comentário enviado!" });
    })
    .catch((error) => {
      response.status(500).json({
        error: "Erro ao comentar. Tente Novamente." + error,
      });
    });
};

const readById = (request, response) => {
  const id = Number(request.params.id)
  conn('tab_coments')
    .where({ id: id })
    .first()
    .then((comment) => {
      if (comment == undefined) {
        response.status(404).json({ error: "Comentário não existe, ou foi deletado." });
      }
      response.status(200).json(comment)
    })
    .catch((error) => {
      response.status(500).json({
        error: "Erro ao acessar servidor, tente mais tarde!" + error,
      })
    })
}

const readCommentById = (request, response) => {
  const id = Number(request.params.id)
  conn('tab_coments')
    .where({ id: id })
    .first()
    .then((comment) => {
      if (comment == undefined) {
        response.status(404).json({ error: "Comentário não existe, ou foi deletado." });
      }
      response.status(200).json(comment)
    })
    .catch((error) => {
      response.status(500).json({
        error: "Erro ao acessar servidor, tente mais tarde!" + error,
      })
    })
}

const del = (request, response) => {
  const id = Number(request.params.id)
  conn('tab_coments')
    .del()
    .where({ id: id })
    .then((_) => {
      response.status(200).json({ msg: 'O Comentário foi excluido!' })
    })
    .catch((error) => {
      response.status(500).json({
        error: 'Erro ao excluir comentário!',
      })
    })
}

module.exports = { create, read, readById, del, readCommentById }
