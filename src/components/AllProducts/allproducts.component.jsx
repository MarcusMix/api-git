//icons
import { RiArrowGoBackFill } from 'react-icons/ri'

//hooks
import { useNavigate } from "react-router-dom"
import { useMemo, useState } from "react"

//styles
import { ContainerCard, ImageProduct, ProductsCard, ContainerProduct } from "./allproducts.styles"

//components
import Loading from "../Loading/loading"
import Button from "../Button/button.component"
import CustomInput from "../Input/input.component"

//context
import { ProductContext } from '../../store/product'
import { useContext } from "react"



const AllProducts = ({productId}) => {

    //context
    const {products, loading} = useContext(ProductContext)

    //state
    const [busca, setBusca] = useState("")
  

    console.log(products)
    // console.log(product.title)

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

    const handlePageProduct  = () => {
        navigate(`/product/${products.id}`)
    }

    const handleSearchInput = (e) => {
        setBusca(e.target.value)
    }

    return (
        <>
            {loading ? <Loading color="black" /> : (
                <div>
                    <ContainerProduct>
                        <CustomInput onChange={handleSearchInput} value={busca} placeholder="Pesquisar produto..." type="text"/>
                        <Button onClick={handleButtonBackHome}> <RiArrowGoBackFill/> Voltar</Button>
                    </ContainerProduct>

                    <ContainerCard onClick={handlePageProduct}>
                    {productFiltered.map((product, key) => (
                            <ProductsCard key={key}>
                                <h3>{product.title}</h3>
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