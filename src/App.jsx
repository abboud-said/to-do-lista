import { useRef, useState } from "react"

function App() {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState("")
  const [editingIndex, setEditingIndex] = useState(null)
  const [editingValue, setEditingValue] = useState("")

  const inputRef = useRef(null)
  const isAddDisabled = inputValue.trim() === ""

  function handleAddTodo() {
    const trimmedValue = inputValue.trim()

    if (trimmedValue === "") {
      return
    }

    setTodos([...todos, trimmedValue])
    setInputValue("")
    inputRef.current.focus()
  }

  function handleDeleteTodo(indexToDelete) {
    setTodos(todos.filter((_, index) => index !== indexToDelete))
  }

  function handleStartEdit(index) {
    setEditingIndex(index)
    setEditingValue(todos[index])
  }

  return (
    <div className="app">
      <header className="hero">
        <span className="eyebrow">Daily Focus</span>
        <h1>Plan your day with clarity.</h1>
        <p className="subtitle">
          Capture quick tasks, keep them visible, and clear them as you go.
        </p>
      </header>

      <section className="board">
        <div className="composer">
          <div className="composer-field">
            <label htmlFor="todo-input">New task</label>
            <input
              id="todo-input"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault()
                  handleAddTodo()
                }
              }}
              ref={inputRef}
              placeholder="Add a task you want to finish today"
            />
          </div>

          <button
            type="button"
            onClick={handleAddTodo}
            disabled={isAddDisabled}
            className="primary"
          >
            Add task
          </button>
        </div>

        <div className="toolbar">
          <div className="meta">
            <span>{todos.length} items</span>
            {editingIndex !== null ? (
              <span>Editing #{editingIndex + 1}</span>
            ) : (
              <span>Ready when you are</span>
            )}
          </div>
        </div>

        <ul className="todo-list">
          {todos.map((todo, index) => (
            <li key={index} className="todo">
              <span className="text">{todo}</span>
              <div className="todo-actions">
                <button
                  type="button"
                  className="ghost"
                  onClick={() => handleStartEdit(index)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="ghost danger"
                  onClick={() => handleDeleteTodo(index)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>

        {todos.length === 0 && (
          <p className="empty">No tasks yet. Add your first one.</p>
        )}
      </section>
    </div>
  )
}

export default App
