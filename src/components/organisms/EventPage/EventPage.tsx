import { EventTable } from "@/components/molecules/EventTable/EventTable";
import { Pagination } from "@/components/molecules/Pagination/Pagination";
import { ContentBox } from "./EventPage.styles";

export const EventPage = () => {
  return (
    <ContentBox>
      <EventTable />
      <Pagination />
    </ContentBox>
  );
};
