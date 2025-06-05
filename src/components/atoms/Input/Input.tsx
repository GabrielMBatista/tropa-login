import { StyledInput } from './Input.styles';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = (props: InputProps) => {
  return <StyledInput {...props} />;
};