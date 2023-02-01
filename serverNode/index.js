//IMPORTS
const express = require("express");
const app = express();

//EXPRESS
app.use(express.urlencoded({ extended: true }));
//ROUTES
app.use("/user", UserRoutes);
app.use("/count", CountRoutes);

connection
  .sync(/* {force:true} */)
  .then(() => {
    app.listen(process.env.PORT || 5000);
    console.log("Servidor ligado na porta 4000");
  })
  .catch((error) => {
    console.log("Erro ao ligar o servidor: " + error);
  });
