<template>
  <footer class="flex flex-row py-4 mt-4">
    <div style="width: 240px" class="flex-shrink-0 pr-2"></div>
    <div
      class="flex flex-col flex-1 items-stretch text-sm text-gray-500 space-y-2"
    >
      <div class="flex flex-row justify-center items-center space-x-2">
        <span> © 2021 </span>
        <FontAwesomeIcon :icon="faHeart" />
        <span> <a href="/">Dreamer2q</a> </span>
      </div>
      <div class="self-center">
        <div>
          <a href="http://doc.ssr-fc.com"> SSR </a> 强力驱动 |
          <a href="https://www.aliyun.com/">阿里云</a> 托管 |
          <a href="https://www.yuque.com/">语雀</a> 数据支持
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
// TODO 添加 渲染时间 统计
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
export default {
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      faHeart,
    };
  },
};
</script>
