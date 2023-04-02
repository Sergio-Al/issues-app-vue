<script setup lang="ts">
import LoaderSpinner from 'src/shared/components/LoaderSpinner.vue';
import useLabels from 'src/issues/composables/useLabels';

const { data, isLoading, toggleLabel, selectedLabels } = useLabels();
</script>

<template>
  <div class="q-mt-md">
    <LoaderSpinner v-if="isLoading" size="50px" :thickness="1" />
    <q-chip
      v-else
      :outline="!selectedLabels.includes(item.name)"
      clickable
      @click="toggleLabel(item.name)"
      :style="{ color: `#${item.color}` }"
      v-for="item in data"
      :key="item.id"
    >
      {{ item.name }}
    </q-chip>
  </div>
</template>

<style scoped></style>
