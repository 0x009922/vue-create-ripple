<script lang="ts">
import Card from './ExampleNestedOnOffCard.vue';
import { defineComponent, h } from 'vue';
import { useI18n } from './I18n';

export default defineComponent({
  setup() {
    const { t } = useI18n({});

    return () => h(Card, {
      noNested: true
    }, {
      default: () => t({
        ru: 'Попробуйте кликнуть на кнопки ниже и на саму карточку',
        en: 'Try clicking on the buttons below and on the card itself'
      }).value
    })
  }
})
</script>
