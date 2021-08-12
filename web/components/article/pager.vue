<template>
  <div class="w-full flex flex-row justify-between py-1 px-2 text-sm border-t">
    <div>
      <a v-if="prev" :href="prevUrl">
        <FontAwesomeIcon :icon="faChevronLeft" /> {{ prev.title }}
      </a>
    </div>
    <div>
      <a v-if="next" :href="nextUrl">
        {{ next.title }} <FontAwesomeIcon :icon="faChevronRight" />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

export default {
  props: ['pager'],
  components: {
    FontAwesomeIcon,
  },
  setup(props) {
    const pager = props.pager;
    return {
      prev: pager.prev,
      next: pager.next,
    };
  },
  data() {
    return {
      faChevronLeft,
      faChevronRight,
    };
  },
  computed: {
    prevUrl(): string {
      return `/articles/${this.prev.slug}`;
    },
    nextUrl(): string {
      return `/articles/${this.next.slug}`;
    },
  },
};
</script>
