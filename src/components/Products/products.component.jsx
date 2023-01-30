//http
import axios from 'axios'

//hooks
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//styles
import { DivContainer, H2, Product, Title, Select, Image } from "./products.styles"

//component
import Loading from '../Loading/loading'
import Button from '../Button/button.component';

const Products = () => {

  const [number, setNumber] = useState(1);
  const [product, setProduct] = useState([]);
  const [loading, isLoading] = useState(false)

  useEffect(() => {
    getProductData()
  }, [number])

  const getProductData = async () => {
    try {
      isLoading(true)
      const response = await axios.get(`https://fakestoreapi.com/products/${number}`)
      setProduct(response.data)
    } catch (error) {
      console.log(error)
    } finally {
      isLoading(false)
    }
  }

  const navigate = useNavigate()

  const handleButtonBackHome = () => {
    navigate('/')
  }

  return (
    <div>
    {loading ? <Loading type='spin' color="black"/> : (
      <>
      <Title>Shopping do Marcus</Title>
  
      <DivContainer>
     
        <Select value={number} onChange={(e) => {setNumber(e.target.value)}}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option> 
        </Select>
        <div>
          <Title>Produto {number} foi selecionado!</Title>
          <Title>{product.title}</Title>
        </div>
        <Product>
          <H2>{product.title}</H2>
          <Image src={product.image} />
          <p>{product.description}</p>
        </Product>
      </DivContainer>
      <DivContainer>
        <Button onClick={handleButtonBackHome}>Voltar para tela inicial</Button>
      </DivContainer>
      </>
      )}
     </div>
  )
}


export default Products