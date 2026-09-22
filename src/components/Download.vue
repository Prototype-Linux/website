<script setup>
import { ref, onMounted } from "vue";
import { Icon } from "@iconify/vue";

const GITHUB_OWNER = "prototype-linux";
const GITHUB_REPO = "distro";
const WORKFLOW_FILE = "build.yml";

const releasesPageUrl = `https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}/releases`;

const latestRelease = ref(null);
const nightlyUrl = ref(null);
const loading = ref({ release: true, nightly: true });
const error = ref({ release: false, nightly: false });

function formatDate(iso) {
  return new Date(iso).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

async function loadLatestRelease() {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/releases/latest`
    );
    if (!res.ok) throw new Error("release fetch failed");
    latestRelease.value = await res.json();
  } catch {
    error.value.release = true;
  } finally {
    loading.value.release = false;
  }
}

async function loadNightlyBuild() {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/actions/workflows/${WORKFLOW_FILE}/runs?branch=main&status=success&per_page=1`
    );
    if (!res.ok) throw new Error("workflow fetch failed");
    const data = await res.json();
    const run = data.workflow_runs?.[0];
    if (!run) throw new Error("no runs found");
    nightlyUrl.value = `https://nightly.link/${GITHUB_OWNER}/${GITHUB_REPO}/actions/runs/${run.id}`;
  } catch {
    error.value.nightly = true;
  } finally {
    loading.value.nightly = false;
  }
}

onMounted(() => {
  loadLatestRelease();
  loadNightlyBuild();
});
</script>

<template>
  <section class="hero" fetchpriority="high">
    <div class="description">
      <h1>Download Prototype Linux</h1>
      <p>
        Get the latest stable release, or grab a nightly build straight from
        CI to try the newest changes.
      </p>
    </div>
    <img src="/prototype-logo.svg" class="logo" alt="Prototype Logo" />
  </section>

  <section class="download-stable round">
    <h2>
      <Icon icon="ic:baseline-verified" aria-hidden="true" />
      Stable Release
    </h2>

    <p v-if="loading.release">Loading latest release...</p>
    <p v-else-if="error.release">
      Could not load release info.
      <a :href="releasesPageUrl">See releases on GitHub</a>.
    </p>
    <div v-else-if="latestRelease">
      <p>
        Version {{ latestRelease.tag_name }} — published
        {{ formatDate(latestRelease.published_at) }}
      </p>
      <div class="cta-buttons">
        <a
          v-for="asset in latestRelease.assets"
          :key="asset.id"
          :href="asset.browser_download_url"
          class="btn btn-orange"
        >
          <Icon icon="ic:baseline-download" aria-hidden="true" />{{ asset.name }}
        </a>
      </div>
      <p class="all-releases">
        <a :href="releasesPageUrl">View all releases</a>
      </p>
    </div>
  </section>

  <section class="download-nightly round">
    <h2>
      <Icon icon="ic:baseline-bolt" aria-hidden="true" />
      Nightly Build
    </h2>
    <p>Built automatically from the latest commit. May be unstable.</p>

    <p v-if="loading.nightly">Loading nightly build...</p>
    <p v-else-if="error.nightly">No nightly build available right now.</p>
    <div v-else-if="nightlyUrl" class="cta-buttons">
      <a :href="nightlyUrl" class="btn btn-cta">
        <Icon icon="ic:baseline-download" aria-hidden="true" />Download Nightly Build
      </a>
    </div>
  </section>

  <section class="more-info">
    <h2>Not sure which to pick?</h2>
    <p>
      Stable releases are tested and recommended for daily use. Nightly
      builds reflect the latest commit and are best for trying out new
      features or helping test bug fixes.
    </p>
  </section>
</template>

<style scoped>
section {
  margin: 3em 10em;
}

h1,
h2,
p {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
}

.description,
.hero img {
  position: relative;
  z-index: 1;
}

.hero {
  background-color: #313745;
  margin: 0;
  display: flex;
  flex-direction: row;
  padding: 5em 10em;
  justify-content: space-between;
  gap: 2em;
  place-items: center;
}

.hero h1 {
  text-align: left;
  font-size: 2.4rem;
  line-height: 1.2;
  max-width: 25ch;
}

.hero p {
  margin-top: 0.8em;
  max-width: 50ch;
  opacity: 0.95;
}

.hero img {
  height: 16em;
  filter: drop-shadow(0 12px 32px var(--shadow-1));
}

.download-stable,
.download-nightly {
  background-color: #454b57;
  padding: 2em 2em;
}

.download-stable h2,
.download-nightly h2 {
  font-size: 1.2em;
  font-weight: bold;
  display: flex;
  gap: 0.6em;
  margin-bottom: 0.6em;
}

.download-stable h2 svg,
.download-nightly h2 svg {
  font-size: 1.6em;
  color: var(--cta-orange);
}

.download-stable p,
.download-nightly p,
.more-info p {
  font-size: 0.9em;
}

.cta-buttons {
  margin-top: 1em;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.8em;
}

.all-releases {
  margin-top: 1em;
}
</style>