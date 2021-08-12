
<template>
  <div class="flex flex-row border-2">
    <Sidebar />
    <!-- <div class="w-4"></div> -->
    <div class="p-2">
      <div v-for="article in articles" :key="article.id">
        <!-- {{ article.title }} -->
        <article-item :item="article" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import ArticleItem from '@/components/articleItem/index.vue';
import Sidebar from '@/components/sidebar/index.vue';

export default {
  components: {
    ArticleItem,
    Sidebar,
  },
  props: ['fetchData'],
  setup(props) {
    console.log(Object.keys(props));

    return {
      articles: props.fetchData.data || [],
    };
  },
  created() {
    // console.log(this.$);
    console.log(this.articles.length);
  },
};
</script>
