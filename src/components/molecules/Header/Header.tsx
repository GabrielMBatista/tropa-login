import React from "react";
import { Container, TopText, PageTitle, Row } from "./Header.styles";

export const Header: React.FC = () => {
  return (
    <Container>
      <TopText>
        Bem vindo de volta, <strong>Kaique Steck</strong>
      </TopText>
      <Row>
        <PageTitle>Todos eventos</PageTitle>
      </Row>
    </Container>
  );
};
