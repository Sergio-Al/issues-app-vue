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
      if (labels.value.includes(labelName)) {
        labels.value = labels.value.filter((label) => label !== labelName);
        return;
      }

      labels.value.push(labelName);
    },
  };
});
