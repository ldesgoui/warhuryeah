<template>
  <div>
    <h1 v-if="error.statusCode === 404">
      <p>Ruh roh, gamer dude, you've taken a wrong turn!</p>
      <p>This ain't what you want, this is the ol' zany...</p>
      <p>Page Not Found</p>
    </h1>
    <h1 v-else>
      <p>Omega woops!</p>
      <p>The website just dun done broke!</p>
      <p>Vewy sowwy</p>
    </h1>
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
