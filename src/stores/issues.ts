import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useIssuesStore = defineStore('issues', () => {
  // TODO: Fix data type
  const state = ref(''); // all = '', open, close
  const labels = ref<string[]>([]);

  return {
    // State
    state,
    labels,

    // Getters

    // Actions
    toggleLabel(labelName: string) {
      // TODO implement
      throw new Error('We did not implemented this yet');
    },
  };
});
