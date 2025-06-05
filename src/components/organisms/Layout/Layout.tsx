import React from "react";
import { Sidebar } from "@/components/molecules/Sidebar/Sidebar";
import { Header } from "@/components/molecules/Header/Header";
import { Wrapper, Container, Content } from "./Layout.styles";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Wrapper>
      <Sidebar />
      <Container>
        <Header />
        <Content>{children}</Content>
      </Container>
    </Wrapper>
  );
};
