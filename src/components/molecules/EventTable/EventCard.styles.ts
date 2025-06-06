import styled from "styled-components";

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  padding: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const Label = styled.span`
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.font.size.base};
  display: block;
  margin-bottom: 4px;
`;

export const Value = styled.span`
  color: ${({ theme }) => theme.colors.gray500};
  font-size: ${({ theme }) => theme.font.size.base};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  display: block;
`;

export const StatusDot = styled.span<{ $status: string }>`
  display: inline-block;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  margin-right: 6px;
  background-color: ${({ $status }) =>
    $status === "Ativo" ? "#4DEF00" : "#ccc"};
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.md};
`;

export const IconButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;

  svg {
    color: ${({ theme }) => theme.colors.primary};
    width: 18px;
    height: 18px;
  }
`;
