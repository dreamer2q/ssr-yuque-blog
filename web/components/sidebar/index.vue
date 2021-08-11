
<template>
  <!-- sidebar -->
  <div style="width: 240px" class="m-1">
    <div class="flex flex-col">
      <!-- logo -->
      <div
        class="h-32 flex flex-col justify-center bg-sidebar-color text-white"
      >
        <!-- blog name -->
        <div class="text-center space-y-2">
          <div class="text-lg">Dreamer2q Blog</div>
          <!-- slogan -->
          <div>见到，不如不见</div>
        </div>
      </div>
      <!-- menu -->
      <div>
        <ul class="mt-4">
          <li
            class="border py-2 px-4 hover:bg-gray-300"
            v-for="(menu, name) in menus"
            :key="name"
          >
            <a :href="menu" class="">
              {{ name }}
            </a>
          </li>
        </ul>
      </div>
      <!-- person-->
      <div></div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: ['active'],
  data() {
    return {
      menus: {
        首页: '/',
        关于: '/about',
      },
    };
  },
};
</script>

<style scoped>
</style>
