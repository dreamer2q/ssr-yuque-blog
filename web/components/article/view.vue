<template>
  <div class="flex flex-col flex-1 w-0 rounded-lg bg-white">
    <!-- title -->
    <h2 class="px-4 py-2 mt-4 text-xl font-bold opacity-80">
      {{ item.title }}
    </h2>
    <!-- meta -->
    <ArticleMeta :item="item" />
    <!-- content -->
    <div id="lake-view" class="px-4 py-8" v-html="body"></div>
    <ArticlePager v-if="item.pager" :pager="item.pager" />
  </div>
</template>

<script lang="ts">
import ArticleMeta from './meta.vue';
import posthtml from 'posthtml';
import ArticlePager from './pager.vue';

export default {
  props: ['item'],
  components: {
    ArticleMeta,
    ArticlePager,
  },
  setup(props) {
    const data = props.item;
    const result: any = posthtml()
      .use(tree => {
        tree.match({ tag: 'img' }, node => {
          node.attrs = Object.assign(node.attrs || {}, {
            referrerPolicy: 'no-referrer',
          });
          return node;
        });
        return tree;
      })
      .process(data.body_html, { sync: true });
    return {
      item: data,
      body: result.html,
    };
  },
};
</script>

<style>
#lake-view ul.ne-ul:not([ne-level]) {
  list-style-type: disc;
}

#lake-view pre {
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
}

@import 'https://editor.yuque.com/ne-editor/lake-content-v1.css';
</style>
