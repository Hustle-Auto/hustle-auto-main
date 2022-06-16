<template>
  <div>
    <nav class="my-5 mx-3 flex justify-between">
      <NuxtLink to="/">
        <img src="~/assets/imgs/logo.svg" class="w-24" />
      </NuxtLink>
      <ul class="flex space-x-3">
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/book-now">Book Now</NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {}
</script>

<style scoped></style>
