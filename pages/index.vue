<template>
  <div class="container mx-auto p-8">
    <img class="my-32 mx-auto" src="~/static/icon.png?inline" />

    <div class="flex flex-col md:flex-row items-center justify-around">
      <a
        v-for="link in links"
        :key="link.url"
        :href="link.url"
        target="_blank"
        rel="noopener noreferrer"
        class="m-2 px-4 py-2 border-2 border-transparent hover:border-black"
        :class="'text-xl font-bold font-sans'"
      >
        {{ link.label }}
      </a>
    </div>
  </div>
</template>

<script>
import { links } from "~/data/links.yml"

export default {
  head: {
    script: [
      { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
    ],
  },

  data() {
    return {
      links,
    }
  },
}
</script>
