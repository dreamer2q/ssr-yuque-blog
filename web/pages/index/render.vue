
<template>
  <div class="flex flex-row">
    <Sidebar />
    <!-- article list -->
    <div>
      <ArticleItem
        v-for="article in articles"
        :key="article.id"
        :item="article"
      />
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


<style lang="stylus" scoped></style>