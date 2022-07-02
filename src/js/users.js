import '../styles/users.scss'
import 'normalize.css'

import axios from 'axios'

let userContainer = document.querySelector('#app .user-container')

console.log(userContainer)

axios.get('https://reqres.in/api/users?page=1').then(function (response) {
  console.log(response.data.data)

  response.data.data.forEach((element) => {

    let div = document.createElement('div')
    div.setAttribute('class', 'user-box')
    
    
    let span = document.createElement('span')
    div.appendChild(span)
    
    // create <button></button>
    let button = document.createElement('button')
    button.setAttribute('class', 'button-edit')

    // create button image
    let img = document.createElement('img')
    img.setAttribute('class', 'edit')
    img.setAttribute('src', './assets/icon-edit.svg')
    img.setAttribute('alt', 'editar')
    button.appendChild(img)

    // create profile image
    let img2 = document.createElement('img')
    img2.setAttribute('class', 'profile')
    img2.setAttribute('src', `${element.avatar}`)

    // create <h2></h2> with name person
    let h2 = document.createElement('h2')
    h2.setAttribute('class', 'name')
    let firstName = document.createTextNode(`${element.first_name}`)
    h2.appendChild(firstName)

    // create <p></p> with mail person
    let p = document.createElement('p')
    p.setAttribute('class', 'email')
    let email = document.createTextNode(`${element.email}`)
    p.appendChild(email)

    span.appendChild(button)
    span.appendChild(img2)
    span.appendChild(h2)
    span.appendChild(p)

    userContainer.appendChild(div)
  })
})
