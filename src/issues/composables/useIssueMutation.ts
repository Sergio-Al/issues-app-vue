import { useMutation } from '@tanstack/vue-query';
import { Issue } from '../interfaces/issue';
import { githubApi } from 'src/api/githubApi';

interface Args {
  title: string;
  labels?: string[];
  body?: string;
}

const addIssue = async ({
  title,
  body = '',
  labels = [],
}: Args): Promise<Issue> => {
  const newIssueData = {
    title,
    body,
    labels,
  };

  const { data } = await githubApi.post<Issue>('/issues', newIssueData);
  console.log('Data from github', data);
  return data;
};

const useIssueMutation = () => {
  const issueMutation = useMutation(addIssue, {
    onSuccess: () => {
      // When the process finishes successfully
    },
    onSettled: () => {
      // Like finally in try/catch/finally
    },
  });
  return { issueMutation };
};

export default useIssueMutation;
