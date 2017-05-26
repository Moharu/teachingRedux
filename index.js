import todos, { addTodo, toggleTodo } from './todos'
import visibilityFilter, { setVisibilityFilter } from './visibilityFilter'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import undoable from './undoable'

const logger = (store) => {
    return (oldDispatch) => {
        return (action) => {
            console.log('old state', store.getState(), '\n')
            console.log('dispatching', action, '\n')
            let result = oldDispatch(action)
            console.log('next state', store.getState(), '\n')
            return result
        }
    } 
}

/*
    O jeito que fazemos a atribuição do middleware automaticamente
    na criação da store, é utilizando o applyMiddleware do redux,
    com a lista de middlewares que vamos utilizar (em ordem)
*/

let store = createStore(
    combineReducers({
        todos: todos,
        visibilityFilter
    }),
    applyMiddleware(logger)
)

store.dispatch(addTodo('primeiro todo'))
store.dispatch(addTodo('segundo todo'))