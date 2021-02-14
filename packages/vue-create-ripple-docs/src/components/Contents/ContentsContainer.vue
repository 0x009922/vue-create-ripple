<script lang="ts">
import { defineComponent, provide } from "vue";
import { ProvideSymbol } from './shared';
import useContents from "./use-contents";

export default defineComponent({
  setup(props, { slots }) {
    const contents = useContents();
    provide(ProvideSymbol, contents);

    return () => slots.default && slots.default();
  }
})
</script>