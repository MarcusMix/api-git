//styles
import { GoogleContainer, LoginContainer } from './login.styles'

//icons
import { FcGoogle } from 'react-icons/fc'

//google auth
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../../utils/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'


//router
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

//components
import Navbar from '../../components/Navbar/navbar.component'


const Login = () => {

    const navigate = useNavigate()

    const [user] = useAuthState(auth) 

    //sign in with google
    const googleProvider = new GoogleAuthProvider()

    const GoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider)
            console.log(result.user)
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if(user) {
            navigate('/')
        } else {
            console.log('login')
        }
    },[user])

    return (
        <>
            <Navbar/>
            <LoginContainer>
                <h2>Faça login no Google para prosseguir!</h2>
                <GoogleContainer onClick={GoogleLogin}>
                    <h2> <FcGoogle size="20"/> Sign in with Google</h2>
                </GoogleContainer>
            </LoginContainer>
        </>
    )
}

export default Login