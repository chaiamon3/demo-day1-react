import { useState, useEffect } from "react"
import axios from "axios"

const Users = () => {
    const [user, setUser] = useState({})
    const [counter, setCounter] = useState(1)

    // Call data from api https://jsonplaceholder.typicode.com/users
    useEffect(() => {
        console.log("Use effect");
        axios.get("https://jsonplaceholder.typicode.com/users/" + counter)
            .then(function (response) {
                // console.log(response)
                setUser(response.data)
            })
    }, [counter])

    console.log(user)

    return (
        <div>
            Demo with API.
            <button onClick={() => setCounter(counter + 1)}>Add</button>
            {/* {users.map(user => <li key={user.id}>{user.name}</li>)} */}
            <h2>{user.name}</h2>
        </div>
    )
}

export default Users