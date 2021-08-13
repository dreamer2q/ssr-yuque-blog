
<template>
  <div class="flex flex-row">
    <Sidebar />
    <NotFound />
  </div>
</template>

<script lang="ts">
import NotFound from '@/components/base/404.vue';
import Sidebar from '@/components/sidebar/index.vue';
export default {
  components: {
    Sidebar,
    NotFound,
  },
};
</script>
