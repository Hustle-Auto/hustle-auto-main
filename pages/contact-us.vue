<template>
  <main class="min-h-screen">
    <section class="space-y-10 section lg:flex lg:space-y-0">
      <article class="w-full">
        <h2 class="h2">Contact Us</h2>
        <div class="space-y-2">
          <div>
            <p class="p">yatrik.pamani@gmail.com</p>
            <p class="p">(403) 402- 0462</p>
          </div>
          <div>
            <p class="p">123 Demo StreetNew York, NY 12345</p>
          </div>
        </div>
      </article>
      <article class="w-full">
        <form @submit.prevent="submit">
          <div class="space-y-5">
            <div class="w-full">
              <label for="first-name" class="label">First Name</label>
              <input
                id="first-name"
                v-model="userInput.firstName"
                type="text"
                class="input"
              />
            </div>
            <div class="w-full">
              <label for="last-name" class="label">Last Name</label>
              <input
                id="last-name"
                v-model="userInput.lastName"
                type="text"
                class="input"
              />
            </div>
            <div class="w-full">
              <label for="email" class="label">Email</label>
              <input
                id="email"
                v-model="userInput.email"
                type="email"
                class="input"
              />
            </div>
            <div class="w-full">
              <label for="message" class="label">Message</label>
              <textarea
                id="message"
                v-model="userInput.message"
                class="input"
                rows="5"
              />
            </div>
            <div class="w-full">
              <Button accent submit>Submit</Button>
            </div>
          </div>
        </form>
      </article>
    </section>
  </main>
</template>

<script lang="ts">
export default {
  data: () => ({
    userInput: {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    },
  }),
  methods: {
    submit() {
      const data = JSON.stringify(this.userInput)
      console.log(data)
    },
  },
}
</script>

<style></style>
