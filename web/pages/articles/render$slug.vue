
<template>
  <div class="flex flex-row border-2">
    <Sidebar />
    <div class="w-4"></div>
    <div class="p-2">
      <div v-html=""></div>
    </div>
  </div>
</template>

<script lang="ts">
import Sidebar from '@/components/sidebar/index.vue';

export default {
  components: {
    Sidebar,
  },
  props: ['fetchData'],
  setup(props) {
    console.log(Object.keys(props));
    // const data =  fetchData.data
    return {
      // content: data.
    };
  },
  created() {
    // console.log(this.$);
    // console.log(this.articles.length);
  },
};
</script>

<style lang="less" scope>
</style>