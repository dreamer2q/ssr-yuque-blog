
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
    // 1. 不小心让 render 出错
    // 2. 注释下面代码，解决错误
    // 3. 重新请求，render 无法恢复正常
    // console.log(props.test.throw);

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


<style scoped></style>