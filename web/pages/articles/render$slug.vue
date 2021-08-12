
<template>
  <div style="max-width: 1024px" class="flex flex-row">
    <Sidebar />
    <ArticleView :item="item" />
  </div>
</template>

<script lang="ts">
import Sidebar from '@/components/sidebar/index.vue';
import ArticleView from '@/components/article/view.vue';

export default {
  components: {
    Sidebar,
    ArticleView,
  },
  props: ['fetchData'],
  setup(props) {
    console.log(Object.keys(props));
    const data = props.fetchData.data;
    return {
      item: data,
    };
  },
  created() {
    // console.log(this.$);
    // console.log(this.articles.length);
  },
};
</script>

<style>
</style>
