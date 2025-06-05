import { StyledLabel } from './Label.styles';

interface LabelProps {
  children: React.ReactNode;
}

export const Label = ({ children }: LabelProps) => {
  return <StyledLabel>{children}</StyledLabel>;
};