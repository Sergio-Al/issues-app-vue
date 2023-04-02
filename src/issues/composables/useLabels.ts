import { githubApi } from './../../api/githubApi';
import { useIssuesStore } from './../../stores/issues';
import { useQuery } from '@tanstack/vue-query';
import { Label } from './../interfaces/label';
import { storeToRefs } from 'pinia';

const getLabels = async (): Promise<Label[]> => {
  const { data } = await githubApi.get<Label[]>('/labels?per_page=100');
  return data;
};

const useLabels = () => {
  const issuesStore = useIssuesStore();
  const { labels: selectedLabels } = storeToRefs(issuesStore);

  const { data, isLoading } = useQuery(['labels'], getLabels, {
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  return {
    data,
    isLoading,

    // Getters
    selectedLabels,

    // Methods
    toggleLabel: issuesStore.toggleLabel,
  };
};

export default useLabels;
