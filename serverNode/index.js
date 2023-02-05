//IMPORTS
const express = require("express");
const cors = require('cors');
const ThoughtsRoutes = require('./routes/ThoughtRoutes');
const connection = require("./db/connection");

//EXPRESS
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//CORS
app.use(cors())
//ROUTES
app.use("/thought", ThoughtsRoutes);

//connection
//  .sync(/* {force:true} */)
//  .then(() => {
//    app.listen(process.env.PORT || 4000);
//    console.log("Servidor ligado na porta 4000");
//  })
//  .catch((error) => {
//    console.log("Erro ao ligar o servidor: " + error);
//  });

app.listen(4000)