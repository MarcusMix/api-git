//component
import ProductDetails from "../../components/ProductDetails/product-details.component"
import { useParams } from "react-router-dom"

const ProductPage = () => {

    const { id } = useParams()

    if (!id) return null

    return (
        <>
           <ProductDetails productId={id}/>
        </>
    )
}

export default ProductPage