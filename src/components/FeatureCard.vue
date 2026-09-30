<script>
export default {
  name: "FeatureCard",
  props: ["item"]
}
</script>

<template>
  <div class="card"><h3>{{ item.title }}</h3><p>{{ item.text }}</p></div>
</template>
