<template>
  <div class="flex flex-row">
    <Sidebar />
    <Container>
      <div class="flex flex-col">
        <div class="flex flex-row justify-center p-2 py-4 m-2 w-full">
          <div class="px-4 space-x-2 rounded-xl ring-1">
            <span>搜索</span>
            <input
              @keydown.enter="search"
              type="text"
              class="w-64 border p-2 focus:outline-none"
              placeholder="全文搜索"
              v-model="query"
            />
            <button @click="search">搜索</button>
          </div>
        </div>
        <div v-if="hasResult" class="flex flex-col">
          <div class="py-2 px-4 text-sm bg-gray-300">
            搜索结果：共 {{ results.length }} 条
          </div>
          <div class="py-2">
            <div v-for="result in results" :key="result.id">
              <div class="px-4 pt-4 text-lg">
                <a :href="`/articles/${result.slug}`"> {{ result.title }} </a>
              </div>
              <ArticleMeta
                :item="result._record"
                :hide="['comments', 'hits']"
              />
              <div
                class="px-4 pb-4 text-sm result"
                v-html="result.abstract"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>

<script lang="ts">
import NotFound from '@/components/base/404.vue';
import Sidebar from '@/components/sidebar/index.vue';
import Container from '@/components/base/Container.vue';
import ArticleMeta from '@/components/article/meta.vue';

export default {
  props: ['fetchData'],
  components: {
    Sidebar,
    NotFound,
    Container,
    ArticleMeta,
  },
  setup(props) {
    // console.log(props.test.test);
    const data = props.fetchData.data ?? {};
    return {
      results: data.hits || [],
    };
  },
  data() {
    return {
      // results: this.fetchData.hits || [],
      query: this.$route.query['q'] || '',
    };
  },
  methods: {
    search() {
      console.log(this.query);
      window.location.search = `?q=${this.query}`;
    },
  },
  computed: {
    hasResult(): boolean {
      return this.results.length > 0;
    },
  },
};
</script>

<style>
.result em {
  color: red;
  padding: 2px 4px;
}
</style>
