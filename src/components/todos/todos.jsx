import { useState } from "react"
import Todo from "./todo"





const CustomTodos = () => {

    const [todos, setTodos] = useState(Todo())

    console.log(todos)

    const clickTodo = () => {
        const currentTodo = todos.length
        const newObj= {
            id: currentTodo + 1,
            text: `Item${currentTodo + 1}`
        }
        setTodos([...todos,newObj])
    }
    return (
        <div>
            <h1>Welcome to todos</h1>
            <button onClick={clickTodo}>Add Todo</button>
            {
                todos.map(eachTod => {
                    <div key={eachTod.id}>

                        <li>{eachTod.text}</li>

                    </div>
                })
            }
        </div>
    )
}

export default CustomTodos