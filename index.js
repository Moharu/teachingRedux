/*
    Primeiramente, movemos o código relacionado ao todoApp para um arquivo diferente
*/

import todoApp, { addTodo, toggleTodo } from './todoApp'
import { createStore } from 'redux'

/*
    Agora, vamos falar sobre composição de redutores.
    Conforme a aplicação vai ficando mais complexa, o redutor
    da aplicação vai crescendo cada vez mais, mas é possível
    separar ele em diversos redutores menores, com funçoes específicas.

    Digamos que agora queremos um filtro de visibilidade para nossa lista
    de TODOS

    ele vai ter as opcoes: SHOW_ALL, SHOW_COMPLETED, HIDE_COMPLETED
    a única ação será: SET_VISIBILITY_FILTER, que terá como parametro o novo filtro
*/

let defaultState = {
    visibilityFilter: 'SHOW_ALL'
}

let visibilityReducer = (state = defaultState, action) => {
    switch(action.type){
        default:
            return state
    }
}
