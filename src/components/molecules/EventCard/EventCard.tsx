import { Evento } from "@/types/Evento";
import { Edit } from "@/components/atoms/Icons/Edit";
import { Trash } from "@/components/atoms/Icons/Trash";
import { formatDateRange } from "@/utils/formatDateRange";
import {
  Card,
  Footer,
  IconButton,
  Label,
  StatusDot,
  Value,
} from "./EventCard.styles";

interface Props {
  evento: Evento;
  onDelete: (id: number) => void;
}

export const EventCard: React.FC<Props> = ({ evento, onDelete }) => (
  <Card>
    <Label>Nome:</Label>
    <Value>{evento.name}</Value>

    <Label>Equipes:</Label>
    <Value>{evento.totalTeams}</Value>

    <Label>Status:</Label>
    <Value>
      <StatusDot $status={evento.status} /> {evento.status}
    </Value>

    <Label>Data:</Label>
    <Value>{formatDateRange(evento.startDate, evento.endDate)}</Value>

    <Footer>
      <IconButton onClick={() => null}>
        <Edit />
      </IconButton>
      <IconButton onClick={() => onDelete(evento.id)}>
        <Trash />
      </IconButton>
    </Footer>
  </Card>
);
