<script>
import FeatureCard from "./FeatureCard.vue"

export default {
  name: "FeatureGrid",
  components: { FeatureCard },
  props: ["items"]
}
</script>

<template>
  <div class="grid3"><FeatureCard v-for="i in items" :key="i.title" :item="i" /></div>
</template>
