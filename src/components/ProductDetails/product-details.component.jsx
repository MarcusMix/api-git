//fetch
import axios from "axios";

//context
import { ProductContext } from '../../store/product'

//hooks
import { useEffect, useState, useContext } from "react"

//react
import React from 'react'

const productId = 7;

const ProductDetails = ({ productId }) => {
    
    //context
    const {isLoading} = useContext(ProductContext)

    //state
    const [product, setProduct] = useState()
    
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                isLoading(true)
                const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
                setProduct(response.data);
            } catch (error) {
                console.log(error)
            } finally {
                isLoading(false)
            }
        }

        fetchProduct()
    }, [])

    console.log(product)

    return (
        <div> página em desenvolvimento...
            {/* <h1>{product.title}</h1> */}
        </div>
    )
}

export default ProductDetails