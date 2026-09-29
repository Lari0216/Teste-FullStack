import cors from "cors"; 
import express from "express"; 
import pool from "./db.js"; 

const port = 3000
const app = express()

app.use(express.json());
app.use(cors())

app.get('/usuarios', async (req, res) => {
    const usuarios = await pool.query('SELECT * FROM usuarios') 
    res.json(usuarios)
})

app.post('/usuarios', async (req, res) => {
    const {nome, idade} = req.body; 
    const novoAluno = await pool.query('INSERT INTO usuarios (nome, idade) VALUES ($1, $2) RETURNING *', [nome, idade]);
    res.json(novoAluno.rows[0]);
})

app.listen(port, () => {
    console.log("API Rodando em localhost:3000")
})

