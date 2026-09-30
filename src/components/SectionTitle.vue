<script>
export default {
  name: "SectionTitle",
  props: ["title", "text"]
}
</script>

<template>
  <div class="stitle">
    <h2>{{ title[0] }}<b>{{ title[1] }}</b></h2>
    <p>{{ text }}</p>
  </div>
</template>
