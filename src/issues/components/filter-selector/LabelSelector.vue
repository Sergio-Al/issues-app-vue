<script setup lang="ts">
import LoaderSpinner from 'src/shared/components/LoaderSpinner.vue';
</script>

<template>
  <LoaderSpinner size="50px" :thickness="1" />

  <q-chip outline color="primary" clickable v-for="label of 10" :key="label">
    Something
  </q-chip>
</template>

<style scoped></style>
