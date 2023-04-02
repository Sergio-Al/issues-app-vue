<script setup lang="ts">
import { ref } from 'vue';
import LoaderSpinner from 'src/shared/components/LoaderSpinner.vue';
import FilterSelector from 'src/issues/components/filter-selector/FilterSelector.vue';
import IssueList from 'src/issues/components/IssueList/IssueList.vue';
import useIssues from '../composables/useIssues';
import FloatingButtons from '../components/FloatingButtons.vue';
import NewIssueDialog from '../components/NewIssueDialog.vue';
import useLabels from '../composables/useLabels';

const { issuesQuery } = useIssues();
const { data } = useLabels();

const isOpen = ref<boolean>(false);

const openDialog = () => {
  console.log('clickpagesss');
  isOpen.value = true;
};
</script>

<template>
  <div class="row q-mb-md">
    <div class="col-12">
      <span class="text-h4">Github Issues</span>
    </div>
  </div>

  <div class="row">
    <div class="col-xs-12 col-md-4">
      <!-- TODO Filters -->
      <!-- FilterSelector -->
      <FilterSelector />
    </div>

    <div class="col-xs-12 col-md-8">
      <!-- TODO Loader -->
      <LoaderSpinner v-if="issuesQuery.isLoading.value" color="primary" />

      <!-- TODO IssueList - Array de IssueCard -->
      <IssueList :issues="issuesQuery.data?.value || []" v-else />
    </div>
  </div>

  <!-- FloatingButtons -->
  <FloatingButtons
    :buttons="[
      { icon: 'add', color: 'primary', size: 'lg', action: openDialog },
    ]"
  />

  <!-- New issue dialog -->
  <NewIssueDialog
    v-if="data"
    :labels="data?.map((label) => label.name) || []"
    :is-open="isOpen"
    @on-close="isOpen = false"
  />
</template>

<style scoped></style>
