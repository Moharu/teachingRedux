import todos, { addTodo, toggleTodo } from './todos'
import visibilityFilter, { setVisibilityFilter } from './visibilityFilter'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import undoable from './undoable'

let store = createStore(
    combineReducers({
        todos: todos,
        visibilityFilter
    })
)

/*
    Vamos falar agora sobre MIDDLEWARE
    o redux permite que sejam configuradas funções que podem
    interceptar ações e tomar decisões específicas.

    Um exemplo simples: Queremos fazer um Logger que diga
    as ações despachadas, bem como o novo estado da aplicação.

    Uma implementação simples seria:
*/
const dispatchAndLog = (action) => {
    console.log('dispatching', action)
    store.dispatch(action)
    console.log('next state', store.getState())
}

/*
    Porém seria necessário chamar essa função específica, importando ela em 
    todos lugares. 

    Uma gambiarra possível, é substituir o método de dispatch da store por um
    novo, de nossa autoria:

    let oldDispatch = store.dispatch // lembrando que são todas funcoes puras
    store.dispatch = (action) => {
        console.log('dispatching', action)
        let result = oldDispatch(action)
        console.log('next state', store.getState())
        return result
    }

    Porém, é uma gambiarra.

    Quando escrevemos um middleware, o que estamos fazendo é, basicamente
    INCREMENTANDO a função DISPATCH original da store.

    Ao invés de darmos REPLACE na função de dispatch,
    o que fazemos é RETORNAR UMA NOVA função, que pode ser encadeada
    com outras, e assim por diante.
*/

const logger = (store) => {
    return (oldDispatch) => {
        return newDispatch = (action) => {
            console.log('old state', store.getState(), '\n')
            console.log('dispatching', action, '\n')
            let result = oldDispatch(action)
            console.log('next state', store.getState(), '\n')
            return result
        }
    } 
}

/*  
    Repare que ao chamar logger(store), será retornada uma
    nova função. Essa função deve ser chamada recebendo como parâmetro o valor
    anterior de DISPATCH (como o dispatch funcionava antes do middleware ser aplicado).
    Ao fazer isso, finalmente retornamos uma NOVA função, que (agora sim) é o nosso NOVO dispatch

    Se quisermos aplicar o logger na nossa store:
*/

store.dispatch(addTodo('primeiro todo'))

let newDispatch = logger(store)(store.dispatch)
store = {...store, dispatch: newDispatch}

store.dispatch(addTodo('segundo todo'))