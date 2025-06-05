import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  max-width: 1680px;
  margin: 0 auto;
  gap: 30px;
  height: 100vh;
  background: ${({ theme }) => theme.colors.white};
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 10px;
  width: 100%;
  max-width: 1410px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid rgba(9, 66, 143, 0.17);
  border-radius: 10px;
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

export const Table = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 10px 0;
  width: 100%;
  border-top: 1px solid rgba(204, 98, 55, 0.1);
`;
