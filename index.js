import todos, { addTodo, toggleTodo } from './todos'
import visibilityFilter, { setVisibilityFilter } from './visibilityFilter'

import { createStore, combineReducers } from 'redux'

let store = createStore(
    combineReducers({
        todos,
        visibilityFilter
    })
)

/*
    Que tal algo mais complexo agora?
    Vamos tentar projetar a funcionalidade de UNDO, REDO
    no nosso app.
*/