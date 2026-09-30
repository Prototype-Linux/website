<script>
import DesktopMock from "./DesktopMock.vue"

export default {
  name: "HeroSection",
  components: { DesktopMock },
  props: ["hero"]
}
</script>

<template>
  <div class="hero">
    <div class="wrap">
      <div>
        <div class="eyebrow">{{ hero.eyebrow }}</div>
        <h1>{{ hero.title[0] }}<br><b>{{ hero.title[1] }}</b></h1>
        <p class="lead">{{ hero.text }}</p>
        <div class="actions">
          <a class="btn" :href="hero.primary.href">{{ hero.primary.label }}</a>
          <a class="btn ghost" :href="hero.secondary.href">{{ hero.secondary.label }}</a>
        </div>
      </div>
      <DesktopMock />
    </div>
  </div>
</template>
