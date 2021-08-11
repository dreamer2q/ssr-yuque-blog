
<template>
  <div class="flex flex-row border-2">
    <Sidebar />
    <div class="w-4"></div>
    <div style="max-width: 700px" class="p-2">
      <div id="lake-view" v-html="body"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Sidebar from '@/components/sidebar/index.vue';
import posthtml from 'posthtml';

export default {
  components: {
    Sidebar,
  },
  props: ['fetchData'],
  setup(props) {
    console.log(Object.keys(props));
    const data = props.fetchData.data;

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
      body: result.html,
    };
  },
  created() {
    // console.log(this.$);
    // console.log(this.articles.length);
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
