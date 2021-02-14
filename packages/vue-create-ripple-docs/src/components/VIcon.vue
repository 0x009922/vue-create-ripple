<script lang="ts">
import { FunctionalComponent, mergeProps, h } from "vue";

export interface VIconProps {
  path: string;
  size: number | string;
}

const VIcon: FunctionalComponent<VIconProps> = (props, { attrs }) => {
  return h(
    'svg',
    mergeProps(attrs, {
      viewBox: '0 0 24 24',
      class: 'inline-block',
      width: props.size,
      height: props.size,
    }),
    [
      h(
        'path',
        {
          d: props.path
        }
      )
    ]
  )
}

VIcon.props = {
  path: {
    type: String,
    required: true
  },
  size: {
    type: [Number, String],
    default: 24,
  }
}

export default VIcon
</script>