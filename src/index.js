import './index.scss'
// import './cadastro.scss'
// import './users.scss'

import 'normalize.css'

// document.querySelector('#app').innerHTML = `
//   <h1>Hello Vite!</h1>
//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
// `

let buttonLogin = document.querySelector('#app .login-button')

buttonLogin.addEventListener('click', (event) => {
  event.preventDefault()

  let inputMail = document.querySelector('#app #email')
  let inputPassword = document.querySelector('#password')

  let valid = {
    password: '',
    mail: ''
  }

  let userList = []
  // read listUser
  userList = JSON.parse(sessionStorage.getItem('listUsers') || '[]')
  console.log(userList)

  userList.forEach((element) => {
    console.log(element.password == inputPassword.value)

    if (
      inputPassword.value == element.password &&
      inputMail.value == element.mail
    ) {
      valid = {
        password: element.password,
        mail: element.mail
      }
    }
  })

  if (inputPassword.value == valid.password && inputMail.value == valid.mail) {
    alert('Login Realizado')
    location.href = 'lista-usuarios.html'
  } else {
    alert('Senha Inválida')
  }
})
