import React, { useState } from "react";
import {
  PaginationContainer,
  PaginationButton,
  PageNumber,
} from "./Pagination.styles";

export const Pagination: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <PaginationContainer>
      <PaginationButton
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Anterior
      </PaginationButton>

      {Array.from({ length: totalPages }, (_, i) => (
        <PageNumber
          key={i + 1}
          active={currentPage === i + 1}
          onClick={() => handlePageClick(i + 1)}
        >
          {i + 1}
        </PageNumber>
      ))}

      <PaginationButton
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Próxima
      </PaginationButton>
    </PaginationContainer>
  );
};
