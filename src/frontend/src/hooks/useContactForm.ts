import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

export function useContactForm() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async ({ name, email, message }: { name: string; email: string; message: string }) => {
      if (!actor) {
        throw new Error('Actor not initialized');
      }
      await actor.submitContact(name, email, message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contacts'] });
    },
  });

  return {
    submitContact: (name: string, email: string, message: string) => 
      mutation.mutateAsync({ name, email, message }),
    isSubmitting: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
  };
}
