<template>
  <button
    :class="['button', { accent: accent }]"
    :type="submit ? 'submit' : 'button'"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    accent: {
      type: Boolean,
      default: false,
    },
    submit: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>
.button {
  @apply px-5 py-4 tracking-wide text-black hover:text-white uppercase border-2 border-black hover:border-white;

  /* for transition */
  @apply overflow-hidden transition duration-300 z-10 relative rounded bg-white;
}

.button::after {
  content: '';
  z-index: -1;

  @apply transition-all duration-300 absolute block bg-black;
  @apply left-0 right-0 top-full -bottom-full;

  /* sets the "border" around the hover state of the button
  margin: 0.1rem; */
}

.button:hover::after {
  @apply left-0 right-0 top-0 bottom-0;
}

.button.accent {
  @apply text-accent  hover:text-white border-accent;
}

.button.accent::after {
  @apply bg-accent;
}
</style>
