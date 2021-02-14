<template>
  <div class="space-y-4">
    <div class="grid gap-4 sm:grid-cols-5">
      <template v-for="color in colors">
        <div
          v-ripple="{ class: `bg-${color}-500 opacity-50` }"
          :class="`bg-${color}-200 text-${color}-600 text-center p-3 cursor-pointer select-none rounded`"
        >
          {{ color }}
        </div>
      </template>
    </div>

    <v-code lang="html">
      {{ codeHTML }}
    </v-code>

    <v-code lang="css">
      {{ codeCSS }}
    </v-code>
  </div>
</template>

<script lang="ts">

const colors = ['red', 'orange', 'green', 'blue', 'purple'];

const codeHTML = `
<div
  v-ripple="{ class: 'red--ripple' }"
  class="red"
>
  red
</div>
`

const codeCSS = `
.red {
  background: rgba(255, 0, 0, 40);
  color: red;
}

.red--ripple {
  background: red;
  opacity: 0.25;
}
`

export default {
  setup() {
    return {
      colors,
      codeHTML,
      codeCSS
    }
  }
}
</script>
