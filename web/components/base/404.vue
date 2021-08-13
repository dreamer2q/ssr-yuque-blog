
<template>
  <div
    class="flex flex-col flex-1 w-0 p-2 border items-center rounded-lg bg-white"
  >
    <div class="my-32">
      <h2 class="text-3xl">Oops, Page not found</h2>
      <p class="p-2 my-2 text-sm">
        <FontAwesomeIcon :icon="faGlobeAsia" />
        Page link may have expired or been deleted
      </p>
    </div>
    <OnlyCSR>
      <div class="flex flex-col space-y-2">
        <button v-if="hasPrev()" @click="goback">返回上一级</button>
        <button @click="gohome">回到首页</button>
      </div>
    </OnlyCSR>
  </div>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faGlobeAsia } from '@fortawesome/free-solid-svg-icons';
import { OnlyCSR } from './onlycsr';
export default {
  components: {
    FontAwesomeIcon,
    OnlyCSR,
  },
  setup() {},
  data() {
    return {
      faGlobeAsia,
    };
  },
  methods: {
    hasPrev() {
      return window.history.length > 1;
    },
    goback() {
      return window.history.go(-1);
    },
    gohome() {
      return window.location.assign('/');
    },
  },
};
</script>
