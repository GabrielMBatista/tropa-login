import { StyledInput } from "./Input.styles";

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (
  props
) => <StyledInput {...props} />;
