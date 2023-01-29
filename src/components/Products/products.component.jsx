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
  const [title, setTitle] = useState([]);
  const [image, setImage] = useState([]);
  const [description, setDescription] = useState([]);
  const [loading, isLoading] = useState(false)

  const getProductData = async () => {
    try {
      isLoading(true)
      const response = await axios.get(`https://fakestoreapi.com/products/${number}`)
      setTitle(response.data.title)
      setImage(response.data.image)
      setDescription(response.data.description)
    } catch (error) {
      console.log(error)
    } finally {
      isLoading(false)
    }
  }


  useEffect(() => {
    getProductData()
  }, [])

  useEffect(() => {
    getProductData()
  }, [number])

  const navigate = useNavigate()

  const handleButtonBackHome = () => {
    navigate('/')
  }

  return (
    <>
    {loading &&  <Loading type='spin' color="black"/>}
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
        <option value="16">16</option>
      </Select>

      <Title>Produto {number} foi selecionado!</Title>
      <Product>
        <H2>{title}</H2>
        {/* <img src={image} alt="" sizes="100px"/> */}
        <Image src={image} />
        <p>{description}</p>
      </Product>
    </DivContainer>
    <Button onClick={handleButtonBackHome}>Voltar para tela inicial</Button>
    </>
  )
}


export default Products