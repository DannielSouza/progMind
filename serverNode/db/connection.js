const mongoose = require("mongoose");

main()

async function main(){
  try {
    await mongoose.connect("YOUR MONGODB CONNECTION URL")
    console.log("Conectado ao banco de dados.");
  } catch (error) {
    console.log(`Erro ao conectar no banco de dados: ${error}.`)
  }
}



module.exports = mongoose