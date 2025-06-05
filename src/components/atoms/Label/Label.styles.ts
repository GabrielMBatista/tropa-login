import styled from 'styled-components';

export const StyledLabel = styled.label`
  font-size: ${({ theme }) => theme.font.labelSm};
  color: ${({ theme }) => theme.colors.gray700};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;