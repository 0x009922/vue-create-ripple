<script lang="ts">
import { FunctionalComponent, h } from "vue";

interface FloatingCharsProps {
  word: string;
  delay: number | string;
  duration: number | string;
}

function computeAnimationDelay(index: number, count: number, delay: number): string {
  return `${-count * delay + index * delay}s`
}

const FloatingChars: FunctionalComponent<FloatingCharsProps> = (props) => {
  const chars = props.word.split('');
  const charsNodes = chars.map((ch, i) => (
    h('span', {
      class: 'floating-chars__item',
      style: {
        animationDelay: computeAnimationDelay(i, chars.length, +props.delay),
        animationDuration: `${props.duration}s`
      }
    }, ch)
  ))

  return h('div', {
    class: 'floating-chars'
  }, charsNodes)
}

FloatingChars.props = {
  word: {
    type: String,
    required: true
  },
  delay: {
    type: [Number, String],
    default: 0.25
  },
  duration: {
    type: [Number, String],
    default: 2.5
  }
}

export default FloatingChars;
</script>

<style lang="sass">
@use 'sass:math'

@keyframes FloatingCharAnimation
  @for $i from 1 through 100
    #{$i}%
      $x: $i / 100
      $y: 3 * math.sin($x * 2 * math.$pi)
      transform: translateY(#{$y}px)
  // 0%
  //   opacity: 0
  // 50%
  //   opacity: 1
  // 100%
  //   opacity: 0

.floating-chars
  display: inline-block

  &__item
    display: inline-block
    animation-name: FloatingCharAnimation
    animation-iteration-count: infinite
    animation-timing-function: linear
</style>
