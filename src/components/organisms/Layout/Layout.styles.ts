import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.white};
`;

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden; // evita scroll no container inteiro
  background: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.main`
  flex: 1;
  overflow-y: auto;
  padding: ${({ theme }) => theme.spacing.lg};
`;
