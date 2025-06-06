export function formatDateRange(start: string, end: string): string {
  const startDate = new Date(start);
  const endDate = new Date(end);

  const dayStart = String(startDate.getDate()).padStart(2, "0");
  const dayEnd = String(endDate.getDate()).padStart(2, "0");

  const month = new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(
    endDate
  );

  return `${dayStart} a ${dayEnd} de ${month}`;
}
