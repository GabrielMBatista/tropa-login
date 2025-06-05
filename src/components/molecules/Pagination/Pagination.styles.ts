import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm} 0;
  border-top: 1px solid rgba(204, 98, 55, 0.1);
  width: 100%;
`;

export const PaginationButton = styled.button`
  background: #f5f5f5;
  border-radius: 200px;
  padding: 10px 16px;
  font-size: ${({ theme }) => theme.font.size.base};
  color: ${({ theme }) => theme.colors.black};
  border: none;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const PageNumber = styled.button<{ active?: boolean }>`
  background: ${({ active, theme }) =>
    active ? theme.colors.primary : "#F5F5F5"};
  color: ${({ active, theme }) =>
    active ? theme.colors.white : theme.colors.black};
  border-radius: 200px;
  width: 35px;
  height: 35px;
  border: none;
  cursor: pointer;
  font-size: ${({ theme }) => theme.font.size.base};
  display: flex;
  align-items: center;
  justify-content: center;
`;
