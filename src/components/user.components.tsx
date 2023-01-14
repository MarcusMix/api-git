import React, { useEffect, useState } from 'react';
import { DivContainer } from './users.styles';

// import api from '../services/api';
import axios from 'axios';

function User() {

    const [user, setUser] = useState([]);

    const fetchUser = async () => {
        try {
            const { data } = await axios.get("https://api.github.com/users/marcusmix")
            setUser(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchUser()
    }, [])

    return (
        <DivContainer>
            <h1>Usuário: {user}</h1>

            <h1>Bibliografia: {user}</h1>
        </DivContainer>
    );
}

export default User;