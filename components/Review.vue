<template>
  <article class="w-full my-20 space-y-5">
    <div class="w-full overflow-hidden">
      <img :src="src" alt="review-photo" />
    </div>
    <h3 class="text-2xl font-semibold tracking-tight uppercase font-heading">
      {{ title }}
    </h3>
    <p class="capitalize">
      {{ text }}
    </p>
  </article>
</template>

<script lang="ts">
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.w-50\% {
  width: 50%;
}
</style>
