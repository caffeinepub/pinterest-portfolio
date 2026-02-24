import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { ReferralLink } from '../backend';

export function useReferralLinks() {
  const { actor, isFetching } = useActor();

  return useQuery<ReferralLink[]>({
    queryKey: ['referralLinks'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllReferralLinks();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useReferralTracking() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: bigint) => {
      if (!actor) throw new Error('Actor not initialized');
      const targetUrl = await actor.redirectAndTrackClick(id);
      return targetUrl;
    },
    onSuccess: () => {
      // Invalidate referral links to refresh click counts
      queryClient.invalidateQueries({ queryKey: ['referralLinks'] });
    },
  });
}
