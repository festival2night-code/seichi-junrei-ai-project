import { useState } from 'react'

function TodoList() {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Learning React', done: true },
        { id: 2, text: 'Work on a project', done: false },
        { id: 3, text: 'Job hunting', done: false }
    ])
    const [inputValue, setInputValue] = useState('')

    // addTodo
    const addTodo = () => {
        if (inputValue.trim() === '') return
        const newTodo = {
            id: Date.now(),
            text: inputValue,
            done: false
        }
        setTodos([...todos, newTodo])
        setInputValue('')
    }

    // toggleTodo
    const toggleTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, done: !todo.done } : todo
        ))
    }

    // deleteTodo   
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    return (
        <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px' }}>
            <h2>📋 Todo List</h2>
            
            {/* Input Area */}
            <div>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && addTodo()}
                    placeholder="Enter a todo item"
                    style={{ padding: '8px', width: '70%' }}
                />
                <button onClick={addTodo} style={{ padding: '8px 16px', marginLeft: '8px' }}>
                    Add
                </button>
            </div>

            {/* Statistics */}
            <p style={{ marginTop: '16px' }}>
                Completed: {todos.filter(t => t.done).length} / Total: {todos.length}
            </p>

            {/* Todo List */}
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {todos.length === 0 ? (
                    <p>🎉 All todos are completed!</p>
                ) : (
                    todos.map(todo => (
                        <li key={todo.id} style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '10px',
                            marginBottom: '8px',
                            backgroundColor: '#f5f5f5',
                            borderRadius: '4px'
                        }}>
                            <span
                                onClick={() => toggleTodo(todo.id)}
                                style={{
                                    cursor: 'pointer',
                                    textDecoration: todo.done ? 'line-through' : 'none',
                                    color: todo.done ? '#888' : '#000'
                                }}
                            >
                                {todo.done ? '✅' : '⬜'} {todo.text}
                            </span>
                            <button
                                onClick={() => deleteTodo(todo.id)}
                                style={{
                                    backgroundColor: '#ff4444',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '4px',
                                    padding: '4px 12px',
                                    cursor: 'pointer'
                                }}
                            >
                                Delete  
                            </button>
                        </li>
                    ))
                )}
            </ul>
        </div>
    )
}

export default TodoList