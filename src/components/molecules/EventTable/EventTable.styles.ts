import styled from "styled-components";

export const TableContainer = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  overflow: hidden;
`;

export const TableRow = styled.div<{ header?: boolean }>`
  display: flex;
  align-items: center;
  height: 38px;

  border-top: ${({ header }) =>
    header ? "none" : "1px solid rgba(204, 98, 55, 0.1)"};
`;

export const TableCell = styled.div<{ header?: boolean }>`
  flex: 1;
  font-size: ${({ theme }) => theme.font.size.md};
  font-family: ${({ theme }) => theme.font.family};
  font-weight: ${({ header, theme }) =>
    header ? theme.font.weight.medium : theme.font.weight.regular};
  color: ${({ header, theme }) =>
    header ? "rgba(204, 98, 55, 0.5)" : theme.colors.grayMedium};

  &:nth-child(2),
  &:nth-child(3),
  &:nth-child(4) {
    padding-left: ${({ theme }) => theme.spacing.md};
  }

  &:nth-child(5) {
    display: flex;
    justify-content: flex-end;
  }
`;

export const StatusBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
`;

export const StatusDot = styled.div`
  width: 9px;
  height: 9px;
  background: ${({ theme }) => theme.colors.statusActive};
  border-radius: 50%;
`;

export const TableActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const TableHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 60px;
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  background: ${({ theme }) => theme.colors.grayLight};
  border-radius: 33px;
  margin-right: ${({ theme }) => theme.spacing.sm};
`;

export const SearchInput = styled.input`
  border: none;
  background: transparent;
  font-size: ${({ theme }) => theme.font.size.md};
  color: rgba(0, 0, 0, 0.4);
  outline: none;
  &::placeholder {
    color: rgba(0, 0, 0, 0.2);
  }
`;

export const AddButton = styled.button`
  padding: 10px 15px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 33px;
  border: none;
  font-size: ${({ theme }) => theme.font.size.md};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  cursor: pointer;
`;
