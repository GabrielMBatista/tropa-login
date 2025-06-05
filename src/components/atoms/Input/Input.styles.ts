import styled from "styled-components";

export const StyledInput = styled.input`
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.gray500};
  border-radius: ${({ theme }) => theme.borderRadius.base};
  font-size: ${({ theme }) => theme.font.size.md};
  color: ${({ theme }) => theme.colors.gray900};

  &:focus {
    border-color: ${({ theme }) => theme.colors.focusRing};
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray300};
  }
`;
