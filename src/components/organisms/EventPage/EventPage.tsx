import { useEventos } from "@/hook/useEventos";
import { EventTable } from "@/components/molecules/EventTable/EventTable";
import { Pagination } from "@/components/molecules/Pagination/Pagination";
import { ContentBox } from "./EventPage.styles";
import { useState } from "react";

export const EventPage = () => {
  const { data, isLoading, addEvento, deleteEvento } = useEventos();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const eventos = data ?? [];
  const totalPages = Math.ceil(eventos.length / itemsPerPage);

  const eventosPaginados = eventos.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (isLoading) return <div>Carregando eventos...</div>;

  return (
    <ContentBox>
      <EventTable
        eventos={eventosPaginados}
        onAdd={addEvento}
        onDelete={deleteEvento}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onChangePage={setCurrentPage}
      />
    </ContentBox>
  );
};
