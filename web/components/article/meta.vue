
<template>
  <div class="meta flex flex-col px-4 py-2 my-2 text-sm space-y-1">
    <!-- first line -->
    <div class="flex flex-row flex-wrap items-center space-x-2">
      <FontAwesomeIcon :icon="faCalendar" />
      <span>创建于 {{ createDate }}</span>
      <FontAwesomeIcon :icon="faInfoCircle" />
      <span> 共 {{ item.word_count }} 字，阅读约 {{ readTime }} 分钟 </span>
      <span class="space-x-2" v-if="hasUpdate">
        <FontAwesomeIcon :icon="faClock" />
        <span>更新于 {{ publishDate }} </span>
      </span>
    </div>
    <!-- second line -->
    <div class="flex flex-row flex-wrap items-center space-x-2">
      <span class="space-x-2" v-if="item.hits && show('hits')">
        <FontAwesomeIcon :icon="faEye" />
        <span>浏览 {{ item.hits }}</span>
      </span>
      <span class="space-x-2" v-if="show('comments')">
        <FontAwesomeIcon :icon="faComments" />
        <span>评论 {{ item.comments_count }}</span>
      </span>
      <!-- hide likes count -->
      <!-- <FontAwesomeIcon :icon="faThumbsUp" /> -->
      <!-- <span>点赞 {{ item.likes_count }}</span> -->
    </div>
  </div>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faCalendar,
  faInfoCircle,
  faClock,
  faEye,
  faComments,
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';
import { format } from 'date-fns-tz';
import { getUnixTime } from 'date-fns';

export default {
  components: {
    FontAwesomeIcon,
    faInfoCircle,
  },
  props: ['item', 'hide'],
  data() {
    return {
      hidden: this.hide || [],
      faCalendar,
      faInfoCircle,
      faClock,
      faEye,
      faComments,
      faThumbsUp,
    };
  },
  methods: {
    show(key: string) {
      return (this.hidden as string[]).indexOf(key) == -1;
    },
  },
  computed: {
    url(): string {
      return `/articles/${this.item.slug}`;
    },
    createDate(): string {
      const date = new Date(this.item.created_at);
      return format(date, 'yyyy-MM-dd');
    },
    hasUpdate(): boolean {
      const publish = new Date(this.item.published_at);
      const create = new Date(this.item.created_at);
      return publish.getTime() != create.getTime();
    },
    publishDate(): string {
      const now = Date.now();
      const date = new Date(this.item.published_at);
      let internal = getUnixTime(now) - getUnixTime(date);
      if (internal < 60) {
        return `刚刚`;
      }
      internal /= 60;
      if (internal < 60) {
        return `${internal.toFixed(0)} 分钟前`;
      }
      internal /= 60;
      if (internal < 24) {
        return `${internal.toFixed(0)} 小时前`;
      }
      internal /= 24;
      if (internal < 90) {
        return `${internal.toFixed(0)} 天前`;
      }
      return format(date, 'yy-MM-dd HH:mm', { timeZone: 'Asia/Beijing' });
    },
    readTime(): string {
      const count = this.item.word_count;
      return (count / 250).toFixed(0);
    },
  },
};
</script>

<style scoped>
.meta {
  color: #999;
  background-color: #dedfe1;
}
</style>
