import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font.size.md};
  font-weight: 600;
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.base};
  transition: background 0.3s ease;

  &:hover {
    background-color: #0025cc;
  }
`;