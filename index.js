/* 
    Bem vindo ao curso de redux do primo do michel teló!

    Primeiramente, é importante entendermos que os conceitos principais do redux:
    
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

/*
    Os três princípios do redux:

    "APENAS UMA FONTE DA VERDADE" - Todo o estado da aplicação está em uma "object tree",
    que pode ser serializada e "hidratada" nos clients com esforço muito baixo.

    "O ESTADO É READ-ONLY" - O único jeito dele ser alterado, é emitindo uma ação,
    que é um OBJETO PLENO descrevendo o que está acontecendo

    "MUDANÇAS SÃO FEITAS COM FUNÇÕES PURAS" - Para dizer como o estado vai ser transformado,
    você escreve uma função PURA, que não vai alterar o estado anterior. Além disso os redutores
    são COMPOSICIONAIS (mais adiante)
*/