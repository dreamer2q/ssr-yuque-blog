
<template>
  <div class="flex flex-row">
    <Sidebar />
    <!-- article list -->
    <div class="flex-grow flex-col py-4 bg-white rounded-lg">
      <!-- title -->
      <h1 class="px-4 text-2xl">标签: {{ tag }}</h1>
      <!-- divider -->
      <div class="px-4 py-2 my-4 bg-gray-300 text-sm">
        <p class="space-x-1">
          <span><FontAwesomeIcon :icon="faInfoCircle" /> 备注</span>
          语雀很不注重“标签”，可能因为标签是跨“知识库”存在的。
        </p>
      </div>
      <!-- tags content -->
      <div class="px-4 py-2 flex flex-col items-center">
        <div class="text-sm pb-4">此标签共有 {{ tagsCount }} 个文章</div>
        <!-- tags -->
        <!-- <div class="flex flex-wrap items-center space-x-2 space-y-1">
          <div v-for="(val, key) in tags" :key="key">
            <a :href="`/tags/${key}`" :style="`font-size: ${val + 14}px`">
              {{ key }}
            </a>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Sidebar from '@/components/sidebar/index.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

export default {
  props: ['fetchData'],
  components: {
    Sidebar,
    FontAwesomeIcon,
  },
  data() {
    return {
      faInfoCircle,
    };
  },
  computed: {
    tag(): string {
      return (this.$route.params.tag as string) || '';
    },
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
