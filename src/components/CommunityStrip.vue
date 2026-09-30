<script>
export default {
  name: "CommunityStrip",
  props: ["data"]
}
</script>

<template>
  <div class="community">
    <div><strong>{{ data.title }}</strong><p>{{ data.text }}</p></div>
    <a class="btn ghost" :href="data.href" target="_blank" rel="noopener">{{ data.label }}</a>
  </div>
</template>
