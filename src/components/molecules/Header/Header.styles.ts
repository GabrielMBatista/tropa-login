import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: ${({ theme }) => theme.spacing.lg};
  width: 100%;
  height: 119px;
`;

export const TopText = styled.span`
  font-family: ${({ theme }) => theme.font.family};
  font-size: ${({ theme }) => theme.font.size.xl};
  line-height: ${({ theme }) => theme.font.lineHeight.base};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  color: rgba(0, 0, 0, 0.6);

  strong {
    font-weight: ${({ theme }) => theme.font.weight.bold};
    color: ${({ theme }) => theme.colors.grayDark};
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const PageTitle = styled.h1`
  font-family: ${({ theme }) => theme.font.family};
  font-size: ${({ theme }) => theme.font.size.xxl};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  line-height: 23px;
  color: rgba(204, 98, 55, 0.9);
`;
