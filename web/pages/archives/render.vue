
<template>
  <div class="flex flex-row">
    <Sidebar />
    <!-- article list -->
    <div class="p-2 rounded-lg bg-white flex flex-col flex-1">
      <div class="p-2 px-8 py-8">
        <div class="relative archive">
          <div>
            <p>
              太棒了！目前共计
              <span> {{ totalCount }} </span>
              篇文章。继续努力。
            </p>
          </div>
          <ul v-for="year in years" :key="year">
            <Archive :year="year" :items="archives[year]" />
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Sidebar from '@/components/sidebar/index.vue';
import { DocSeri } from '@/interface';
import { format } from 'date-fns';
import Archive from '@/components/archives/archive.vue';

export default {
  components: {
    Sidebar,
    Archive,
  },
  props: ['fetchData'],
  setup(props) {
    let articles: DocSeri[] = props.fetchData.data || [];
    const archives: Record<string, Array<DocSeri>> = {};

    articles.forEach(article => {
      const createDate = new Date(article.created_at);
      const year = createDate.getFullYear().toString();
      if (!archives[year]) {
        archives[year] = [];
      }
      (article as any).createTime = format(createDate, 'MM-dd');
      archives[year].push(article);
    });

    const years = Object.keys(archives).sort((a, b) => Number(b) - Number(a));

    return {
      years,
      archives,
      articles,
    };
  },
  created() {},
  computed: {
    totalCount(): number {
      return this.articles.length;
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
