<template>
  <div>
    <!-- Hamburger menu -->
    <section
      ref="menu"
      class="absolute right-0 z-50 hidden w-full h-screen px-4 overflow-auto transition-all bg-slate-700"
    >
      <div class="flex items-center justify-between p-2">
        <div class="mr-auto">
          <router-link to="/">
            <img class="w-32 h-auto" src="../static/logo.svg" alt="logo" />
          </router-link>
        </div>
        <div class="mr-2">
          <button
            type="button"
            class="inline-flex items-center justify-center p-2 text-white rounded-md bg-white/0"
            @click="toggleMenu"
          >
            <span class="sr-only">Close menu</span>

            <svg
              class="w-10 h-10 ml-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
      <!-- Mobile navigation -->
      <div class="px-5 mt-12 md:pl-10">
        <nav class="">
          <ul class="">
            <li
              class="p-3 py-4 my-2 text-3xl text-white border border-gray-200 rounded-lg opacity-50 hover:opacity-100"
            >
              <router-link to="/about" @click="toggleMenu">About</router-link>
            </li>
            <li
              class="p-3 py-4 my-2 text-3xl text-white border border-gray-200 rounded-lg opacity-50 min-w-fullp-3 hover:opacity-100"
            >
              <router-link to="/faq" @click="toggleMenu">Faq</router-link>
            </li>
          </ul>
        </nav>
      </div>
      <!-- End  mobile navigation -->
    </section>

    <!--  Desktop menu with Hamburger icon on mobile -->
    <section class="px-4 mx-auto max-w-7xl">
      <div class="flex items-center p-2 text-lg md:text-2xl">
        <div class="mr-auto">
          <router-link to="/">
            <img class="w-32 h-auto" src="../static/logo.svg" alt="logo" />
          </router-link>
        </div>
        <!-- Start Hamburger icon: visible on mobile -->
        <div class="order-last lg:hidden">
          <button
            type="button"
            class="inline-flex items-center justify-center p-2 bg-white rounded-md text-blue"
            aria-expanded="false"
            @click="toggleMenu"
          >
            <svg
              class="block w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <!-- End Hamburger icon -->
        <!-- Desktop navigation -->
        <div class="hidden lg:block">
          <nav class="">
            <ul class="flex items-center p-2 text-lg md:text-2xl">
              <li class="p-3 m-1 hover:underline hover:underline-offset-8">
                <NuxtLink to="/">Home</NuxtLink>
              </li>
              <li class="p-3 m-1 hover:underline hover:underline-offset-8">
                <router-link to="/about">About</router-link>
              </li>
              <li class="p-3 m-1 hover:underline hover:underline-offset-8">
                <router-link to="/faq">Faq</router-link>
              </li>
              <li class="p-3 m-1">
                <button
                  class="p-3 font-bold text-white bg-black border border-black rounded hover:bg-opacity-50 hover:bg-white hover:text-black"
                >
                  <a class="">Book Now</a>
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <!-- end desktop navigation -->
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HeaderPage',

  methods: {
    toggleMenu() {
      // typescript refs
      const menu = this.$refs.menu! as HTMLDivElement
      menu.classList.toggle('hidden')
    },
  },
})
</script>
