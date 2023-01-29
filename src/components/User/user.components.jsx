import React, { useEffect, useState } from 'react';

// Styles
import { DivContainer, InputSearch } from './user.styles';

// API git
import api from '../../services/api';


function User() {

    const [user, setUser] = useState([]);

    const fetchUser = async () => {
        try {
            const { data } = await api.get("/users/marcusmix")
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
          <h1>Usuário: {user?.login}</h1>
          <h1>Bibliografia: {user?.bio}</h1>
        </DivContainer>
    );
}

export default User;