const mongoose = require("mongoose");

main()

async function main(){
  try {
    mongoose.set("strictQuery", true)
    await mongoose.connect("mongodb+srv://admin:admin@progmindtest.rkhkur8.mongodb.net/?retryWrites=true&w=majority")
    console.log("Conectado ao banco de dados.");
  } catch (error) {
    console.log(`Erro ao conectar no banco de dados: ${error}.`)
  }
}



module.exports = mongoose