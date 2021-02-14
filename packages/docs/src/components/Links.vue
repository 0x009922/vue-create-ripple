<template>
  <div class="grid gap-4 md:grid-cols-3">
    <card
      to="https://github.com/LiquidSolid/vue-create-ripple"
      class="flex items-center p-4 space-x-2"
    >
      <v-icon :path="mdiGithub" />
      <div class="text-lg">
        GitHub
      </div>
    </card>

    <card
      to="https://www.npmjs.com/package/vue-create-ripple"
      class="flex items-center p-4 space-x-2"
    >
      <v-icon
        :path="mdiNpm"
        class="text-red-600"
        fill="currentColor"
      />
      <div class="text-lg">
        NPM
      </div>
    </card>

    <card
      to="https://github.com/LiquidSolid/vue-create-ripple-docs"
      class="flex items-center p-4 space-x-2"
    >
      <v-icon
        :path="mdiPencil"
        class="text-blue-600"
        fill="currentColor"
      />
      <div class="text-lg">
        <i18n>
          <template #ru>
            Поправить доки
          </template>
          <template #en>
            Edit docs
          </template>
        </i18n>
      </div>
    </card>
  </div>
</template>

<script lang="ts">
import { mdiGithub, mdiNpm, mdiPencil } from '@mdi/js';
import { defineComponent } from 'vue';
import Card from './LinksCard.vue';

export default defineComponent({
  components: {
    Card
  },
  setup() {
    return {
      mdiGithub, 
      mdiNpm,
      mdiPencil
    }
  }
})
</script>