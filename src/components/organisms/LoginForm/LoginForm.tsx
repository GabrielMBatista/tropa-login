import {
  Container,
  FormWrapper,
  LeftPanel,
  Logo,
  Title,
  TitleBlock,
  Subtitle,
  FormElement,
  InputBox,
  StyledInput,
  StyledLabel,
  SubmitButton,
  RightPanel,
  Illustration,
  OverlayImage,
  TitleGroup,
  PasswordWrapper,
  ToggleVisibility,
} from "./LoginForm.styles";
import { useState } from "react";
import { Eye } from "@/components/atoms/Icons/Eye";
import { EyeOff } from "@/components/atoms/Icons/EyeOff";
import { authenticate } from "@/utils/auth";

export const LoginForm = () => {
  const [email, setEmail] = useState("admin@admin.com");
  const [senha, setSenha] = useState("123456");
  const [erro, setErro] = useState("");
  const [senhaVisivel, setSenhaVisivel] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("✅ handleLogin ativado (POST manual)");

    const sucesso = await authenticate(email, senha);
    if (sucesso) {
      window.location.href = "/eventos";
    } else {
      setErro("Credenciais inválidas");
    }
  };

  return (
    <Container>
      <FormWrapper>
        <LeftPanel>
          <TitleBlock>
            <Logo src="/tropa_icon.png" alt="Logo Tropa" />
            <TitleGroup>
              <Title>Bem-vindo de volta</Title>
              <Subtitle>Entre com sua conta para acessar o painel.</Subtitle>
            </TitleGroup>
          </TitleBlock>

          <FormElement onSubmit={handleLogin}>
            <InputBox>
              <StyledLabel htmlFor="email">E-mail</StyledLabel>
              <StyledInput
                id="email"
                name="email"
                type="text"
                placeholder="seunome@seuservidor.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
              />
            </InputBox>

            <InputBox>
              <StyledLabel htmlFor="senha">Senha</StyledLabel>
              <PasswordWrapper>
                <StyledInput
                  id="senha"
                  name="senha"
                  type={senhaVisivel ? "text" : "password"}
                  placeholder="Digite aqui"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  autoComplete="current-password"
                />
                <ToggleVisibility
                  type="button"
                  onClick={() => setSenhaVisivel(!senhaVisivel)}
                  aria-label="Mostrar ou ocultar senha"
                >
                  {senhaVisivel ? <EyeOff /> : <Eye />}
                </ToggleVisibility>
              </PasswordWrapper>
            </InputBox>

            {erro && (
              <span style={{ color: "red", fontSize: "12px" }}>{erro}</span>
            )}

            <SubmitButton type="submit">Enviar</SubmitButton>
          </FormElement>
        </LeftPanel>

        <RightPanel>
          <OverlayImage src="/login_frame.png" alt="Fundo Laranja" />
          <Illustration src="/login_icon.png" alt="Personagem" />
        </RightPanel>
      </FormWrapper>
    </Container>
  );
};
