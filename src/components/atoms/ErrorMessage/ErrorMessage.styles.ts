import styled from 'styled-components';

export const StyledErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.error};
  font-size: 14px;
  margin-top: -8px;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;