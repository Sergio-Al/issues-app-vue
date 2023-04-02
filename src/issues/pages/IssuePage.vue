<script setup lang="ts">
import LoaderSpinner from 'src/shared/components/LoaderSpinner.vue';
import { useRoute } from 'vue-router';
import IssueCard from '../components/IssueList/IssueCard.vue';
import useIssue from '../composables/useIssue';

const route = useRoute();
const { id } = route.params;

const { issueQuery, issueCommentsQuery } = useIssue(+id);
</script>

<template>
  <router-link class="text-white" to="/">Go Back</router-link>

  <!-- Header -->
  <LoaderSpinner v-if="issueQuery.isLoading.value" color="white" />
  <IssueCard v-else-if="issueQuery.data.value" :issue="issueQuery.data.value" />
  <p v-else>Issue with ID {{ id }} not found</p>

  <!-- Comments -->
  <LoaderSpinner
    v-if="issueCommentsQuery.isLoading.value"
    :thickness="1"
    size="1.5rem"
  />

  <div v-else-if="issueCommentsQuery.data.value" class="column">
    <span class="text=h3 q-mb-md"
      >Comments ({{ issueCommentsQuery.data.value?.length || 0 }})</span
    >
    <IssueCard
      :issue="comment"
      v-for="comment in issueCommentsQuery.data.value"
      :key="comment.id"
    ></IssueCard>
  </div>
</template>

<style scoped></style>
