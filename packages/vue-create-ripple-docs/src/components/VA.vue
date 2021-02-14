<script lang="ts">
import { FunctionalComponent, h, mergeProps } from "vue";

const VA: FunctionalComponent = (props, { slots, attrs }) => (
  h('a', mergeProps(attrs, {
    class: 'text-blue-600 visited:text-purple-600'
  }), slots)
);

export default VA;
</script>