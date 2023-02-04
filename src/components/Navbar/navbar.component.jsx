import Button from '../Button/button.component';

//styles
import { NavbarStyle, AvatarIcon, ContainerNav } from './navbar.styles'

//routes
import { useNavigate } from 'react-router-dom';

//google auth
import { auth } from '../../utils/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'


const Navbar = () => {

    const [user] = useAuthState(auth) 

    const navigate = useNavigate()

    const handleButtonClickLogin = () => {
        navigate('/login')
    }

    const handleButtonClickProfileUser = () => {
        navigate('/user')
    }

    if(user) {
        return (
            <>
                <NavbarStyle>
                    <h1 onClick={() => navigate('/')}>Marcus Store</h1>
                    
                    <ContainerNav>
                        <Button 
                            onClick={handleButtonClickProfileUser}
                            >{user.displayName}
                        </Button>
                        <AvatarIcon src={user.photoURL} alt="avatar icon" />
                    </ContainerNav>
                </NavbarStyle>
            </>
        )
    } 
    if(!user) {
        return (
            <>
                <NavbarStyle>
                <h1 onClick={() => navigate('/')}>Marcus Store</h1>
                    <ContainerNav>
                    <Button 
                            onClick={handleButtonClickLogin} 
                            backgroundColor={(props) => props.theme.colors.blue}
                            >Sign in
                        </Button>
                    </ContainerNav>
                </NavbarStyle>
            </>
        )

    } else {
        return (
            <>
                <NavbarStyle>
                <h1 onClick={() => navigate('/')}>Marcus Store</h1>
                    <div>
                        <Button 
                            onClick={handleButtonClickLogin} 
                            backgroundColor={(props) => props.theme.colors.blue}
                            >Sign in
                        </Button>
                        <Button 
                            onClick={handleButtonClickProfileUser}
                            >Usuário
                        </Button>
                    </div>
                </NavbarStyle>
            </>
        )
    }
}

export default Navbar