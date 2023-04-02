<script setup lang="ts">
import { toRef } from 'vue';
interface Button {
  icon: string;
  color?: string;
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  action: () => void;
}

interface Props {
  buttons: Button[];
}

const props = withDefaults(defineProps<Props>(), {
  buttons: () => [],
});

const buttons = toRef(props, 'buttons');
</script>

<template>
  <div class="fab">
    <q-btn
      v-for="(item, index) in buttons"
      :key="index"
      :color="item.color"
      round
      :icon="item.icon"
      :size="item.size"
      @click="item.action"
    />
  </div>
</template>

<style scoped>
.fab {
  position: fixed;
  bottom: 30px;
  right: 30px;
}
</style>
