import todos, { addTodo, toggleTodo } from './todoApp'
import { createStore } from 'redux'

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

/*
    Agora temos dois redutores, o 'todos' (antigo 'todoApp'), e o 'visibilityReducer',
    qual será a cara do estado (UNICO) da nossa aplicação?
*/

const defaultAppState = {
    todos: [],
    visibilityFilter: 'SHOW_ALL'
}

/*
    Como podemos projetar um redutor, que receba as ações JÁ DEFINIDAS e
    atue corretamente ?
*/