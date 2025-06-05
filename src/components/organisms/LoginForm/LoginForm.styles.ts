import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start; /* <- muda de center para flex-start */
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.sm};
  width: ${({ theme }) => theme.layout.contentWidth};
  height: ${({ theme }) => theme.layout.contentHeight};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.colors.shadow};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
`;

export const LeftPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.md};
  gap: ${({ theme }) => theme.spacing.md};
  width: 339px;
  height: 478px;
`;

export const RightPanel = styled.div`
  width: 397.5px;
  height: 478px;
  position: relative;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
`;

export const OverlayImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 355.5px;
  height: 478px;
  object-fit: cover;
`;

export const Illustration = styled.img`
  position: absolute;
  top: 163px; /* ou ajuste fino com base no Figma */
  left: 1px;
  width: 357px;
  height: 316px;
  object-fit: contain;
`;

export const Logo = styled.img`
  width: 161px;
  height: 25px;
  object-fit: contain;
`;

export const Title = styled.h1`
  width: 299px;
  height: 20px;
  font-family: ${({ theme }) => theme.font.family};
  font-style: normal;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: 26px;
  line-height: 15px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const TitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 35px;
  width: 299px;
`;
export const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

export const Subtitle = styled.p`
  font-family: ${({ theme }) => theme.font.family};
  font-size: ${({ theme }) => theme.font.size.base};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  color: ${({ theme }) => theme.colors.grayMedium};
  line-height: ${({ theme }) => theme.font.lineHeight.tight};
`;

export const FormElement = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  width: 299px;
  margin-top: 15px;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  padding: 10px 25px;
  font-family: ${({ theme }) => theme.font.family};
  font-size: 13px;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  cursor: pointer;
  margin-top: ${({ theme }) =>
    theme.spacing.sm}; // adiciona espaçamento claro após inputs

  &:hover {
    filter: brightness(0.95);
  }
`;

export const StyledLabel = styled.label`
  font-family: ${({ theme }) => theme.font.family};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  font-size: 13px;
  line-height: 15px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const StyledInput = styled.input`
  padding: 10px 20px;
  width: 100%;
  height: 40px;
  border: none;
  background-color: ${({ theme }) => theme.colors.grayLight};
  border-radius: 100px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.grayDark};

  &::placeholder {
    color: ${({ theme }) => theme.colors.grayMedium};
  }
`;

export const PasswordWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const ToggleVisibility = styled.button`
  position: absolute;
  top: 50%;
  right: 15px;
  color: ${({ theme }) => theme.colors.primary};
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
