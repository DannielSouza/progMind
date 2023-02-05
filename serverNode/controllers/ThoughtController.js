const Thought = require ('../models/Thought')
const getToken = require('../helpers/getToken')
const axios = require("axios")

module.exports = class ThoughtController{


  /* THOUGHT CREATE */
  static async create(req, res){

    const token = getToken(req);
    const {userEmail} = req.body
    
    try {
      await axios.post("http://localhost:8080/user/check-token", {
        token
      });
    } catch (error) {
      return res.status(422).json({error: "Token Inválido."})
    }
    

    const {authorEmail, mainFeeling, subFeeling, bodyFeeling, situation, thoughts, action} = req.body

    if(!mainFeeling) return res.status(422).json({error: "Por favor, preencha todos os campos obrigatórios."})
    if(!subFeeling) return res.status(422).json({error: "Por favor, preencha todos os campos obrigatórios."})
    if(!bodyFeeling) return res.status(422).json({error: "Por favor, preencha todos os campos obrigatórios."})

    const thought = new Thought({
      authorEmail: userEmail,
      mainFeeling,
      subFeeling,
      bodyFeeling,
      situation,
      thoughts,
      action
    })

    try {
      const newPost = await thought.save()
      return res.status(201).json({message: 'Post publicado com sucesso.', newPost})
    } catch (error) {
        res.status(500).json({message: 'Houve um arro ao publicar o post.'})
        return console.log(error)
    }
    
  }




  /* GET ALL USER'S THOUGHTS */
  static async getUserThoughts(req, res){
    const {userEmail} = req.body

    const thoughts = await Thought.find({authorEmail: userEmail}).sort('-createdAt')
    console.log(thoughts);
    res.status(200).send(thoughts)
  }



  /* DELETE USER'S THOUGHT */
  static async deleteThought(req, res){

    const {id} = req.params
    const token = getToken(req);
    let userEmail;

    const thought = await Thought.findOne({_id: id})
    if(!thought) return res.status(404).json({error: "Não encontrado."})


    try {
      await axios.post("http://localhost:8080/user/check-token", {
        token
      }).then(response=> userEmail = response.data.userEmail)
    } catch (error) {
      return res.status(422).json({error: "Token Inválido."})
    }


    if(userEmail === thought.authorEmail){
      await Thought.findByIdAndDelete(thought._id)
      return res.status(200).json({message: "Excluido com sucesso."})
    }else{
      return res.status(422).json({message: "Não foi possivel concluir a tarefa."})
    }
    
  }


}