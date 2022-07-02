import '../styles/cadastro.scss'
import 'normalize.css'

let inputName = document.querySelector('#app #full-name')
let inputMail = document.querySelector('#app #mail')
let inputUF = document.querySelector('#app #uf')
let inputGender = document.querySelector('#app .gender')
let inputPassword1 = document.querySelector('#app #password1')
let inputPassword2 = document.querySelector('#app #password2')

let buttonRegister = document.querySelector('#app #button-register')

buttonRegister.addEventListener('click', (event) => {
  event.preventDefault()
  if (inputPassword1.value == inputPassword2.value) {

    // read or create listUser
    let listUser = JSON.parse(sessionStorage.getItem('listUsers') || '[]')

    // add register on listUser
    listUser.push({
      name: inputName.value,
      mail: inputMail.value,
      password: inputPassword1.value
    })

    // save listUser on sessionStorage
    const data = JSON.stringify(listUser)
    sessionStorage.setItem('listUsers', data)

    alert('Cadastro Realizado')

    inputPassword1.value = ''
    inputName.value = ''
    inputMail.value = ''
    inputUF.value = null
    inputGender.value = ''
    inputPassword1.value = ''
    inputPassword2.value = ''

  } else {
    alert('Senha Inválida')
  }
})
