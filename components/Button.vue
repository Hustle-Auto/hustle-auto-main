<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {}
</script>

<style scoped>
.button {
  @apply px-5 py-4 tracking-wide text-black hover:text-white uppercase border-2;

  /* for transition */
  @apply overflow-hidden transition duration-300 z-10 relative rounded bg-white;
}

.button::after {
  content: '';
  z-index: -1;

  @apply transition-all duration-300 absolute block rounded bg-black;
  @apply left-0 right-0 top-full -bottom-full;

  /* sets the "border" around the hover state of the button */
  margin: 0.05rem;
}

.button:hover::after {
  @apply left-0 right-0 top-0 bottom-0;
}
</style>
