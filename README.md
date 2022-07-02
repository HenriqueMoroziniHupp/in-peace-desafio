# Desafio [InPeace](https://inpeaceapp.com/) >>> Front-end

Branch [main](https://github.com/HenriqueMoroziniHupp/in-peace-desafio) - Entregue dentro do prazo
Branch [after-the-deadline](https://github.com/HenriqueMoroziniHupp/in-peace-desafio/tree/after-the-deadline) - Entregue após o prazo, implementação do Axios e manipulação da DOM com dados carregados via API [Reqres](https://reqres.in/)

Desafio composto de três páginas `.html` cujo objetivo é simular um sistema de gerênciamento de usuários

Telas:
* Login
* Cadastro
* Lista de Usuários

>> Tecnologias utilizadas

Para desenvolvimento do desafios, foram utilizadas as seguintes tecnologias:

* [Vite.js](https://vitejs.dev/) - Empacotador de módulos JS, ferramenta de compilação.
* [SASS](https://sass-lang.com/) - Pré-processador CSS.
* [Axios](https://axios-http.com/ptbr/) - Cliente HTTP baseado em promessas.
* [Reqres](https://reqres.in/) - API REST gratuita para testes.
* [Normalize.css](https://necolas.github.io/normalize.css/) - Normaliza CSS entre diferentes navegadores.


# Como rodar o projeto

Siga os comandos para visualiar o projeto
## Instale as dependencias:

```sh
npm install
```

## Compile e abra em modo de desenvolvimento:

```sh
npm run dev
```
Desta forma será possível visualizar o projeto corretamente

## Compilar e minificar para produção*:

```sh
npm run build
```

* O arquivo `vite.config.js` não esta configurado para [Multi-Page App](https://vitejs.dev/guide/build.html#multi-page-app), portanto este comando não irá compilar corretamente para o diretório `/dist/`. 


