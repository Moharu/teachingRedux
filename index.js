/* 
    Bem vindo ao curso de redux do primo do michel teló!

    Primeiramente, é importante entendermos que os três conceitos principais do redux:
    
    -----------------
    PRIMEIRO:
    Todo o estado da sua aplicação é descrito como um OBJETO JS (pleno)
    -----------------

    para nosso exemplo, vamos imaginar um TODO list (nada clichê)
*/

const applicationState = [{
        text: "Clonar o projeto",
        completed: true
    }, {
        text: "Servir café",
        completed: true
    }, {
        text: "Aprender redux",
        completed: false
    }]

/*
    ----------------
    SEGUNDO:
    Para alterar qualquer coisa no nosso estado, precisamos criar uma ação
    que descreva o que vai acontecer. Essa ação TAMBÉM é um OBJETO JS (pleno)
    ----------------
*/

const action = {
    type: 'ADD_TODO',
    text: 'Trazer bolo'
}

/*
    ----------------
    TERCEIRO:
    Escrevemos uma FUNÇÃO REDUTORA que recebe o estado anterior da nossa aplicação e
    a ação que foi enviada, retornando um NOVO ESTADO
    ----------------
*/

const todosApp = (state = [], action) => {
    switch(action.type){
        case 'ADD_TODO':
            return [...state, { text: action.text, completed: false }]
        default:
            return state
    }
}