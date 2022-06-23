<template>
  <div>
    <Header></Header>
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'DefaultPage',
})
</script>

<style lang="css">
a.nuxt-link-active {
  text-decoration: none;
}
/* exact link will show the primary color for only the exact matching link */
a.nuxt-link-exact-active {
  text-decoration: underline;
}

a,
a:visited {
  text-decoration: none;
  color: inherit;
}

a:hover {
  opacity: 0.5;
}
</style>
