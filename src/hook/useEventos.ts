import { Evento } from '@/types/Evento';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export const useEventos = (onRedirect?: (is: boolean) => void) => {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery<Evento[]>({
    queryKey: ["eventos"],
    queryFn: async () => {
      const res = await fetch("/api/eventos", {
        credentials: "include",
      });

      if (res.status === 401) {
        onRedirect?.(true);
        window.location.href = "/login";
        return [];
      }

      return res.json();
    },
  });

  const addEvento = useMutation({
    mutationFn: async (novo: Omit<Evento, "id">) => {
      const res = await fetch("/api/eventos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(novo),
        credentials: "include",
      });

      if (res.status === 401) {
        onRedirect?.(true);
        window.location.href = "/login";
        return;
      }

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
        credentials: "include",
      });

      if (res.status === 401) {
        onRedirect?.(true);
        window.location.href = "/login";
        return;
      }

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
