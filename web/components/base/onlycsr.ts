import { ref, onMounted, defineComponent } from 'vue';

export const OnlyCSR = defineComponent({
  setup(_, { slots }) {
    const show = ref(false);
    onMounted(() => {
      show.value = true;
    });
    return () => (show.value && slots.default ? slots.default() : null);
  },
});
