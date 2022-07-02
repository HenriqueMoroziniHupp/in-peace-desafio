import '../styles/users.scss'
import 'normalize.css'

import axios from 'axios'

let userContainer = document.querySelector('#app .user-container')

console.log(userContainer)

axios.get('https://reqres.in/api/users?page=1').then(function (response) {
  console.log(response.data.data)

  response.data.data.forEach((element) => {
    // console.log(element.first_name)

    // let newUserBox = document.createElement('div')

    let user = (document.innerHTML = `
      <div class="user-box">
      <span>
        <button class="button-edit">
          <img class="edit" src="./assets/icon-edit.svg" alt="Editar">
        </button>
        
        <img class="profile" src="${element.avatar}"
          alt="Usuários">
                                      
        <h2 class="name">${element.first_name}</h2>
        <p class="email">${element.email}</p>

      </span>
    </div>
`)



    let boxUser
    let div = document.createElement('div')
    div.setAttribute('class', 'user-box')
    // div.appendChild(user)
    // console.log(div)


    let button = document.createElement('button')
    button.setAttribute('class', 'button-edit')

    let img = document.createElement('img')
    img.setAttribute('class','edit')
    img.setAttribute('src','./assets/icon-edit.svg')
    button.appendChild(img)

    let img2 = document.createElement('img')
    img2.setAttribute('class','profile')
    img2.setAttribute('src',`${element.avatar}`)





    let h2 = document.createElement('h2')
    h2.setAttribute('class', 'name')


    div.appendChild(button)
    div.appendChild(img2)

    // div.innerHTML += user
    // console.log(user)

    // userContainer.appendChild(user)
    console.log(div)
  })
})
