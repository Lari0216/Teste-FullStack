const btnlistar = document.getElementById('btn-listar');
const btnPost = document.getElementById('btnPost');
const btnPut = document.getElementById('btnPut');
const btnapagar = document.getElementById('btn-apagar');

btnlistar.addEventListener('click', async (req, res) => {
    const response = await fetch('http://localhost:3000/usuarios');
    const data = await response.json();
    document.getElementById('lista').textContent = JSON.stringify(data, null, 2);
});

btnPost.addEventListener('click', async (req, res) => {
    const response = await fetch('http://localhost:3000/usuarios', {
    method:'POST',
    headers: { 'Content-Type':'Application/json'},
    body: JSON.stringify({
        nome: document.getElementById('nomePost').value, 
        idade: document.getElementById('idadePost').value
    })
})
    const data = await response.json();
    console.log(data)
}); 

btnPut.addEventListener('click', async (req, res) => {
    const id = document.getElementById('atualizar-id').value
    const response = await fetch(`http://localhost:3000/usuarios/${id}`, {
    method: 'PUT', 
    headers: {'Content-Type':'Application/json'},
    body: JSON.stringify({
        nome: document.getElementById('nomePut').value, 
        idade: document.getElementById('idadePut').value
    })
    });
    const data = await response.json()
        console.log(data)
}); 

btnapagar.addEventListener('click', async (req, res)=> {
    const id = document.getElementById('deletar-id').value 
    const resposta = await fetch(`http://localhost:3000/usuarios/${id}`, {
        method: 'DELETE'
    })
    const deleteusuario = resposta.json()
    console.log("Usuário Deletado")
});