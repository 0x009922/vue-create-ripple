<script lang="ts">
import { defineComponent, ref, onBeforeUnmount } from "vue";

export default defineComponent({
  setup() {
    const show = ref(true);
    const interval = setInterval(() => {
      show.value = !show.value
    }, 500);

    onBeforeUnmount(() => {
      clearInterval(interval);
    })

    return () => show.value ? '_' : '';
  }
})
</script>