export const addTodo = (text) => ({
    type: 'ADD_TODO',
    text
})

export const toggleTodo = (index) => ({
    type: 'TOGGLE_TODO',
    index
})

const initialState = []

const todos = (state = initialState, action = {}) => {
    switch(action.type){
        case 'ADD_TODO':
            return [...state, { text: action.text, completed: false}]
        case 'TOGGLE_TODO':
            return state.map((todo, index) => index == action.index ? {...todo, completed: !todo.completed} : todo)
        default:
            return state
    }
}

export default todos