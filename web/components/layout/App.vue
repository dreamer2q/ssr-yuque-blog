<template>
  <div class="flex flex-row justify-center bg-gray-300">
    <div style="width: 1024px" class="flex flex-col content-center">
      <Header />
      <div class="bg-white">
        <router-view :fetchData="fetchData" />
      </div>
      <Footer />
    </div>
  </div>
</template>

<script lang="ts">
// 在这里可以进行一些全局组件的注册逻辑
import './index.css';
import 'tailwindcss/tailwind.css';

import Header from './Header.vue';
import Footer from './Footer.vue';

export default {
  props: ['fetchData'],
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
/* @import './index.css'; */
</style>
