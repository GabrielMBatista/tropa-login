import styled from 'styled-components';

export const StyledLabel = styled.label`
  font-size: ${({ theme }) => theme.font.size.sm};
  color: ${({ theme }) => theme.colors.gray900};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;