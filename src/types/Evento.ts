export interface Evento {
  id: number;
  name: string;
  totalTeams: number;
  status: "Ativo" | "Inativo";
  startDate: string;
  endDate: string;
}
