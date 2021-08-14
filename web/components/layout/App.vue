<template>
  <div class="flex flex-row justify-center">
    <div style="width: 1024px" class="flex flex-col">
      <Header />
      <div>
        <router-view
          :fetchData="fetchData"
          :ctx="ctx"
          :config="config"
          :asyncData="asyncData"
        />
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
  props: ['fetchData', 'ctx', 'config', 'asyncData'],
  components: {
    Header,
    Footer,
  },
  setup(props) {
    // console.log(props);
  },
};
</script>

<style>
svg[class*='fa'] {
  max-width: 16px;
  max-height: 16px;
  display: inline-block;
}

body {
  background-color: #eeeff0;
}

:root {
  --color: #59606a;
  --link-color: #252525;
  --link-color-hover: #7a8088;
  --bg-color: #eeeff0;
  --description-color: #999;
  --border-color: #eee;
  --selection-bg: #262a30;
  --selection-color: #fff;
}

pre,
code {
  --bg-color: #eee;
}

table {
  --row-odd-bg-color: #f9f9f9;
  --row-hover-bg-color: #f5f5f5;
}

.header-inner {
  --link-color: #555;
  --link-color-hover: #222;
}

.brand {
  --color: #fff;
  --bg-color: #48505b;
  --description-color: #ddd;
}

.menu {
  --bg-color-hover: #f9f9f9;
}

.sidebar-inner {
  --link-color: #666;
  --link-color-hover: #fc6423;
}

.site-author-name {
  --color: #222;
}

.social-links {
  --bg-color: #eee;
}

.card {
  --bg-color: #fff;
}

.post-menu {
  --link-color: #555;
  --link-color-hover: #fc6423;
}

.post-title {
  --color: #59606a;
}

.post-meta {
  --bg-color: #dedfe1;
  --color: #999;
}

.post-copyright {
  --border-color: #ff1700;
  --bg-color: #f9f9f9;
}

.pagination {
  --bg-color: #fff;
  --bg-color-active: #ccc;
  --color-active: #fff;
}

.post-collapse {
  --link-color: #666;
  --link-color-hover: #222;
}

.btn {
  --bg-color: #fff;
  --border-color: #59606a;
  --color-hover: #fff;
  --bg-color-hover: #222;
  --border-color-hover: #222;
}

.note {
  --border-color: #ccc;
}

img,
.comments-body {
  opacity: 1;
}
</style>
