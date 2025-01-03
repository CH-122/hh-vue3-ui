<template>
  <button
    class="v-button"
    :class="[
      `v-button--${type}`,
      {
        'v-button--disabled': disabled,
      },
    ]"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
interface Props {
  type?: 'primary' | 'secondary' | 'text'
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: 'primary',
  disabled: false,
})

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

function handleClick(event: MouseEvent) {
  if (!props.disabled) {
    emit('click', event)
  }
}
</script>

<style>
.v-button {
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}

.v-button--primary {
  background-color: #1a73e8;
  color: white;
  border: none;
}

.v-button--secondary {
  background-color: white;
  color: #1a73e8;
  border: 1px solid #1a73e8;
}

.v-button--text {
  background: none;
  border: none;
  color: #1a73e8;
  padding: 0;
}

.v-button--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
