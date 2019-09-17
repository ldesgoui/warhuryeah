<template>
  <div class="max-w-md mx-auto p-8 text-center font-sans">
    <div v-if="error.statusCode === 404">
      <p>Ruh roh, gamer dude, you've taken a wrong turn!</p>
      <p>This ain't what you want, this is the ol' zany...</p>
      <p class="font-bold">Page Not Found</p>
    </div>
    <div v-else>
      <p>Omega woops!</p>
      <p class="font-bold">The website just dun done broke!</p>
      <p>Vewy sowwy</p>
    </div>

    <n-link class="mt-8" to="/">
      to Homepage
    </n-link>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
}
</script>
