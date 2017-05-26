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

let state = todoApp()
state = todoApp(state, addTodo('plantar uma arvore'))
state = todoApp(state, addTodo('doar sangue'))
console.log('antes: ', state)
state = todoApp(state, toggleTodo(1))
console.log('depois: ', state)