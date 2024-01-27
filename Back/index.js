const express = require("express");
const cors = require("cors");

const PubliRoutes = require("./routes/PubliRoutes");
const UsersRoutes = require("./routes/UsersRoutes");
const ComentRoutes = require("./routes/ComentRoutes");

const app = express();

app.use(cors());

app.use(express.json());

// Public folder for images
app.use(express.static('public'))

app.get("/", (request, response) => {
  response.send("<h1>Seja bem vindo!</h1>");
});

app.use("/api/dados", PubliRoutes);
app.use("/api/users", UsersRoutes);
app.use("/api/comms", ComentRoutes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
