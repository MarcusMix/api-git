//fetch
import axios from "axios";

//context
import { ProductContext } from '../../store/product'

//hooks
import { useEffect, useState, useContext } from "react"

//react
import React from 'react'

import Loading from "../Loading/loading";

import { useParams } from 'react-router-dom'

const ProductDetails = ({ productId }) => {

    let params = useParams()
    
    //context
    const {isLoading} = useContext(ProductContext)

    //state
    const [productDetails, setProductDetails] = useState()
    
    const fetchProduct = async () => {
        try {
            isLoading(true)
            const response = await axios.get(`https://fakestoreapi.com/products/${params.id}`)
            setProductDetails(response.data);
        } catch (error) {
            console.log(error)
        } finally {
            isLoading(false)
        }
    }
    useEffect(() => {
        fetchProduct()
    }, [params.id])

    console.log(productDetails)

    return (
        <div> página em desenvolvimento...
        </div>
    )
}

export default ProductDetails