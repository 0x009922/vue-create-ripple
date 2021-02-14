<template>
  <i18n-container :lang="lang">
    <contents-container>
      <main class="max-w-screen-md overflow-hidden mx-auto p-4 pb-24">
        <language-picker
          v-model:value="lang"
          :options="languages"
        />

        <article class="space-y-6">
          <h1 class="text-2xl md:text-5xl font-mono">
            vue-create-ripple
          </h1>

          <div
            class="text-gray-700"
          >
            <i18n>
              <template #ru>
                Гибкий инструментарий для создания
                <floating-chars
                  delay="0.12"
                  word="Ripple-эффекта"
                /> во Vue 3.
              </template>
              <template #en>
                Flexible toolkit for creating
                <floating-chars
                  delay="0.12"
                  word="Ripple"
                /> effect in Vue 3.
              </template>
            </i18n>
          </div>

          <hr>

          <v-section>
            <contents-header ignore>
              <i18n>
                <template #ru>
                  Содержание
                </template>
                <template #en>
                  Contents
                </template>
              </i18n>
            </contents-header>

            <contents-renderer />
          </v-section>

          <hr>

          <v-section>
            <contents-header id="install">
              <i18n>
                <template #ru>
                  Установка
                </template>
                <template #en>
                  Installation
                </template>
              </i18n>
            </contents-header>

            <installation />
          </v-section>

          <hr>

          <v-section>
            <contents-header id="examples">
              <i18n>
                <template #ru>
                  Примеры
                </template>
                <template #en>
                  Examples
                </template>
              </i18n>
            </contents-header>

            <v-section>
              <contents-header
                id="basic"
                level2
              >
                <i18n>
                  <template #ru>
                    Базовое применение
                  </template>
                  <template #en>
                    Basic usage
                  </template>
                </i18n>
              </contents-header>

              <p>
                <i18n>
                  <template #ru>
                    Можно задать стиль через классы:
                  </template>
                  <template #en>
                    You can set the style through classes:
                  </template>
                </i18n>
              </p>

              <example-via-classes />

              <p>
                <i18n>
                  <template #ru>
                    А можно прямо указывать стиль, к тому же уменьшив максимальный радиус:
                  </template>
                  <template #en>
                    Or you can directly specify the style, besides reducing the maximum radius:
                  </template>
                </i18n>
              </p>

              <example-via-inline-style />
            </v-section>
            <v-section>
              <contents-header
                id="easings-durations"
                level2
              >
                <i18n>
                  <template #ru>
                    Изменение длительности и функции плавности
                  </template>
                  <template #en>
                    Changing the duration and timing function
                  </template>
                </i18n>
              </contents-header>


              <p>
                <i18n>
                  <template #ru>
                    Иногда хочется помедленнее... иногда побыстрее, а иногда
                    <floating-chars
                      word="странно"
                      duration="1.5"
                      delay="0.15"
                    />.
                  </template>
                  <template #en>
                    Sometimes you want to slow down... sometimes faster, and sometimes
                    <floating-chars
                      word="weird"
                      duration="1.5"
                      delay="0.15"
                    />.
                  </template>
                </i18n>
              </p>

              <example-easings-durations />
            </v-section>
            <v-section>
              <contents-header
                id="center"
                level2
              >
                <i18n>
                  <template #ru>
                    Центрирование
                  </template>
                  <template #en>
                    Centering
                  </template>
                </i18n>
              </contents-header>

              <p>
                <i18n>
                  <template #ru>
                    Если нужно, чтобы круг всегда исходил из центра элемента, вне зависимости от
                    место нажатия, нужно указать флаг
                    <code>center</code>:
                  </template>
                  <template #en>
                    If you want the circle to always originate from the center of the element,
                    regardless of where you clicked, you need to specify the
                    <code>center</code> flag:
                  </template>
                </i18n>
              </p>

              <example-center />
            </v-section>
            <v-section>
              <contents-header
                id="mouseenter-mouseleave"
                level2
              >
                <i18n>
                  <template #ru>
                    События <code>mouseenter</code> и <code>mouseleave</code>
                  </template>
                  <template #en>
                    <code>mouseenter</code> & <code>mouseleave</code> events
                  </template>
                </i18n>
              </contents-header>

              <p>
                <i18n>
                  <template #ru>
                    Эффект будет возникать вновь, если пользователь
                    уведёт и наведёт мышь обратно, не отпуская при этом кнопку.
                    Это говорит пользователю о том, что кнопка по-прежнему активна и
                    клик произойдёт, если он отпустит кнопку на элементе:
                  </template>
                  <template #en>
                    The effect will occur again if the user moves away and hovers the mouse back without releasing the button.
                    This tells the user that the button is still active and
                    the click will happen if he releases the button on the element:
                  </template>
                </i18n>
              </p>

              <example-mouse-reenter />
            </v-section>
            <v-section>
              <contents-header
                id="nested-ripples"
                level2
              >
                <i18n>
                  <template #ru>
                    Вложенные рипплы
                  </template>
                  <template #en>
                    Nested ripples
                  </template>
                </i18n>
              </contents-header>

              <p>
                <i18n>
                  <template #ru>
                    Иногда возникает ситуация, что внутри элемента, к которому привязана ripple-директива,
                    находятся другие элементы, к которым также привязана директива. Происходит так, что при
                    нажатии на вложенном, эффект срабатывает и на его родителе, что может дезориентировать:
                  </template>
                  <template #en>
                    Sometimes a situation arises that inside the element to which the ripple directive is attached,
                    there are other elements to which the directive is also attached. What happens is that when
                    you click on a nested one, the effect is triggered on its parent, which can be disorienting:
                  </template>
                </i18n>
              </p>

              <example-nested-off />

              <p>
                <i18n>
                  <template #ru>
                    Для того, чтобы так не происходило, в опциях доступен флаг
                    <code>noNested</code>
                    (по умолчанию
                    <code>true</code>), который предотвращает срабатывание эффекта на родительских
                    элементах:
                  </template>
                  <template #en>
                    To prevent this from happening, the <code>noNested</code> flag (by default <code>true</code>)
                    is available in the options, which prevents the effect from triggering on parent elements:
                  </template>
                </i18n>
              </p>

              <example-nested-on />

              <p>
                <i18n>
                  <template #ru>
                    Также доступен флаг
                    <code>self</code>, который говорит директиве срабатывать только при
                    клике точно на тот элемент, к которому она привязана:
                  </template>
                  <template #en>
                    The <code>self</code> flag is also available, which tells the directive
                    to fire only when you click on the exact element to which it is attached:
                  </template>
                </i18n>
              </p>

              <example-nested-self />

              <p>
                <i18n>
                  <template #ru>
                    Стоит также упомянуть о небольшом лайфхаке, с которым не нужно использовать ни
                    <code>noNested</code>, ни
                    <code>self</code> &mdash; это остановка всплытия события
                    <code>mousedown</code> на дочерних элементах изящными средствами Vue:
                  </template>
                  <template #en>
                    It is also worth mentioning a small life hack with which you do not need to use either
                    <code>noNested</code> or <code>self</code> &mdash; this is to stop the
                    <code>mousedown</code> event from bubbling up on child elements by graceful Vue means:
                  </template>
                </i18n>
              </p>

              <example-nested-mousedown />
            </v-section>
            <v-section>
              <contents-header
                id="multi-ripples"
                level2
              >
                <i18n>
                  <template #ru>
                    Двойные, тройные, etc рипплы
                  </template>
                  <template #en>
                    Double-ripple, tripple, quadripple, etc
                  </template>
                </i18n>
              </contents-header>

              <p>
                <i18n>
                  <template #ru>
                    К одному элементу можно привязать одновременно несколько директив с разными параметрами:
                  </template>
                  <template #en>
                    Several directives with different parameters can be attached to one element simultaneously:
                  </template>
                </i18n>
              </p>

              <example-rainbow-ripple />
            </v-section>
          </v-section>

          <hr>

          <v-section>
            <contents-header id="api">
              API
            </contents-header>

            <v-section>
              <contents-header
                id="create-directive"
                level2
              >
                <code>createRippleDirective</code>
              </contents-header>

              <api-create-directive />
            </v-section>

            <v-section>
              <contents-header
                id="default-ripple"
                level2
              >
                <code>Ripple</code>
              </contents-header>

              <api-ripple />
            </v-section>

            <v-section>
              <contents-header
                id="options"
                level2
              >
                <i18n>
                  <template #ru>
                    Объект параметров, значения по умолчанию
                  </template>
                  <template #en>
                    Options object, default values
                  </template>
                </i18n>
              </contents-header>

              <api-opts />
            </v-section>

            <v-section>
              <contents-header
                id="modifiers"
                level2
              >
                <i18n>
                  <template #ru>
                    Модификаторы
                  </template>
                  <template #en>
                    Modifiers
                  </template>
                </i18n>
              </contents-header>

              <api-modifiers />
            </v-section>
          </v-section>

          <hr>

          <v-section>
            <contents-header id="playground">
              <i18n>
                <template #ru>
                  Поиграться
                </template>
                <template #en>
                  Playground
                </template>
              </i18n>
            </contents-header>

            <p class="text-gray-600">
              WIP
            </p>
          </v-section>

          <hr>

          <v-section>
            <contents-header id="links">
              <i18n>
                <template #ru>
                  Ссылки
                </template>
                <template #en>
                  Links
                </template>
              </i18n>
            </contents-header>

            <links />
          </v-section>
        </article>
      </main>
    </contents-container>
  </i18n-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VSection from "./components/VSection.vue";
import ExampleViaClasses from "./components/ExampleViaClasses.vue";
import ExampleViaInlineStyle from "./components/ExampleViaInlineStyle.vue";
import ExampleEasingsDurations from "./components/ExampleEasingsDurations.vue";
import ExampleCenter from "./components/ExampleCenter.vue";
import ExampleMouseReenter from "./components/ExampleMouseReenter.vue";
import ExampleRainbowRipple from "./components/ExampleRainbowRipple.vue";
import ExampleNestedOff from './components/ExampleNestedOff.vue';
import ExampleNestedOn from './components/ExampleNestedOn.vue';
import ExampleNestedSelf from './components/ExampleNestedSelf.vue';
import ExampleNestedMousedown from './components/ExampleNestedMousedown.vue';
import { ContentsContainer, ContentsRenderer, ContentsHeader } from './components/Contents';
import { I18n, I18nContainer } from './components/I18n';
import LanguagePicker from './components/TheLanguagePicker.vue';
import Installation from './components/Installation.vue';
import FloatingChars from './components/FloatingChars.vue';
import ApiCreateDirective from './components/ApiCreateDirective.vue';
import ApiRipple from './components/ApiRipple.vue';
import ApiOpts from './components/ApiOpts.vue';
import ApiModifiers from './components/ApiModifiers.vue';
import Links from './components/Links.vue';
import useLocale from './tools/use-locale';

export default defineComponent({
  components: {
    ExampleViaClasses,
    ExampleViaInlineStyle,
    ExampleEasingsDurations,
    ExampleCenter,
    ExampleMouseReenter,
    ExampleRainbowRipple,
    VSection,
    ExampleNestedOff,
    ExampleNestedOn,
    ExampleNestedSelf,
    ExampleNestedMousedown,
    ContentsContainer,
    ContentsRenderer,
    ContentsHeader,
    I18n,
    I18nContainer,
    LanguagePicker,
    Installation,
    FloatingChars,
    ApiCreateDirective,
    ApiRipple,
    ApiOpts,
    ApiModifiers,
    Links
  },
  setup() {
    const languages = ['ru', 'en'];
    const { lang } = useLocale({
      available: languages,
      default: 'ru'
    });

    return { languages, lang }
  }
});
</script>
