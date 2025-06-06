import styled from "styled-components";

export const TableContainer = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
`;

export const TableRow = styled.div<{ header?: boolean }>`
  display: flex;
  align-items: center;
  height: 38px;
  border-top: ${({ header }) =>
    header ? "none" : "1px solid rgba(204, 98, 55, 0.1)"};
  @media (max-width: 768px) {
    display: none;
  }
`;

export const TableCell = styled.div<{ header?: boolean }>`
  flex: 1;
  font-size: ${({ theme }) => theme.font.size.md};
  font-family: ${({ theme }) => theme.font.family};
  font-weight: ${({ header, theme }) =>
    header ? theme.font.weight.medium : theme.font.weight.regular};
  color: ${({ header, theme }) =>
    header ? "rgba(204, 98, 55, 0.5)" : theme.colors.gray500};

  &:nth-child(2),
  &:nth-child(3),
  &:nth-child(4) {
    padding-left: ${({ theme }) => theme.spacing.md};
  }

  &:nth-child(5) {
    display: flex;
    justify-content: flex-end;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const StatusBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
`;

interface DotProps {
  $status: "Ativo" | "Inativo";
}

export const StatusDot = styled.div<DotProps>`
  background-color: ${({ $status }) =>
    $status === "Ativo" ? "#4DEF00" : "#ccc"};
  width: 9px;
  height: 9px;
  border-radius: 100px;
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
  background: ${({ theme }) => theme.colors.gray300};
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

export const TableActions = styled.div`
  z-index: 100 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 26px;
  right: 0;
  background: #fff;
  border: 1px solid rgba(204, 98, 55, 0.3);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  z-index: 20;
  min-width: 120px;
  padding: 4px 0;
`;

export const DropdownItem = styled.button`
  padding: 8px 14px;
  width: 100%;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #252525;
  cursor: pointer;
  &:hover {
    background: #f6f6f6;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const TableScrollWrapper = styled.div`
  width: 100%;
  overflow-x: auto;

  @media (max-width: 768px) {
    & > div {
      min-width: 250px;
    }
  }
`;

export const Row = styled.div`
  margin-bottom: 8px;
`;

export const Actions = styled.div`
  display: flex;
  gap: 10px;
`;

export const MobileCardWrapper = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    margin-top: 8px;
  }
`;
