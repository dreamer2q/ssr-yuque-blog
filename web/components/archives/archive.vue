
<template>
  <ul>
    <li class="relative archive-year">
      <div class="pl-4 py-4 text-xl">
        {{ year }}
      </div>
    </li>
    <li
      class="relative archive-article"
      v-for="(article, key) in items"
      :key="key"
    >
      <div class="py-3">
        <span class="px-1 text-sm">{{ createTime(article) }}</span>
        <a class="px-1" :href="targetLink(article)">
          {{ article.title }}
        </a>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import { format } from 'date-fns';
import { DocSeri } from '@/interface';

export default {
  props: ['year', 'items'],
  setup(props) {
    // console.log(props);
  },
  methods: {
    createTime(item: DocSeri) {
      // console.log(item);
      return format(new Date(item.created_at), 'MM-dd');
    },
    targetLink(item: DocSeri) {
      return `/articles/${item.slug}`;
    },
  },
};
</script>

<style scoped>
.archive::after {
  content: ' ';
  position: absolute;
  top: 20px;
  left: 0;
  margin-left: -2px;
  width: 4px;
  height: 100%;
  background-color: rgb(238, 238, 238);
}

.archive-year {
  font-size: 18px;
}

.archive-year::before {
  content: ' ';
  position: absolute;
  left: 0;
  top: 50%;
  margin-left: -4px;
  margin-top: -4px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: brown;
  z-index: 1;
}

.archive-article {
  padding-left: 12px;
}

.archive-article::before {
  content: ' ';
  position: absolute;
  left: 0;
  top: 50%;
  margin-left: -3px;
  margin-top: -3px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: green;
  z-index: 1;
}
</style>
