<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <section class="hero" fetchpriority="high">
    <div class="description">
      <h1>Build it yourself</h1>
      <p>
        While on Alpha stage, there's no pre-built ISO right now, and that's on
        purpose. Things change fast and often, so instead of shipping something
        that'd go stale in a week, here's how to build it yourself.
      </p>
    </div>
    <img src="/prototype-logo.svg" class="logo" alt="Prototype Logo" />
  </section>

  <section class="why round">
    <h2>
      <Icon icon="ic:baseline-info" aria-hidden="true" />
      Why no ISO?
    </h2>
    <p>
      This is very much a moving target. Keeping a downloadable image up to date
      would mean either updating it constantly or handing out something
      outdated, so for now building from source is the most honest option.
    </p>
  </section>

  <section class="steps">
    <h2>Building</h2>
    <p>
      It's genuinely simple. Just run these commands on a Debian 13 (trixie)
      environment:
    </p>
    <pre class="code-block round"><code>sudo apt install live-build schroot -y
git clone --recursive https://github.com/Prototype-Linux/distro prototype
cd prototype
lb-config/lb_config_prototype.sh
lb build</code></pre>
  </section>

  <section class="source round">
    <h2>
      <Icon icon="fa-brands:github" aria-hidden="true" />
      Source Code
    </h2>
    <p>Curious how it's put together? Everything is open on GitHub.</p>
    <div class="cta-buttons">
      <a href="https://github.com/Prototype-Linux" class="btn btn-orange">
        <Icon icon="fa-brands:github" aria-hidden="true" />Go to GitHub
      </a>
    </div>
  </section>

  <section class="contributors">
    <h2>Looking for contributors</h2>
    <p>
      I'm especially looking for people who know Windows better than I do, folks
      who can help figure out which features actually matter and how to bring
      them over here.
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

.why,
.source {
  background-color: #454b57;
  padding: 2em 2em;
}

.why h2,
.source h2 {
  font-size: 1.2em;
  font-weight: bold;
  display: flex;
  gap: 0.6em;
  margin-bottom: 0.6em;
}

.why h2 svg,
.source h2 svg {
  font-size: 1.6em;
  color: var(--cta-orange);
}

.why p,
.steps p,
.contributors p,
.source p {
  font-size: 0.9em;
  text-align: justify;
}

.steps h2 {
  margin-bottom: 0.5em;
}

.code-block {
  background-color: #1c1f26;
  color: rgba(255, 255, 255, 0.9);
  padding: 1.2em 1.5em;
  margin-top: 1em;
  overflow-x: auto;
  font-family: "Courier New", monospace;
  font-size: 0.85em;
  line-height: 1.6;
  box-shadow: 0 2px 6px var(--shadow-1);
}

.source .cta-buttons {
  margin-top: 1em;
  display: flex;
  flex-direction: row;
  gap: 0.8em;
}
</style>
