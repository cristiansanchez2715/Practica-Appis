
const url = "https://jsonplaceholder.typicode.com/users";

const getUrl = new URLSearchParams(window.location.search)
const id = getUrl.get('id')
console.log(id)
const nuevoParrafo = document.getElementById('parra')



fetch(`${url}/${id}`)
.then(res => res.json())
.then(data => {
    const parra = document.createElement('p')
    parra.innerHTML = data.name
    const email = document.createElement('p')
    email.innerHTML = data.email
  nuevoParrafo.appendChild(parra)  
  nuevoParrafo.appendChild(email)
})