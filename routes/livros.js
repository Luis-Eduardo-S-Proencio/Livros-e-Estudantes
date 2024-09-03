const express = require("express");
const router = express.Router()
let livros = require("../data/livros");

router.post("/", (req, res) => {
    const {id,titulo,autor,ano,genero} = req.body 
    livros.push({id, titulo, autor, ano,genero})
    res.status(201).json({message: "Livro criado com sucesso!", livro: {id, titulo, autor, ano, genero}})
});

router.get("/", (req, res) =>{
    res.json(livros)
});

router.get("/:id", (req,res) =>{ //encontrar livro por id
    const livro = livros.find(l => l.id === parseInt(req.params.id));
    if(livro){
        res.json(livro)
    }else{
        res.status(404).json({message: "Livro não encontrado."});
    }
})

router.put("/:id", (req, res) => {
    const {titulo, autor, anno,genero} = req.body
    const index = livros.findIndex(l => l.id === parseInt(req.params.id));
    if (index !== -1){
        livros[index] = {id: parseInt(req.params.id), titulo, autor, ano, genero}
        res.jsor({message: "Livro atualizado com sucesso!", livro: livros[index]});
    }else{
        res.status(404).json({message: "Livro não encontrado."});
    }
})
router.delete("/:id", (req, res) => {
    const index = livros.findIndex(l =>l.id ===parseInt(req.params.id))
    if(index !== -1){
        const deleted = livros.splice(index, 1);
        res.json({message: "Livro deletado com sucesso!", livro: deleted[0]})
    } else{
        res.status(404).json({message: "Livro não encontrado."})
    }
})
module.exports = router