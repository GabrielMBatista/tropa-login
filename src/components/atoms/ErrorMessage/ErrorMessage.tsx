import { StyledErrorMessage } from './ErrorMessage.styles';

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return <StyledErrorMessage>{message}</StyledErrorMessage>;
};