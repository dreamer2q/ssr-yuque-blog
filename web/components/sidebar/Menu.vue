<template>
  <ul class="py-3 bg-white rounded-b-lg">
    <li
      class="pl-5 py-1 menu"
      v-for="(menu, key) in menus"
      :key="key"
      :class="{ 'menu-active': isActive(key) }"
    >
      <a :href="key" class="">
        <FontAwesomeIcon style="max-width: 13px" :icon="menu.icon" />
        <span class="ml-2">
          {{ menu.title }}
        </span>
      </a>
    </li>
  </ul>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faArchive,
  faCat,
  faHome,
  faSearch,
  faTags,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

export default {
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      menus: {
        '/': {
          title: '首页',
          icon: faHome,
        },
        '/tags': {
          title: '标签',
          icon: faTags,
        },
        '/classes': {
          title: '分类',
          icon: faCat,
        },
        '/archives': {
          title: '归档',
          icon: faArchive,
        },
        '/about': {
          title: '关于',
          icon: faUser,
        },
        '/search': {
          title: '搜索',
          icon: faSearch,
        },
      },
    };
  },
  methods: {
    isActive(href: string) {
      return this.$route.path == href;
    },
  },
};
</script>

<style scoped>
.menu-active {
  background-color: #f9f9f9;
}
.menu {
  font-size: 14px;
}
.menu:hover {
  background-color: #f9f9f9;
}
/* .menu-active::after {
  display: block;
  box-sizing: border-box;
  content: ' ';
  position: absolute;
  top: 50%;
  right: 15px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #bbb;
} */
</style>