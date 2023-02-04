//react
import React from "react"

//styles
import { HomeStyled } from './home.styles'

//router
import { useNavigate } from "react-router-dom"

//components
import Button from "../../components/Button/button.component"
import Navbar from "../../components/Navbar/navbar.component"

const Home = () => {

  const navigate = useNavigate()

  const handleButtonClickProducts = () => {
    navigate('/products')
  }

  const handleButtonClickAllProducts = () => {
    navigate('/allproducts')
  }


  return (
    <>
    <Navbar/>
      <HomeStyled>
        <Button onClick={handleButtonClickProducts}>Visualizar um produto</Button>
        <Button onClick={handleButtonClickAllProducts}>Acessar todos os produtos</Button>  
      </HomeStyled>
    </>
  )
}

export default Home