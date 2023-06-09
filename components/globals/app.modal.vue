<template>
  <div class="modal-wrapper" >
    <div class="curtain" @click="closeModal" />
    <div class="modal-dialog container" :class="size">
      <div ref="modalElement" class="modal-content" :style="{ background: theme.background, color: theme.color }">
        <div v-if="showHeader" class="modal-header">
          <slot name="header">
            <div class="title">
              {{ title }}
            </div>
            <div class="close" @click="closeModal">
              <IconClose />
            </div>
          </slot>
        </div>
        <hr />
        <div class="modal-body">
          <slot />
        </div>
        <div v-if="$slots.footer" class="modal-footer">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import IconClose from '@carbon/icons-vue/es/close/24'

const props = defineProps({
  title: { type: String, default: '' },
  size: { type: String, default: 'small' },
  showHeader: { type: Boolean, default: true },
  theme: { type: Object, required: true }
})

const emit         = defineEmits(['close'])
const modalElement = ref<HTMLElement | null>(null)

onMounted(() => {
  disableBodyScroll(modalElement.value as HTMLElement, {
    reserveScrollBarGap: true,
    allowTouchMove: (el: any) => {
      while (el && el !== document.body) {
        if (el.getAttribute('body-scroll-lock-ignore') !== null) {
          return true
        }
        el = el.parentNode as HTMLElement
      }
    },
  })
})

onBeforeUnmount(() => {
  enableBodyScroll(modalElement.value as HTMLElement)
  clearAllBodyScrollLocks()
})

function closeModal() {
  emit('close')
}
</script>

<style lang="postcss" scoped>
/* purgecss start ignore */
.modal-wrapper {
  @apply fixed top-0 left-0 h-full w-full z-50;
  /* @apply flex items-center justify-center; */
  overflow-x: hidden;
  overflow-y: auto;
  .curtain {
    @apply fixed inset-0;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .modal-dialog {
    @apply relative flex pointer-events-none;
    max-height: calc(100% - 3.5rem);
    margin: 1.75rem auto;
  }
  .modal-content {
    @apply relative w-full pointer-events-auto overflow-hidden;
    @apply flex flex-col;
    @apply rounded-xl;
    max-height: calc(100% - 3.5rem);
    background-clip: padding-box;
  }
  .modal-header {
    @apply flex-shrink-0 flex items-center justify-between;
    @apply font-bold;
    .title {
      @apply px-4;
    }
    .close {
      @apply flex items-center justify-center;
      @apply cursor-pointer;
      @apply opacity-50 transition-opacity duration-300;
      height: 50px;
      width: 50px;
      &:hover {
        @apply opacity-100;
      }
    }
  }
  .modal-body {
    @apply flex-1 overflow-hidden;
    /* @apply overflow-y-auto; */
  }
}

@screen mobile {
  .modal-wrapper {
    .modal-dialog {
      @apply absolute bottom-0 px-0 mb-0;
    }
    .modal-content {
      @apply rounded-b-none;
    }
  }
}

@screen md {
  .modal-wrapper {
    @apply flex items-center justify-center;
    .container {
      &.small {
        @apply px-4 max-w-md;
      }
      &.medium {
        @apply px-4 max-w-2xl;
      }
      &.large {
        @apply px-4;
        /* @apply px-4 max-w-full; */
      }
    }
  }
}
/* purgecss end ignore */
</style>
