//http
import axios from "axios"

//hooks
import { useNavigate } from "react-router-dom"
import { useMemo, useState, useEffect } from "react"

//styles
import { ContainerCard, ImageProduct, ProductsCard, ContainerProduct } from "./allproducts.styles;"

//components
import Loading from "../Loading/loading"
import Button from "../Button/button.component"
import CustomInput from "../Input/input.component"

const AllProducts = () => {

    const [busca, setBusca] = useState("")
    const [products, setProducts] = useState([])
    const [loading, isLoading] = useState(false)

    useEffect(() => {
        getAllProductsData()
    },[])
    
    const getAllProductsData = async () => {
        try {
            isLoading(true)
            const response = await axios.get('https://fakestoreapi.com/products')
            setProducts(response.data)
            console.log(response.data)
        } catch (error) {
            console.log(error)
        } finally {
            isLoading(false)
        }
    }

    //filtrar produtos
    const productFiltered = useMemo(() => {
        const lowerBusca = busca.toLowerCase()

        return products.filter((product) => 
            product.title.toLowerCase()
            .includes(lowerBusca))
    }, [busca, products])

    
    const navigate = useNavigate()
    
    const handleButtonBackHome  = () => {
        navigate('/')
    }

    const handleSearchInput = (e) => {
        setBusca(e.target.value)
    }

    return (
        <>
            {loading ? <Loading type='spin' color="black" /> : (
                <div>
                    <ContainerProduct productFiltered={productFiltered}>
                        <Button onClick={handleButtonBackHome}>Voltar para Home</Button>
                        <CustomInput onChange={handleSearchInput} value={busca} placeholder="Pesquisar produto..." type="text"/>
                    </ContainerProduct>

                    <ContainerCard>
                    {productFiltered.map((product, key) => (
                            <ProductsCard key={key}>
                                <h3>{product.title}</h3>
                                <p>{product.description}</p>
                                <ImageProduct src={product.image}/>
                                <p>Preço: R${product.price}</p>
                            </ProductsCard>
                    ))}
                    </ContainerCard>
                </div>
            )}
        </>
    )
}

export default AllProducts