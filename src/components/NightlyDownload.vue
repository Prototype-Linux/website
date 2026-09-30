<script>
import { GITHUB_OWNER, GITHUB_REPO, WORKFLOW_FILE, repoUrl, actionsPageUrl } from "../content.js"

export default {
  name: "NightlyDownload",
  data() {
    return { url: null, runId: null, commitId: null, loading: true, failed: false, actionsPageUrl }
  },
  async mounted() {
    try {
      const base = "https://api.github.com/repos/" + GITHUB_OWNER + "/" + GITHUB_REPO
      const runApi = await fetch(base + "/actions/workflows/" + WORKFLOW_FILE + "/runs?branch=main&status=success&per_page=1")
      if (!runApi.ok) throw new Error("workflow fetch failed")
      const run = (await runApi.json()).workflow_runs?.[0]
      if (!run) throw new Error("no runs found")
      const artifactApi = await fetch(base + "/actions/runs/" + run.id + "/artifacts")
      if (!artifactApi.ok) throw new Error("artifact fetch failed")
      const artifact = (await artifactApi.json()).artifacts?.[0]
      if (!artifact) throw new Error("no artifacts found")
      this.runId = run.run_number
      this.commitId = run.head_sha.slice(0, 7)
      this.url = repoUrl + "/actions/runs/" + run.id + "/artifacts/" + artifact.id
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
    <span class="tag">Nightly</span>
    <h3>Nightly build</h3>
    <p>Built automatically by CI from the latest commit. May be unstable.</p>
    <div class="warn">You need to be logged in to GitHub for the download to work.</div>
    <p v-if="loading">Loading nightly build...</p>
    <template v-else-if="failed">
      <p>No nightly build available right now.</p>
      <div class="btns"><a class="btn ghost" :href="actionsPageUrl" target="_blank" rel="noopener">Open CI runs on GitHub</a></div>
    </template>
    <div v-else class="btns"><a class="btn" :href="url">Download Nightly Build #{{ runId }} ({{ commitId }})</a></div>
  </div>
</template>
