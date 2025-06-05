import React from "react";
import {
  TableContainer,
  TableRow,
  TableCell,
  StatusBadge,
  StatusDot,
  TableActions,
  AddButton,
  SearchBar,
  SearchInput,
  TableHeader,
} from "./EventTable.styles";
import { MoreHorizontal } from "lucide-react";

export const EventTable: React.FC = () => {
  const eventos = [
    {
      nome: "Clube do Laço Coração Pantaneiro",
      equipes: 10,
      status: "Ativo",
      data: "09 a 11 de Junho",
    },
    {
      nome: "Clube do Laço Coração Pantaneiro",
      equipes: 10,
      status: "Ativo",
      data: "09 a 11 de Junho",
    },
  ];

  return (
    <TableContainer>
      <TableHeader>
        <SearchBar>
          <SearchInput placeholder="Buscar eventos" />
        </SearchBar>
        <AddButton>+ Inserir novo</AddButton>
      </TableHeader>
      <TableRow header>
        <TableCell header>Nome do evento</TableCell>
        <TableCell header>Total de equipes</TableCell>
        <TableCell header>Status</TableCell>
        <TableCell header>Data</TableCell>
        <TableCell header></TableCell>
      </TableRow>

      {eventos.map((evento, i) => (
        <TableRow key={i}>
          <TableCell>{evento.nome}</TableCell>
          <TableCell>{evento.equipes}</TableCell>
          <TableCell>
            <StatusBadge>
              <StatusDot />
              {evento.status}
            </StatusBadge>
          </TableCell>
          <TableCell>{evento.data}</TableCell>
          <TableCell>
            <TableActions>
              <MoreHorizontal size={16} color="#CC6237" />
            </TableActions>
          </TableCell>
        </TableRow>
      ))}
    </TableContainer>
  );
};
