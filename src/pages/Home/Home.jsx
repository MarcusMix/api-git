import { DivContainer, Title } from "../../components/Products/products.styles"
import React from "react"
import { useNavigate } from "react-router-dom"
import Button from "../../components/Button/button.component"

const Home = () => {

  const navigate = useNavigate()

  const handleButtonClick = () => {
    navigate('/products')
  }

  return (
    <DivContainer>
      <Title>Bem Vindo</Title>
      <Button onClick={handleButtonClick}>Acessar a loja</Button>
    </DivContainer>
  )
}

export default Home