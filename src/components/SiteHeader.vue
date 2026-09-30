<script>
import logo from "../assets/logo.svg"

export default {
  name: "SiteHeader",
  props: ["nav"],
  data() {
    return { logo }
  }
}
</script>

<template>
  <header>
    <div class="wrap">
      <a class="brand" href="#"><img :src="logo" alt="Prototype Linux logo">Prototype Linux</a>
      <nav><a v-for="n in nav" :key="n.label" :href="n.href">{{ n.label }}</a></nav>
    </div>
  </header>
</template>
