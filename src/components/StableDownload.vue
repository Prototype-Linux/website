<script>
import { GITHUB_OWNER, GITHUB_REPO, releasesPageUrl, formatDate } from "../content.js"

export default {
  name: "StableDownload",
  data() {
    return { release: null, loading: true, failed: false, releasesPageUrl }
  },
  methods: { formatDate },
  async mounted() {
    try {
      const res = await fetch("https://api.github.com/repos/" + GITHUB_OWNER + "/" + GITHUB_REPO + "/releases/latest")
      if (!res.ok) throw new Error("release fetch failed")
      this.release = await res.json()
    } catch {
      this.failed = true
    } finally {
      this.loading = false
    }
  }
}
</script>

<template>
  <div class="card">
    <span class="tag">Stable</span>
    <h3>Stable release</h3>
    <p v-if="loading">Loading latest release...</p>
    <template v-else-if="failed">
      <p>Could not load release info.</p>
      <div class="btns"><a class="btn" :href="releasesPageUrl" target="_blank" rel="noopener">See releases on GitHub</a></div>
    </template>
    <template v-else>
      <p>Version {{ release.tag_name }}, published {{ formatDate(release.published_at) }}. Recommended for daily use.</p>
      <div class="btns">
        <a v-for="asset in release.assets" :key="asset.id" class="btn" :href="asset.browser_download_url">{{ asset.name }}</a>
        <a class="small" :href="releasesPageUrl" target="_blank" rel="noopener">View all releases</a>
      </div>
    </template>
  </div>
</template>
