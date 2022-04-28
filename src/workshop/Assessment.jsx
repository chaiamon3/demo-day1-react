import { useState } from "react"

const Assessment = () => {
    const [todoList, setTodoList] = useState([])
    const [todoName, setTodoName] = useState("")
    const [y, setY] = useState(0)
    const [x, setX] = useState(0)

    function add() {
        if (todoName != "") {
            setX(x + 1)
            setY(y + 1)
            setTodoList([...todoList, todoName])
            setTodoName("")
        }
    }

    const strikeTodo = (e) => {
        if (e.target.style.textDecoration == "line-through") {
            e.target.style.textDecoration = "none"
            setX(x + 1)
        } else {
            e.target.style.textDecoration = "line-through"
            setX(x - 1)
        }
    }

    return (
        <div>
            <input type="text" value={todoName} onChange={(e) => { setTodoName(e.target.value) }} /><button type="button" onClick={add}>Add</button><br />
            {x} remaining out of {y} tasks
                <ul>
                {
                    todoList.map(entry => <li key={entry} onClick={strikeTodo}>{entry}</li>)
                }
            </ul>
        </div>
    )
}

export default Assessment