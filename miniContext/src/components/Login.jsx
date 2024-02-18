import React, { useContext, useState } from 'react'
import Usercontext from '../context/Usercontext'

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { setUser } = useContext(Usercontext)
    const handleSubmit = () => {
        e.preventDefault()
        setUser(username, password)
    }
    return (
        <div>
            <h2>Login</h2>
            <input type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder='username' />
                {"  "}
            <input type="text" placeholder='password' />
            <button onClick={handleSubmit}>Submit</button>

        </div>
    )
}

export default Login;