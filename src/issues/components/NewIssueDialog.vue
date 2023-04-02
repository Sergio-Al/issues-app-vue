<script setup lang="ts">
import { ref, watch } from 'vue';
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';

interface Props {
  isOpen: boolean;
  labels: string[];
}

interface Emits {
  (e: 'onClose'): void;
}

const props = defineProps<Props>();
const emits = defineEmits<Emits>();

const isOpen = ref<boolean>(false);

const title = ref<string>('');
const body = ref<string>('');
const labels = ref<string[]>([]);

watch(props, () => {
  isOpen.value = props.isOpen;
});
</script>

<template>
  <div class="q-pa-md q-gutter-sm">
    <q-dialog v-model="isOpen" position="bottom" persistent>
      <q-card style="width: 500px">
        <q-form class="q-gutter-md">
          <q-linear-progress :value="1" color="primary" />

          <q-card-section class="column no-wrap">
            <div>
              <div class="text-weight-bold">New Issue</div>
              <div class="text-grey">Add new issue with labels</div>
            </div>

            <q-space />
            <div>
              <q-input
                dense
                v-model="title"
                filled
                type="text"
                label="title"
                placeholder="Title"
                class="q-mb-sm"
              />
              <q-select
                dense
                :options="props.labels"
                class="q-mb-sm"
                filled
                label="Multiple Selection"
                multiple
                stack-label
                use-chips
                v-model="labels"
              />

              <!-- Markdown Editor -->
              <md-editor
                v-model="body"
                placeholder="Markdown"
                language="en-US"
              />
            </div>
          </q-card-section>
          <q-card-actions align="left">
            <q-btn
              flat
              label="Cancel"
              v-close-popup
              color="dark"
              @click="emits('onClose')"
            />
            <!-- It's only a div with flex 1 -->
            <q-space />
            <q-btn
              flat
              label="Add Issue"
              v-close-popup
              color="dark"
              type="submit"
            />
          </q-card-actions>
        </q-form>
      </q-card>
    </q-dialog>
  </div>
</template>

<style scoped></style>
