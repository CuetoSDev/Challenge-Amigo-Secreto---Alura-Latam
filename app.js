//lista vacia de amigos
let friends = [];

const friend = document.getElementById('amigo');
const nameList = document.getElementById('listaAmigos');
const resultado  = document.getElementById('resultado');

function agregarAmigo() {
    resultado.innerHTML = '';
    if(friend.value === '') {
        alert('Ingresa un nombre valido');
        return;
    }
    if(!isNaN(friend.value)) {
        alert('Ingresa un nombre valido');
        return;
    }
    let nombre = friend.value;
    friends.push(nombre);
    mostrarAmigos();
    friend.value = '';
}

function mostrarAmigos() {
    nameList.innerHTML = '';
    friends.forEach((friend) =>{
        const item = document.createElement('li');
        item.textContent = friend;
        nameList.appendChild(item);
    })
}

function sortearAmigo() {
    nameList.innerHTML = '';
    let random = Math.floor(Math.random() * friends.length);
    resultado.textContent = `El amigo sorteado es: ${friends[random]}`;
    friends = [];
}