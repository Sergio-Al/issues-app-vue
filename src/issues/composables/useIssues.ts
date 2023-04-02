import { useQuery } from '@tanstack/vue-query';
import { Issue, State } from '../interfaces/issue';
import { githubApi } from 'src/api/githubApi';
// import { useIssuesStore } from 'src/stores/issues';
// import { storeToRefs } from 'pinia';
import useStore from './useStore';

const getIssues = async (labels: string[], state: State): Promise<Issue[]> => {
  const params = new URLSearchParams();

  if (state) params.append('state', state);
  if (labels.length > 0) {
    const labelsString = labels.join(',');
    params.append('labels', labelsString);
  }

  const { data } = await githubApi.get('/issues', {
    params,
  });
  return data;
};

const useIssues = () => {
  const { labels, state } = useStore();
  // const issuesStore = useIssuesStore();
  // const { labels, state } = storeToRefs(issuesStore);

  // we are using reactive references (labels and state)
  const issuesQuery = useQuery(['issues', { labels, state }], () =>
    getIssues(labels.value, state.value)
  );

  return {
    issuesQuery,
  };
};

export default useIssues;
