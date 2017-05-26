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
console.log(store.getState())
// Se quisermos reagir a alterações do estado (o retorno é a função para UNSUBSCRIBE)
let unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})
// Se quisermos despachar uma ação:
store.dispatch(toggleTodo(0))
// Parar de reagir a updates no estado
unsubscribe()


/*
    Repare que, neste ponto, temos toda a lógica da aplicação
    sem ter encostado em uma linha de UI.
*/