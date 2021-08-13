<template>
  <div class="flex flex-row">
    <Sidebar />
    <Container>
      <div class="flex flex-col">
        <div class="flex flex-row justify-center p-2 py-4 m-2 w-full">
          <div class="px-4 space-x-2 rounded-xl ring-1">
            <span>搜索</span>
            <input
              type="text"
              class="w-64 border p-2 focus:outline-none"
              placeholder="全文搜索"
              v-model="query"
            />
            <button @click="search">搜索</button>
          </div>
        </div>
        <div v-if="hasResult" class="flex flex-col">
          <div>搜索结果：共 {{ results.length }} 条</div>
          <div>
            <li v-for="result in results" :key="result.id">
              {{ result.abstract }}
            </li>
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

export default {
  props: ['fetchData'],
  components: {
    Sidebar,
    NotFound,
    Container,
  },
  setup(props) {
    // console.log(props.test.test);
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
      // return this.query != '' && this.results.length > 0;
      return false;
    },
  },
};
</script>
