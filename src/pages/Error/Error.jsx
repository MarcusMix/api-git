//router
import { useNavigate } from "react-router-dom"

//components
import Button from "../../components/Button/button.component"
import Navbar from "../../components/Navbar/navbar.component"

//styles
import { DivContainer, Title } from "../../components/Products/products.styles"

const ErrorPage = () => {

  const navigate = useNavigate()

  const handleBackToHome = () => {
    navigate('/')
  }

  return (
    <>
    <Navbar/>
    <DivContainer>
      <Title>Página não encontrada</Title>
      <Button onClick={handleBackToHome}>Voltar para a tela inicial</Button>
    </DivContainer>
    </>
  )
}

export default ErrorPage