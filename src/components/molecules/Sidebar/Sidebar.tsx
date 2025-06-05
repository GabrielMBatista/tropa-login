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
} from "./Sidebar.styles";

import { Squares } from "@/components/atoms/icons/Squares";
import { IconTeam } from "@/components/atoms/icons/IconTeam";
import { Calendar } from "@/components/atoms/icons/Calendar";
import { People2 } from "@/components/atoms/icons/People2";
import { UserIcon } from "@/components/atoms/icons/UserIcon";
import { PowerOff } from "@/components/atoms/icons/PowerOff";

export const Sidebar: React.FC = () => {
  const { pathname } = useRouter();

  return (
    <Container>
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
        <MenuItem>
          <PowerOff />
          <span>Sair</span>
        </MenuItem>
      </Footer>
    </Container>
  );
};
