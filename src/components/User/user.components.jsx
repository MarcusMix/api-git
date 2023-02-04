import React from 'react';

//styles
import { DivContainer } from './user.styles';

//google auth
import {  useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../utils/firebase'

//routes
import { useNavigate } from 'react-router-dom';

//components
import Loading from '../Loading/loading';
import Button from '../Button/button.component';
import Navbar from '../Navbar/navbar.component';


function User() {

    const [user, loading] = useAuthState(auth)

    const navigate = useNavigate()

    if(loading) return <Loading/>
    if(!user) navigate('/login')
    if(user) 
    return (
        <>
        <Navbar/>
            <DivContainer>
                <div>

                <h1>Detalhes do perfil!</h1>
                <h2>Nome de usuário: {user.displayName}</h2>
                <h2>E-mail: {user.email}</h2>
                <img style={{width:"100px"}} src={user.photoURL} alt="" />
                </div>
                <Button onClick={() => auth.signOut()}>Sign out</Button>
            </DivContainer>
        </>
    )

}

export default User;