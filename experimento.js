 // const parrafo = document.getElementById("buscador")
const p = document.querySelector('#buscador');

const url = "https://jsonplaceholder.typicode.com/users";
var nuevoP = document.createElement('p');
var nuevoBr = document.createElement('br')
fetch(url)
  .then(res => res.json())
  .then(data => {
    data.map(usuario => {
   console.log(usuario.name)
   const parrafo = document.createElement('p')
   parrafo.setAttribute('id', usuario.id)
   parrafo.innerHTML = usuario.name
   parrafo.addEventListener('click', function(){
    window.location.href= `./segundaPag.html?id=${usuario.id}`
   })
   p.appendChild(parrafo)
    });
  
    p.appendChild(nuevoP);
    p.appendChild(nuevoBr)
  })
  .catch(err => console.log(err));


  