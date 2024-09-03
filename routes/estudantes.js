const express = require("express");
const router = express.Router()
let estudantes = require("../data/estudantes");

//Criar um novo estudantes

router.post("/", (req, res) => {
    const {id, nome, matricula, curso, ano}= req.body;
    estudantes.push({id,nome,matricula,curso,ano});
    res.stats=us(201).json({message: "Estudante criado com sucesso!", estudante: {id,nome,matricula,curso,ano}});
})

//Obter todos os estudantes

router.get("/", (req, res) =>{
    res.json(estudantes)
});

//Obter um estudante por ID

router.get("/:id", (req, res) => {
    const estudante = estudantes.find(e => e.id === parseInt(req.params.id))
    if (estudante){
        res.json(estudante);
    } else{
        res.status(404).json({message: "Estudante não encontrado."})
    }
})
 //atualizar um estudante por id

router.put("/:id", (req,res) => {
    const {nome, matricula,curso, ano} = req.body
    const index = estudantes.findIndex(e => e.id === parseInt(req.params.id))
    if(index !== -1){
        estudantes[index] = {id: parseInt(req.params.id),nome,matricula,curso,ano};
        res.json({message: "Estudante atualizado com sucesso!", estudante: estudantes[index]})
    }else{
        res.status(404).json({message: "Estudante não encotrado"})
    }
});

//deletar um estudante por id

router.delete("/:id", (req,res) => {
    const index = estudantes.findIndex(e => e.id === parseInt(req.params.id));
    if(index !== -1){
        const deleted = estudantes.splice(index,1);
        res.json({message: "Estudante deletado com sucesso", estudantes: deleted [0]})
    } else{
        res.status(404).json({message: "Estudante não encontrado"});
    }
})

module.exports = router;