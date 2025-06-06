import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import {
  Container,
  LogoWrapper,
  Logo,
  TitleNav,
  Menu,
  MenuItem,
  Footer,
  User,
  UserPhoto,
  UserInfo,
  UserName,
  UserRole,
  Backdrop,
} from "./Sidebar.styles";

import { Squares } from "@/components/atoms/Icons/Squares";
import { IconTeam } from "@/components/atoms/Icons/IconTeam";
import { Calendar } from "@/components/atoms/Icons/Calendar";
import { People2 } from "@/components/atoms/Icons/People2";
import { UserIcon } from "@/components/atoms/Icons/UserIcon";
import { PowerOff } from "@/components/atoms/Icons/PowerOff";

import { useAuth } from "@/contexts/AuthContext";
interface SidebarProps {
  isMobileOpen?: boolean;
  onClose?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isMobileOpen, onClose }) => {
  const { pathname, push } = useRouter();
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    push("/login");
  };

  return (
    <>
      {isMobileOpen && <Backdrop onClick={onClose} />}
      <Container $mobileOpen={isMobileOpen}>
        <div>
          <LogoWrapper>
            <Logo src="/tropa_icon.png" alt="Logo Tropa" />
          </LogoWrapper>

          <TitleNav>MENU</TitleNav>

          <Menu>
            <Link href="/dashboards" passHref>
              <MenuItem $active={pathname === "/dashboards"}>
                <Squares />
                <span>Dashboard</span>
              </MenuItem>
            </Link>
            <Link href="/eventos" passHref>
              <MenuItem $active={pathname === "/eventos"}>
                <Calendar />
                <span>Eventos</span>
              </MenuItem>
            </Link>
            <Link href="/equipes" passHref>
              <MenuItem $active={pathname === "/equipes"}>
                <IconTeam />
                <span>Equipes</span>
              </MenuItem>
            </Link>
            <Link href="/inscricoes" passHref>
              <MenuItem $active={pathname === "/inscricoes"}>
                <People2 />
                <span>Inscrições</span>
              </MenuItem>
            </Link>
          </Menu>
        </div>

        <Footer>
          <User>
            <UserPhoto src="/user_photo.png" alt="Usuário" />
            <UserInfo>
              <UserName>Kaique Steck</UserName>
              <UserRole>Administrador</UserRole>
            </UserInfo>
          </User>
          <MenuItem>
            <UserIcon />
            <span>Alterar dados</span>
          </MenuItem>
          <MenuItem onClick={handleLogout}>
            <PowerOff />
            <span>Sair</span>
          </MenuItem>
        </Footer>
      </Container>
    </>
  );
};
