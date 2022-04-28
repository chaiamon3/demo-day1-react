import { useState } from "react"

const Hello2 = () => {
    const [name, setName] = useState("")
    const [age, setAge] = useState(0)

    return (
        <div>
            <form>
                <Name name={name} onNameChanged={(event) => setName(event.target.value)} />
                <Age age={age} onAgeChanged={(event) => setAge(event.target.value)} />
                <Show name={name} age={age} />
            </form>
        </div>
    )
}

const Name = ({ name, onNameChanged }) => {
    return (
        <div>
            Name: <input type="text" value={name} onChange={onNameChanged} />
        </div>
    )
}

const Age = ({ age, onAgeChanged }) => {
    return (
        <div>
            Age: <input type="text" value={age} onChange={onAgeChanged} />
        </div>
    )
}

const Show = ({ name, age }) => {
    return (
        <div>
            Hi, {name} with age = {age}
        </div>
    )
}

export default Hello2