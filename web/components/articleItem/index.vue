<template>
  <div class="container p-2">
    <!-- title -->
    <h2 class="text-xl hover:underline">
      <a :href="`/articles/${item.slug}`">
        {{ item.title }}
      </a>
    </h2>
    <!-- desc -->
    <p class="pt-1">
      {{ item.description || item.custom_description }}
    </p>
    <!-- read button -->
    <div class="pt-2">
      <button class="px-2 py-1 border-2" @click="readArticle()">
        阅读全文
      </button>
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
