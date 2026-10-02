const bntlistar = document.getElementById('bnt-listar');
const bntPost = document.getElementById('bntpost');
const bntPut = document.getElementById('bntput-');
const bntapagar = document.getElementById('bnt-apagar');

bntlistar.addEventListener('click', async () => {
    const response = await fetch('http://localhost:3000/usuarios');
   const data = response.json();
   document.getElementById('lista').textContent = JSON.stringify(data, null, 2);
})

bntPost.addEventListener('click', async () => {
    const response = await fetch('http://localhost:3000/usuarios', {
    method:'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({
        nome: document.getElementById('card-nome').value, 
        idade: document.getElementById('card-idade')
    })
}
)})