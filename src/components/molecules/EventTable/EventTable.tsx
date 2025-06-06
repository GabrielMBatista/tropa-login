import React, { useState } from "react";
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
  DropdownMenu,
  DropdownItem,
  TableScrollWrapper,
  MobileCardWrapper,
} from "./EventTable.styles";
import { faker } from "@faker-js/faker";
import { Evento } from "@/types/Evento";
import { MoreVertical } from "lucide-react";
import { Edit } from "@/components/atoms/Icons/Edit";
import { Trash } from "@/components/atoms/Icons/Trash";
import { formatDateRange } from "@/utils/formatDateRange";
import { EventCard } from "./EventCard";

interface EventTableProps {
  eventos: Evento[];
  onAdd: (evento: Omit<Evento, "id">) => void;
  onDelete: (id: number) => void;
}

export const EventTable: React.FC<EventTableProps> = ({
  eventos,
  onAdd,
  onDelete,
}) => {
  const [search, setSearch] = useState("");
  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);

  const searchTerm = search.toLowerCase();
  const eventosFiltrados = eventos.filter(
    (evento) =>
      evento.name.toLowerCase().includes(searchTerm) ||
      evento.startDate.toLowerCase().includes(searchTerm) ||
      evento.endDate.toLowerCase().includes(searchTerm)
  );

  const handleAddRandom = () => {
    const start = faker.date.soon();
    const end = faker.date.soon({ days: 10 });

    const novoEvento: Omit<Evento, "id"> = {
      name: faker.company.name(),
      totalTeams: faker.number.int({ min: 3, max: 20 }),
      status: Math.random() > 0.5 ? "Ativo" : "Inativo",
      startDate: start.toISOString().split("T")[0],
      endDate: end.toISOString().split("T")[0],
    };

    onAdd(novoEvento);
  };

  return (
    <TableContainer>
      <TableHeader>
        <SearchBar>
          <SearchInput
            placeholder="Buscar eventos"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </SearchBar>
        <AddButton onClick={handleAddRandom}>+ Inserir novo</AddButton>
      </TableHeader>
      <TableScrollWrapper>
        <TableRow header>
          <TableCell header>Nome do evento</TableCell>
          <TableCell header>Total de equipes</TableCell>
          <TableCell header>Status</TableCell>
          <TableCell header>Data</TableCell>
          <TableCell header />
        </TableRow>

        {eventosFiltrados.map((evento) => (
          <React.Fragment key={evento.id}>
            <TableRow>
              <TableCell>{evento.name}</TableCell>
              <TableCell>{evento.totalTeams}</TableCell>
              <TableCell>
                <StatusBadge>
                  <StatusDot $status={evento.status} />
                  {evento.status}
                </StatusBadge>
              </TableCell>
              <TableCell>
                {formatDateRange(evento.startDate, evento.endDate)}
              </TableCell>
              <TableCell>
                <TableActions>
                  <button
                    onClick={() =>
                      setOpenDropdownId(
                        openDropdownId === evento.id ? null : evento.id
                      )
                    }
                  >
                    <MoreVertical size={16} color="#CC6237" />
                  </button>

                  {openDropdownId === evento.id && (
                    <DropdownMenu>
                      <DropdownItem>
                        <Edit
                          width={14}
                          height={14}
                          style={{ marginRight: 8 }}
                        />
                        Editar
                      </DropdownItem>
                      <DropdownItem onClick={() => onDelete(evento.id)}>
                        <Trash
                          width={14}
                          height={14}
                          style={{ marginRight: 8 }}
                        />
                        Deletar
                      </DropdownItem>
                    </DropdownMenu>
                  )}
                </TableActions>
              </TableCell>
            </TableRow>

            <MobileCardWrapper>
              <EventCard evento={evento} onDelete={onDelete} />
            </MobileCardWrapper>
          </React.Fragment>
        ))}

        {eventosFiltrados.length === 0 && (
          <TableRow>
            <TableCell as="td" colSpan={5}>
              Nenhum evento encontrado.
            </TableCell>
          </TableRow>
        )}
      </TableScrollWrapper>
    </TableContainer>
  );
};
