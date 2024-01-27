const jwt = require("jsonwebtoken");
const conn = require("../db/conn");

const authMiddleware = (req, res, next) => {
  // Verifica se o header 'Authorization' está presente na requisição
  const token = req.headers["authorization"];

  if (!token) {
    return res
      .status(401)
      .json({ message: "Token de autenticação não fornecido" });
  }

  // Verifica se o token é válido
  jwt.verify(token.split(" ")[1], "Meu segredo", (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Token inválido" });
    }

    // Use as informações decodificadas do token para verificar o usuário
    const userId = decoded.id; // Supondo que o token contenha o ID do usuário

    // Consulta ao banco de dados para verificar se o usuário existe
    conn("tab_users")
      .first()
      .where({ id: userId })
      .then((user) => {
        if (!user) {
          return res.status(401).json({ message: "Usuário não encontrado" });
        }

        // Se o usuário for encontrado, armazena informações do usuário na requisição
        req.user = user;
        next();
      })
      .catch((error) => {
        console.error("Erro ao verificar usuário:", error);
        return res.status(500).json({ message: "Erro interno do servidor" });
      });
  });
};

module.exports = { authMiddleware };
