import { Input } from "./input.styles"

const CustomInput = ({ onChange, value, placeholder }) => {
  return <Input onChange={onChange} value={value} placeholder={placeholder}/>
}

export default CustomInput