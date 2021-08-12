<template>
  <div class="rounded-lg bg-white mb-2">
    <div class="flex flex-col">
      <!-- title -->
      <h2 class="pt-4 p-2 text-xl hover:underline">
        <a :href="`/articles/${item.slug}`">
          {{ item.title }}
        </a>
      </h2>
      <!-- meta -->
      <div class="meta"><span>日期</span> 2021-04-20</div>
      <!-- desc -->
      <p class="p-2 pt-1">
        {{ item.description || item.custom_description }}
      </p>
      <!-- read button -->
      <div class="pt-2">
        <button class="px-2 py-1 border-2" @click="readArticle()">
          阅读全文
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: ['item'],
  methods: {
    readArticle() {
      console.log(this.item);
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
