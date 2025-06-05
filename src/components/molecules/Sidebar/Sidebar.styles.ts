import styled from "styled-components";

export const Container = styled.aside`
  width: 210px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: ${({ theme }) => theme.spacing.lg};
  border-right: 1px solid ${({ theme }) => theme.colors.divider};
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 ${({ theme }) => theme.spacing.md};
  gap: ${({ theme }) => theme.spacing.xs};
  height: 40px;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const Logo = styled.img`
  width: 161px;
  height: 25px;
  object-fit: contain;
`;

export const TitleNav = styled.span`
  font-size: ${({ theme }) => theme.font.size.xs};
  font-weight: ${({ theme }) => theme.font.weight.extrabold};
  color: ${({ theme }) => theme.colors.gray500};
  letter-spacing: 0.12em;
  padding: 0 ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
  padding: 0 ${({ theme }) => theme.spacing.sm};
`;

export const MenuItem = styled.div<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.sm};
  gap: ${({ theme }) => theme.spacing.sm};
  background-color: ${({ $active, theme }) =>
    $active ? theme.colors.primary : "transparent"};
  border-radius: ${({ theme }) => theme.borderRadius.rounded};
  width: 180px;
  height: 35px;
  color: ${({ $active, theme }) =>
    $active ? theme.colors.white : theme.colors.gray900};
  font-size: ${({ theme }) => theme.font.size.lg};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  font-family: ${({ theme }) => theme.font.family};
  cursor: pointer;

  svg {
    width: 15px;
    height: 15px;
    color: ${({ $active, theme }) =>
      $active ? theme.colors.white : theme.colors.gray900};
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.md};
  gap: ${({ theme }) => theme.spacing.xs};
  border-top: 1px solid ${({ theme }) => theme.colors.divider};
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

export const UserPhoto = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  border: 1px solid ${({ theme }) => theme.colors.primary};
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserName = styled.span`
  font-size: ${({ theme }) => theme.font.size.lg};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: ${({ theme }) => theme.colors.black};
`;

export const UserRole = styled.span`
  font-size: ${({ theme }) => theme.font.size.sm};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  color: rgba(0, 0, 0, 0.5);
`;
