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
        ru: 'Здесь проблем с вложенностью нет',
        en: 'There are no problems with nesting here'
      }).value
    })
  }
})
</script>
