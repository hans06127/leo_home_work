<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    icon?: string
    title?: string
    notice?: string
    collapse?: boolean
    inner?: boolean
    closed?: boolean
  }>(),
  {
    icon: '',
    title: '',
    notice: '',
    collapse: false,
    inner: false,
    closed: false
  }
)

const slots = useSlots()
const boxRef = ref<HTMLElement>()
const isOpened = ref(!(props.title && props.collapse && props.closed))

const toggleBox = () => {
  isOpened.value = !isOpened.value
}

const checkIsErrorAndExpand = () => {
  if (boxRef.value?.querySelector('.is-error')) {
    isOpened.value = true
  }
}

defineExpose({
  checkIsErrorAndExpand
})
</script>

<template>
  <section ref="boxRef" class="system-main__box" :class="{ 'system-main__box--inner': inner }">
    <header
      v-if="title"
      class="system-main__boxTitle"
      :class="{ 'system-main__boxTitle--close': !isOpened }"
    >
      <div class="system-main__boxText">
        <p>
          <span v-if="icon" class="material-symbols-rounded" translate="no">{{ icon }}</span>
          <span>{{ title }}</span>
        </p>

        <div v-if="notice" class="system-main__boxNotice">
          <p>
            <span class="material-symbols-rounded" translate="no">info</span>
            <span>{{ notice }}</span>
          </p>
        </div>
      </div>

      <div v-if="slots['title-extra']" class="system-main__boxExtra">
        <slot name="title-extra" />
      </div>

      <button
        v-if="collapse"
        class="system-main__boxToggle"
        type="button"
        :aria-expanded="isOpened"
        @click="toggleBox"
      >
        <span class="material-symbols-rounded" translate="no">
          {{ isOpened ? 'remove' : 'add' }}
        </span>
      </button>

      <div v-if="slots['header-extra']" class="system-main__headerExtra">
        <slot name="header-extra" />
      </div>
    </header>

    <div v-show="isOpened" class="system-main__content">
      <slot />
    </div>
  </section>
</template>
