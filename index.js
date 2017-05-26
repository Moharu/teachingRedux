import todos, { addTodo, toggleTodo } from './todoApp'

let setVisibilityFilter = (filter) => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})

let defaultState = 'SHOW_ALL'

let visibilityFilter = (state = defaultState, action) => {
    switch(action.type){
        case 'SET_VISIBILITY_FILTER':
            return action.filter
        default:
            return state
    }
}

const defaultAppState = {
    todos: [],
    visibilityFilter: 'SHOW_ALL'
}

/*
    Simples:
    Cada chave do estado tem seu próprio redutor, e como as ações são distintas,
    cada redutor sabe como vai agir e se aquela ação é destinada a ele
*/

const todoApp = (state = defaultAppState, action) => {
    return {
        todos: todos(state.todos, action),
        visibilityFilter: visibilityFilter(state.visibilityFilter, action)
    }
}

/*
    O REDUX tem uma função que automatiza esse processo para nós: combineReducers,
    para criar nossa store, fazemos o seguinte:
*/

import { createStore, combineReducers } from 'redux'

const combinedReducers = combineReducers({
    todos,
    visibilityFilter
})

// Nesse ponto, 'combinedReducers' tem EXATAMENTE a mesma função do nosso 'todoApp'

let store = createStore(combinedReducers)