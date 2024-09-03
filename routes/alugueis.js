const express = require("express")
const router = express.Router()
let alugueis = require("../data/alugueis")
let livros = require("..//data/livros")
let estudantes = require("../data/estudantes")
const estudante = require("../data/estudantes")

//Criar um novo aluguel

router.post("/", (req,res) => {
    const {id, idLivro, idEstudante, dataAluguel, dataDevolucao} = req.body
    const livro = livros.find(l => l.id === parseInt(idLivro))
    const estudantte = estudante.find(e => e.id === parseInt(idEstudante))

    if(livro && estudante){
        alugueis.push({id, idLivro, idEstudante, dataAluguel, dataDevolucao})
        res.status(201).json({message: "Alguel criado com sucesso!", aluguel: {id, idLivro, idEstudante,dataAluguel,dataDevolucao}})
    } else{
        res.status(400),json({message: "Livro ou Estudante não encontrado"})
    }
})
router.get("/", (req, res) => {
    res.json(alugueis);
})

router.get("/:id", (req, res) =>{
    const aluguel = alugueis.find(a => a.id === parseInt(req.params.id))
    if(aluguel){
        res.json(aluguel)
    }else{
        res.status(404).json({message:"Aluguel não encontrado"})
    }
})

router.put("/:id", (req,res) =>{
    const {dataDevolucao} = req.body
    const index = alugueis.findIndex(a => a.id === parse)
})