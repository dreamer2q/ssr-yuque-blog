
<template>
  <div style="width: 240px" class="flex-shrink-0 pr-2">
    <div class="flex flex-col rounded-lg overflow-hidden">
      <!-- logo -->
      <Logo />
      <!-- menu -->
      <Menu />
    </div>
    <!-- user -->
    <User class="sticky" />
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

<style>
.sticky {
  top: 12px;
  position: sticky;
}
</style>
