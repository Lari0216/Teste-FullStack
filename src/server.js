import cors from "cors"; 
import express from "express"; 
import pool from "./db.js"; 

const port = 3000
const app = express()

app.use(express.json());
app.use(cors()) 

app.get('/usuarios', async (req, res) => {
    const usuarios = await pool.query('SELECT * FROM usuarios') 
    res.json(usuarios.rows)
})

app.post('/usuarios', async (req, res) => {
    const {nome, idade} = req.body; 
    const novoAluno = await pool.query('INSERT INTO usuarios (nome, idade) VALUES ($1, $2) RETURNING *', [nome, idade]);
    res.json(novoAluno.rows[0]);
})

app.put('/usuarios/:id', async (req,res) => { //atualizar
    const {nome, idade} = req.body; 
    const {id} = req.params;                                  //Valores que quer atualizar 
    const atualizarUsuario = await pool.query('UPDATE usuarios SET nome = $1, idade = $2 WHERE id = $3 RETURNING *', [nome, idade, id]);
    res.json(atualizarUsuario.rows[0]);
})


app.delete('/usuarios/:id', async (req,res) => {
    const {id} = req.params; 
    const deletarUsuario = await pool.query('DELETE FROM usuarios WHERE id = $1 RETURNING *', [id]);
    res.json(deletarUsuario.rows[0]);
})

app.listen(port, () => {
    console.log("API para MAIOREES rodando em localhost:3000")
})