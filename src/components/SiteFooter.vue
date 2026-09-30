<script>
export default {
  name: "SiteFooter",
  props: ["data"],
  data() {
    return { year: new Date().getFullYear() }
  }
}
</script>

<template>
  <footer>
    <div class="wrap">
      <span>&copy; {{ year }} Lucas Gabriel (lucmsilva). Some components licensed under BSD 3-Clause.</span>
      <span><a v-for="l in data.links" :key="l.label" :href="l.href" target="_blank" rel="noopener">{{ l.label }}</a></span>
    </div>
  </footer>
</template>
