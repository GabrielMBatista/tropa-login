import React from "react";
import { Wrapper, Title, Subtitle } from "./PagePlaceholder.styles";

interface PagePlaceholderProps {
  title?: string;
  subtitle?: string;
}

export const PagePlaceholder: React.FC<PagePlaceholderProps> = ({
  title = "Página em construção",
  subtitle = "Estamos trabalhando nesta funcionalidade. Em breve estará disponível!",
}) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Wrapper>
  );
};
