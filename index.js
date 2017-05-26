const addTodo = (text) => ({
    type: 'ADD_TODO',
    text
})

const toggleTodo = (index) => ({
    type: 'TOGGLE_TODO',
    index
})

/*
    Já temos nossos ACTION CREATORS, agora precisamos
    imaginar qual vai ser o formato do nosso estado.

    Como ele é uma lista de TODOs, ele pode ser simplesmente
    um array com objetos que possuem a informação do texto e se
    o TODO foi completo.

    Portanto, o estado inicial do nosso APP é na verdade um array vazio
*/

const initialState = []

/*
    Agora vamos escrever a função redutora que vai dizer como o estado da
    aplicação vai responder a uma ação em particular.

    Abaixo temos o redutor apresentado anteriormente, você consegue
    implementar o caso do 'TOGGLE_TODO'?
    LEMBRE-SE: NÃO DEVEMOS ALTERAR O ESTADO ANTERIOR
*/

const todoApp = (state = initialState, action = {}) => {
    switch(action.type){
        case 'ADD_TODO':
            return [...state, { text: action.text, completed: false}]
        case 'TOGGLE_TODO':
            return state // ???
        default:
            return state
    }
}

let state = todoApp() // inicializando com o estado DEFAULT
state = todoApp(state, addTodo('plantar uma arvore'))
state = todoApp(state, addTodo('doar sangue'))
console.log('antes: ', state)
// Alterar o estado de 'doar sangue' pra COMPLETED
console.log('depois: ', state)