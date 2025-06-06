import React, { useState } from "react";
import { Sidebar } from "@/components/molecules/Sidebar/Sidebar";
import { Header } from "@/components/molecules/Header/Header";
import { Wrapper, Container, Content, MobileToggle } from "./Layout.styles";
import { Menu } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Wrapper>
      <MobileToggle onClick={() => setIsSidebarOpen(true)}>
        <Menu size={20} />
      </MobileToggle>

      <Sidebar
        isMobileOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <Container>
        <Header />
        <Content>{children}</Content>
      </Container>
    </Wrapper>
  );
};
