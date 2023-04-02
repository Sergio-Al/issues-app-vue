<script setup lang="ts">
import { ref } from 'vue';

const isOpen = ref<boolean>(true);

const title = ref<string>('');
const body = ref<string>('');
const labels = ref<string[]>([]);
</script>

<template>
  <div class="q-pa-md q-gutter-sm">
    <q-dialog v-model="isOpen" position="bottom">
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
                v-model="title"
                filled
                type="text"
                label="title"
                placeholder="Title"
                class="q-mb-sm"
              />
              <q-select
                :options="[]"
                class="q-mb-sm"
                filled
                label="Multiple Selection"
                multiple
                stack-label
                use-chips
                v-model="labels"
              />

              <!-- Markdown Editor -->
            </div>
          </q-card-section>
          <q-card-actions align="left">
            <q-btn flat label="Cancel" v-close-popup color="dark" />
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
