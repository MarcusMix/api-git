import { CustomButton } from "./button.styles"

const Button = ({ onClick, children, onChange, backgroundColor }) => {
  return (
    <CustomButton
      onClick={onClick}
      onChange={onChange}
      backgroundColor={backgroundColor}
    >
      {children}
    </CustomButton>
  )
}

export default Button