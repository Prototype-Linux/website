<script setup>
import { Icon } from "@iconify/vue";

const screenshots = [
  { file: "Desktop.png", label: "Desktop", alt: "Prototype Linux desktop" },
  { file: "ApplicationsMenu.png", label: "Application Menu", alt: "Application menu open" },
  { file: "SettingsMenu.png", label: "Settings", alt: "System settings window" },
  { file: "Customization.png", label: "Appearance", alt: "Customization options" },
  { file: "PackageInstallerDeb.png", label: "Package Installer", alt: "GDebi Package Manager" },
  { file: "FileManager.png", label: "File Manager", alt: "Thunar file manager" },
  { file: "Fastfetch.png", label: "Fastfetch", alt: "Fastfetch utility output" },
];
</script>

<template>
  <section class="hero" fetchpriority="high">
    <div class="description">
      <h1>About Prototype Linux</h1>
      <p>
        Prototype Linux is a lightweight Debian-based distribution running
        Xfce, built for people coming from Windows who want a familiar
        workflow without a Windows-like look, and without Wine.
      </p>
    </div>
    <img src="/prototype-logo.svg" class="logo" alt="Prototype Logo" />
  </section>

  <section class="philosophy round">
    <h2>
      <Icon icon="ic:baseline-lightbulb" aria-hidden="true" />
      Philosophy
    </h2>
    <p>
      Rather than copying Windows visually, Prototype Linux focuses on
      familiar habits and workflows: installing software, finding your way
      around settings, and everyday usage feel approachable, while the
      desktop itself stays clean and distinctly its own.
    </p>
  </section>

  <section class="more-info">
    <h2>Built on Debian, shaped for the transition</h2>
    <p>
      Under the hood it's Debian Stable and Xfce, the same reliable base
      trusted by countless Linux systems. On top of that, Prototype Linux
      adds sensible defaults so common tasks, like installing a package,
      feel just as straightforward as what you're used to.
    </p>
  </section>

  <section class="screenshots round" id="#screenshots">
    <h2>Screenshots</h2>
    <div class="screenshot-grid">
      <a
        v-for="shot in screenshots"
        :key="shot.file"
        :href="`/screenshots/${shot.file}`"
        target="_blank"
        rel="noopener"
        class="screenshot-item"
      >
        <img :src="`/screenshots/${shot.file}`" :alt="shot.alt" loading="lazy" />
        <span>{{ shot.label }}</span>
      </a>
    </div>
  </section>

  <section class="final-cta">
    <h2>Ready to try it?</h2>
    <RouterLink to="/download" class="btn btn-orange">
      <Icon icon="ic:baseline-download" aria-hidden="true" />Download Now
    </RouterLink>
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

.philosophy {
  background-color: #454b57;
  padding: 2em 2em;
}

.philosophy h2,
.screenshots h2 {
  font-size: 1.2em;
  font-weight: bold;
  display: flex;
  gap: 0.6em;
  margin-bottom: 0.6em;
}

.philosophy h2 svg {
  font-size: 1.6em;
  color: var(--cta-orange);
}

.philosophy p,
.more-info p {
  font-size: 0.9em;
  text-align: justify;
}

.screenshots {
  background-color: #454b57;
  padding: 2em 2em;
}

.screenshot-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.2em;
}

.screenshot-item {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  color: inherit;
}

.screenshot-item img {
  width: 100%;
  border-radius: 0.5em;
  box-shadow: 0 4px 14px var(--shadow-1);
  transition: transform 0.2s;
}

.screenshot-item:hover img {
  transform: scale(1.02);
}

.screenshot-item span {
  text-align: center;
  font-size: 0.9em;
  opacity: 0.85;
}

.final-cta {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1em;
}

.final-cta .btn {
  line-height: 1.5;
  display: inline-flex;
  width: fit-content;
  margin: 0 auto;
}
</style>