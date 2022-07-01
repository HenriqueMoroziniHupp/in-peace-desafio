import './index.scss'
// import './cadastro.scss'
// import './users.scss'


import 'normalize.css'

// document.querySelector('#app').innerHTML = `
//   <h1>Hello Vite!</h1>
//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
// `

let inputLogin = document.querySelector('#app #email')
let inputMail = document.querySelector('#password')
let buttonLogin = document.querySelector('#app .login-button')

buttonLogin.addEventListener('click', loginCheck)

function loginCheck(event) {
  event.preventDefault()
  if (inputLogin.value == 'po' && inputMail.value == 'poi') {
    alert('acerto miseravi')
    location.href = 'lista-usuarios.html'

  } else {
    alert('Errou !')
  }
  


}