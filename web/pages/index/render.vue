
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
import ArticleItem from '@/components/article/item.vue';
import Sidebar from '@/components/sidebar/index.vue';
import { DocSeri } from '@/interface';

export default {
  components: {
    ArticleItem,
    Sidebar,
  },
  props: ['fetchData'],
  setup(props) {
    console.log(Object.keys(props));
    const articles: DocSeri[] = props.fetchData.data || [];
    return {
      articles, //articles.filter(v => v.status === 1),
    };
  },
  created() {
    // console.log(this.$);
    console.log(this.articles.length);
  },
};
</script>


<style lang="stylus" scoped></style>