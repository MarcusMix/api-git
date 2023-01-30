import { CustomButton } from "./button.styles"

const Button = ({ onClick, children, onChange }) => {
  return (
    <CustomButton
      onClick={onClick}
      onChange={onChange}
    >
      {children}
    </CustomButton>
  )
}

export default Button