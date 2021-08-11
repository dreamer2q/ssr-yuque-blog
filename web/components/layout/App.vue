<template>
  <div class="flex flex-col bg-gray-50">
    <Header />
    <div class="flex-grow self-center max-w-screen-lg bg-white">
      <router-view :fetchData="fetchData" />
    </div>
    <Footer />
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
