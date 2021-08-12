<template>
  <div class="rounded-lg bg-white mb-2">
    <div class="flex flex-col">
      <!-- cover -->
      <div v-if="item.cover" class="max-h-64 overflow-hidden rounded-t-lg">
        <img :src="item.cover" :alt="item.slug" referrerPolicy="no-referrer" />
      </div>
      <!-- title -->
      <h2 class="px-4 py-2 mt-4 text-xl font-bold opacity-80">
        <a :href="url">
          {{ item.title }}
        </a>
      </h2>
      <!-- meta -->
      <ArticleMeta :item="item" />
      <!-- desc -->
      <p class="px-4 py-2 text-base">
        {{ item.description || item.custom_description }}
      </p>
      <!-- read button -->
      <div class="pl-4 pb-4 mt-2 pt-2 text-sm">
        <a :href="url">阅读全文»</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCalendar, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { format } from 'date-fns';
import ArticleMeta from './meta.vue';

export default {
  components: {
    FontAwesomeIcon,
    faInfoCircle,
    ArticleMeta,
  },
  props: ['item'],
  data() {
    return {
      faCalendar,
      faInfoCircle,
    };
  },
  methods: {
    readArticle() {
      console.log(this.item);
    },
  },
  computed: {
    url(): string {
      return `/articles/${this.item.slug}`;
    },
  },
};
</script>

<style scoped>
</style>
