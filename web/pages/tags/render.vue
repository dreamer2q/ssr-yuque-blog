<template>
  <div class="flex flex-row">
    <Sidebar />
    <!-- article list -->
    <div class="flex-grow flex-col py-4 bg-white rounded-lg">
      <!-- title -->
      <h1 class="px-4 text-2xl">标签</h1>
      <!-- divider -->
      <div class="h-2 my-4 bg-gray-300"></div>
      <!-- tags content -->
      <div class="px-4 py-2 flex flex-col items-center">
        <div class="text-sm pb-4">目前共计 {{ tagsCount }} 个标签</div>
        <div class="flex flex-wrap items-center space-x-2 space-y-1">
          <div v-for="(val, key) in tags" :key="key">
            <a :href="`/tags/${key}`" :style="`font-size: ${val + 14}px`">
              {{ key }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Sidebar from '@/components/sidebar/index.vue';

export default {
  props: ['fetchData'],
  components: {
    Sidebar,
  },
  computed: {
    tags(): any {
      return this.fetchData.data;
    },
    tagsCount(): number {
      return Object.keys(this.tags).length;
    },
  },
};
</script>

<style></style>
