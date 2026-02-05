import { Router } from "express";
import { usuarios } from "../data/mock.js";

const router = Router();


//Rota Get - retornar todos os usuários do mock.
router.get("/usuarios", (req, res) => {
    return res.status(200).send(usuarios)
});

// Retornar os dados de um usuário específico pelo id usando req.params.
router.get("/usuarios/:id", (req, res) => {
    const id = req.params.id
    for(let i=0;i<usuarios.length; i++){
        if(usuarios[i].id === id){
            return res.status(200).send(usuarios[i]);
        }
    }
    return res.status(404).send("Usuário não encontrado.")
});

//cadastrar um novo usuário com os dados enviados no corpo da requisição.
router.post("/usuarios", (req, res) => {
    const { nome, email, idade } = req.body

    if(!nome || !email || !idade){
        return res.status(404).send("Todos os campos devem ser preenchidos.")
    }
            const novoUsuario = {
                id: usuarios.length + 1,
                nome,
                email,
                idade
            }

            usuarios.push(novoUsuario)
            return res.status(201).send(novoUsuario)
});

//Atualizar todos os dados de um usuário existente.
router.put("/usuarios/:id", (req, res) => {
    const id = Number(req.params.id)
    let { nome, email, idade } = req.body

    if(!nome || !email || !idade){
        return res.status(400).send("todos os campos devem ser preenchidos.")
    }

    for(let i=0; i<usuarios.length; i++){
        if(usuarios[i].id === id){
            usuarios[i] = {
                id: id,
                nome: nome,
                email: email,
                idade: idade
            }
            
            return res.status(200).send(usuarios[i])
        }
    }
    return res.status(404).send("Usuário não encontrado.")
});

//Atualizar dado específico de um usuário existente.
router.patch("/usuarios/:id", (req, res) => {
    const id = Number(req.params.id)
    const {name, email, idade} = req.body
    
    for(let i=0; i<usuarios.length; i++){
        if(usuarios[i].id === id){
            
        if(name){
            usuarios[i].nome = name
        }

        if(email){
            usuarios[i].email = email
        }

        if(idade){
            usuarios[i].idade = idade
        }

        }
        return res.status(200).send(usuarios[i])
    }
    return res.status(404).send("Usuário não encontrado")
});

//Deletar um usuário do array.
router.delete("/usuarios/:id", (req, res)=>{
    const id = Number(req.params.id)
    
    for(let i=0; i<usuarios.length; i++){
        if(usuarios[i].id === id){
            usuarios.splice(i, 1);
            return res.send("Usuário removido com sucesso")
        }
    }
    return res.status(404).send("Usuário não encontrado")
})

export { router } ;
