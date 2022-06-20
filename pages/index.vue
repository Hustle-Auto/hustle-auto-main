<template>
  <div>
    <main>
      <div class="bg-black">
        <section
          class="container flex flex-col justify-center min-h-screen py-16 mx-auto space-y-16 px-7"
        >
          <!-- bg-center bg-no-repeat bg-contain bg-white/30 backdrop-blur-md px-7 bg-logo -->
          <div class="flex justify-center w-3/4 max-w-sm mx-auto">
            <img src="~/assets/imgs/logo.svg" class="object-contain filter" />
          </div>

          <h1
            class="text-5xl font-bold text-center text-white uppercase md:text-6xl lg:text-6xl font-heading"
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
      </div>
      <section class="section">
        <h2 class="text-center h2">Our Reviews</h2>

        <div class="sm:grid sm:grid-cols-2 sm:gap-x-2 lg:grid-cols-3">
          <Review
            :src="require('~/assets/imgs/reviews/simran-m-review.png')"
            title="Simran M."
            text="They really turned my range around, I had my dog with me in the
              car, it was such a mess. And they really made it all Amazing! Will
              be definitely coming back! - Simian M."
          />
          <Review
            :src="require('~/assets/imgs/reviews/ashley-p-review.png')"
            title="Ashley P."
            text="I just came back from a week partying with my girls and the car was in such a bad shape, I had trash everywhere and broken bottle in the back with dried alcohol. But these guys really did such a good job, removed the stain and I loved it!"
          />

          <Review
            :src="require('~/assets/imgs/reviews/harpreet-m-review.png')"
            title="Harpreet M."
            text="these guys really did a good job, I work in construction and the truck gets beaten and used everyday, I did not think it was going to come out this nice! Any looking for a detail book now -Harpreet M. "
          />

          <Review
            :src="require('~/assets/imgs/reviews/harpreet-m-review.png')"
            title="Harpreet M."
            text="these guys really did a good job, I work in construction and the truck gets beaten and used everyday, I did not think it was going to come out this nice! Any looking for a detail book now -Harpreet M. "
          />

          <Review
            :src="require('~/assets/imgs/reviews/harpreet-m-review.png')"
            title="Harpreet M."
            text="these guys really did a good job, I work in construction and the truck gets beaten and used everyday, I did not think it was going to come out this nice! Any looking for a detail book now -Harpreet M.  "
          />
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
