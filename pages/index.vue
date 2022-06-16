<template>
  <div>
    <main>
      <section
        class="flex flex-col justify-center min-h-screen py-16 space-y-16 bg-black px-7"
      >
        <!-- bg-center bg-no-repeat bg-contain bg-white/30 backdrop-blur-md px-7 bg-logo -->
        <div class="flex justify-center w-3/4 max-w-sm mx-auto">
          <img src="~/assets/imgs/logo.png" class="object-contain" />
        </div>

        <h1
          class="text-5xl font-bold text-center text-white uppercase font-heading"
        >
          Striving to be the Best Detailers in the City!
        </h1>
        <p class="text-2xl text-center text-white capitalize">
          We Hustle To Provide The Best Service You Can Get!
        </p>
        <div class="text-center">
          <Button>Book Now!</Button>
        </div>
      </section>
      <section class="mx-2 my-12">
        <h2 class="text-center h2">Our Reviews</h2>

        <div class="container flex mx-auto space-x-5">
          <article class="w-full my-20 space-y-5">
            <div class="w-full overflow-hidden h-60">
              <img src="~/assets/imgs/review-photo.png" alt="review-photo" />
            </div>
            <h3
              class="text-2xl font-semibold tracking-tight uppercase font-heading"
            >
              Simran M.
            </h3>
            <p class="capitalize">
              They really turned my range around, I had my dog with me in the
              car, it was such a mess. And they really made it all Amazing! Will
              be definitely coming back! - Simian M.
            </p>
          </article>
          <article class="w-full my-20 space-y-5">
            <div class="w-full overflow-hidden h-60">
              <img src="~/assets/imgs/review-photo.png" alt="review-photo" />
            </div>
            <h3 class="h3">Ashely P.</h3>
            <p class="capitalize">
              I just came back from a week partying with my girls and the car
              was in such a bad shape, I had trash everywhere and broken bottle
              in the back with dried alcohol. But these guys really did such a
              good job, removed the stain and I loved it!
            </p>
          </article>
        </div>
      </section>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
})
</script>
