const addTodo = (text) => ({
    type: 'ADD_TODO',
    text
})

const toggleTodo = (index) => ({
    type: 'TOGGLE_TODO',
    index
})

const initialState = []

const todoApp = (state = initialState, action = {}) => {
    switch(action.type){
        case 'ADD_TODO':
            return [...state, { text: action.text, completed: false}]
        case 'TOGGLE_TODO':
            return state.map((todo, index) => index == action.index ? {...todo, completed: !todo.completed} : todo)
        default:
            return state
    }
}

/*
    Até aqui, entendemos praticamente todos FUNDAMENTOS do REDUX,
    sem nem mesmo encostar na biblioteca em si.
    
    O que ela vai fazer, essencialmente, é o trabalho que tínhamos designado
    a variável 'state' no exemplo anterior, ou seja, segurar o estado da aplicação.
    Para isso, vamos criar uma 'STORE', que tem as seguintes responsabilidades:
        * Segurar o estado da aplicação
        * Permitir a leitura desse estado
        * Permitir que ele seja atualizado através de ações
        * Permitir listeners para alterações no estado
*/

import { createStore } from 'redux'

/*
    Para criar a nossa store, basta passarmos para ela o redutor da nossa
    aplicação, e (opcionalmente), o estado inicial
*/

const stateReceivedFromBackendServer = [{
    text: 'plantar uma árvore',
    completed: false
}, {
    text: 'doar sangue',
    completed: true
}]

let store = createStore(todoApp, stateReceivedFromBackendServer)

// Se quisermos verificar o estado da aplicação:
console.log('estado após criacao: ', store.getState())
// Se quisermos reagir a alterações do estado (o retorno é a função para UNSUBSCRIBE)
let unsubscribe = store.subscribe(() => {
    console.log('estado atualizado: ', store.getState())
})
// Se quisermos despachar uma ação:
store.dispatch(toggleTodo(0))
// Parar de reagir a updates no estado
unsubscribe()


/*
    Repare que, neste ponto, temos toda a lógica da aplicação
    sem ter encostado em uma linha de UI.
*/