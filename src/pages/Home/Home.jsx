import { DivContainer, Title } from "../../components/Products/products.styles"
import React from "react"
import { useNavigate } from "react-router-dom"
import Button from "../../components/Button/button.component"

const Home = () => {

  const navigate = useNavigate()

  const handleButtonClickProducts = () => {
    navigate('/products')
  }

  const handleButtonClickAllProducts = () => {
    navigate('/allproducts')
  }

  return (
    <DivContainer>
      <Title>Bem Vindo</Title>
      <div>
        <Button onClick={handleButtonClickProducts}>Visualizar um produto</Button>
        <Button onClick={handleButtonClickAllProducts}>Acessar todos os produtos</Button>
      </div>
    </DivContainer>
  )
}

export default Home