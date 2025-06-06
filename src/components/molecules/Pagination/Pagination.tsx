import React from "react";
import {
  PaginationContainer,
  PaginationButton,
  PageNumber,
} from "./Pagination.styles";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onChangePage: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onChangePage,
}) => {
  return (
    <PaginationContainer>
      <PaginationButton
        onClick={() => onChangePage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Anterior
      </PaginationButton>

      {Array.from({ length: totalPages }, (_, i) => (
        <PageNumber
          key={i + 1}
          active={currentPage === i + 1}
          onClick={() => onChangePage(i + 1)}
        >
          {i + 1}
        </PageNumber>
      ))}

      <PaginationButton
        onClick={() => onChangePage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Próxima
      </PaginationButton>
    </PaginationContainer>
  );
};
