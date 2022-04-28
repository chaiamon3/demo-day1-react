import { useState, useEffect } from "react"
import axios from "axios"

const Users = () => {
    const [users, setUsers] = useState([])

    // Call data from api https://jsonplaceholder.typicode.com/users
    useEffect(() => {
        console.log("Use effect");
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(function (response) {
                console.log(response)
                setUsers(response.data)
            })
    }, [])

    console.log(users);
    return (
        <div>
            Demo with API.
            {users.map(user => <li key={user.id}>{user.name}</li>)}
        </div>
    )
}

export default Users