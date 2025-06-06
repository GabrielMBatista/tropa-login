import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Evento } from "@/types/Evento";

export const useEventos = () => {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery<Evento[]>({
    queryKey: ["eventos"],
    queryFn: async () => {
      const res = await fetch("/api/eventos");
      return res.json();
    },
  });

  const addEvento = useMutation({
    mutationFn: async (novo: Omit<Evento, "id">) => {
      const res = await fetch("/api/eventos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(novo),
      });
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["eventos"] });
    },
  });

  const deleteEvento = useMutation({
    mutationFn: async (id: number) => {
      const res = await fetch(`/api/eventos/${id}`, {
        method: "DELETE",
      });
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["eventos"] });
    },
  });

  return {
    data,
    isLoading,
    addEvento: addEvento.mutate,
    deleteEvento: deleteEvento.mutate,
  };
};
