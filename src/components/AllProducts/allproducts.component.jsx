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

//router
import { useParams, Link } from 'react-router-dom'



const AllProducts = () => {

    let params = useParams()
    console.log(params.id)

    //context
    const {products, loading} = useContext(ProductContext)

    //state
    const [busca, setBusca] = useState("")
  

    console.log(products)

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
            {loading ? <Loading color="black" /> : (
                <div>
                    <ContainerProduct>
                        <CustomInput onChange={handleSearchInput} value={busca} placeholder="Pesquisar produto..." type="text"/>
                        <Button onClick={handleButtonBackHome}> <RiArrowGoBackFill/> Voltar</Button>
                    </ContainerProduct>

                    <ContainerCard>
                            {productFiltered.map((product, key) => (
                                <ProductsCard key={key}>
                                    <Link to={'/products/' + product.id}>
                                        <h3>{product.title}</h3>
                                        <ImageProduct src={product.image}/>
                                        <p>Preço: R${product.price}</p>
                                    </Link>
                                </ProductsCard>
                            ))}
                    </ContainerCard>
                </div>
            )}
        </>
    )
}

export default AllProducts