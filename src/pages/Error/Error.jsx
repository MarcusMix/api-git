import { useNavigate } from "react-router-dom"
import Button from "../../components/Button/button.component"
import { DivContainer, Title } from "../../components/Products/products.styles"

const ErrorPage = () => {

  const navigate = useNavigate()

  const handleBackToHome = () => {
    navigate('/')
  }

  return (
    <DivContainer>
      <Title>Página não encontrada</Title>
      <Button onClick={handleBackToHome}>Voltar para a tela inicial</Button>
    </DivContainer>
  )
}

export default ErrorPage