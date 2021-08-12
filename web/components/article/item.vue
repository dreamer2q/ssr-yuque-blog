<template>
  <div class="rounded-lg bg-white mb-2">
    <div class="flex flex-col">
      <!-- cover -->
      <div v-if="item.cover" class="max-h-64 overflow-hidden rounded-t-lg">
        <img :src="item.cover" :alt="item.slug" referrerPolicy="no-referrer" />
      </div>
      <!-- title -->
      <h2 class="px-4 py-2 mt-4 text-xl font-bold opacity-80">
        <a :href="`/articles/${item.slug}`">
          {{ item.title }}
        </a>
      </h2>
      <!-- meta -->
      <div class="meta flex flex-col pl-4 py-2 my-2 text-sm">
        <div class="flex flex-row items-center">
          <FontAwesomeIcon :icon="faCalendar" />
          <span class="mx-2"> {{ publishDate }} </span> |
          <span>工具</span>
        </div>
        <!-- <div>当你重装电脑的时候，这或许能让你最快进入状态</div> -->
      </div>
      <!-- desc -->
      <p class="px-4 py-2 text-base">
        {{ item.description || item.custom_description }}
      </p>
      <!-- read button -->
      <div class="pl-4 pb-4 mt-2 pt-2 text-sm">
        <a :href="`/articles/${item.slug}`">阅读全文»</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

export default {
  components: {
    FontAwesomeIcon,
  },
  props: ['item'],
  data() {
    return {
      faCalendar,
    };
  },
  methods: {
    readArticle() {
      console.log(this.item);
    },
  },
  computed: {
    publishDate(): string {
      const date = new Date(this.$props.item.published_at);
      return date.toLocaleString();
    },
  },
};
</script>

<style scoped>
.meta {
  color: #999;
  background-color: #dedfe1;
}
</style>
