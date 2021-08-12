
<template>
  <div style="width: 240px" class="flex-shrink-0">
    <div class="flex flex-col">
      <!-- logo -->
      <Logo />
      <!-- menu -->
      <Menu />
      <!-- user -->
      <User />
    </div>
  </div>
</template>

<script lang="ts">
import Menu from './Menu.vue';
import Logo from './Logo.vue';
import User from './User.vue';
export default {
  components: {
    Menu,
    Logo,
    User,
  },
};
</script>

<style scoped>
</style>
