<script>
export default {
  name: "BuildSteps",
  props: ["steps"]
}
</script>

<template>
  <div class="steps">
    <div class="step" v-for="(s, i) in steps" :key="s.title">
      <div class="n">{{ i + 1 }}</div>
      <h3 style="margin:0">{{ s.title }}</h3>
      <pre>{{ s.code }}</pre>
    </div>
  </div>
</template>
