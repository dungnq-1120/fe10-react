import { ButtonStyled } from "./styles";

interface IButtonProps {
  status: "beginner" | "marketer" | "professional";
  label: string;
}

const Button: React.FC<IButtonProps> = ({ status, label }) => {
  return <ButtonStyled status={status}>{label}</ButtonStyled>;
};
export default Button;
