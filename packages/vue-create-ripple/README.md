# vue-create-ripple

[![npm](https://img.shields.io/npm/v/vue-create-ripple)](https://www.npmjs.com/package/vue-create-ripple)

Flexible Ripple Directive for Vue 3.

Contains TypeScript declarations. [Documentation & demo.](https://0x009922.github.io/vue-create-ripple/)

### Install

```
npm install vue-create-ripple
```

### Use

Install directive globally in app:

```js
import { createApp } from 'vue';
import { createRippleDirective } from 'vue-create-ripple';
import App from './App.vue';

createApp(App)
    .directive('Ripple', createRippleDirective({
        class: 'bg-black opacity-30'
        // Set other defaults
    }))
    .mount('#app');
```

Or locally in component:

```vue
<script>
import { createRippleDirective } from 'vue-create-ripple';

export default {
    directives: {
        Ripple: createRippleDirective({ /* settings */ })
    }
}
</script>
```

To then use it like so:

```vue
<template>
    <div v-ripple>
        Ripple effect with default options
    </div>

    <div v-ripple.center="{ class: 'bg-red' }">
        Ripple with options that override defaults
    </div>
</template>
```

In addition, you can import the created `Ripple` directive with all the default parameters, but then **you have to always specify the class, otherwise you will not see any effect!**

```js
import { createApp } from 'vue';
import { Ripple } from 'vue-create-ripple';
import App from './App.vue';

createApp(App)
    .directive('Ripple', Ripple)
    .mount('#app');
```

### Options & defaults

```ts
export interface RippleOptions {
    /**
     * The class to be assigned to the circle. Can be used
     * for quick and easy styling.
     *
     * ! If not specified, then nothing will be visible
     */
    class?: string | null;

    /**
     * Effect disappearence timing function
     *
     * @default 'cubic-bezier(0.4, 0, 0.2, 1)'
     */
    disappearEasing?: string;

    /**
     * Effect disappearence duration
     *
     * @default '.7s'
     */
    disappearDuration?: string;

    /**
     * Effect appearence timing function
     *
     * @default 'cubic-bezier(0.16, 1, 0.3, 1)'
     */
    appearEasing?: string;

    /**
     * Effect appearence duration
     *
     * @default '.8s'
     */
    appearDuration?: string;

    /**
     * Flag to disable effect triggering
     */
    disabled?: boolean;

    /**
     * If `true`, the effect will always come from the center of the element.
     *
     * @default false
     */
    center?: boolean;

    /**
     * If `true`, then the effect will work only on event
     * `mousedown` on the element itself, not its descendants
     *
     * @default false
     */
    self?: boolean;

    /**
     * If `true`, then the effect when clicking on the child element will not work,
     * if in the tree of its parents there is an element bound to it
     * directive and this element is a child of the current one. Default
     * `true`, so you need to explicitly specify `false` to disable this option
     *
     * @default true
     */
    noNested?: boolean;

    /**
     * Additional css styles for the container
     */
    containerStyle?: Partial<CSSStyleDeclaration>;

    /**
     * Additional css styles for the ripple
     */
    circleStyle?: Partial<CSSStyleDeclaration>;

    /**
     * The absolute value of the maximum radius of the circle (in pixels).
     * By default, the circle is stretched enough to completely cover the entire
     * element.
     *
     * `null` means to stretch
     */
    radius?: number | null;
}
```

