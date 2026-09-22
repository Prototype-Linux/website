<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <section class="hero" fetchpriority="high">
    <div class="description">
      <h1>A comfortable path from Windows to Linux</h1>
      <p>
        Prototype Linux is a lightweight distribution based on Debian Stable,
        built to feel familiar in the way it works, not in the way it looks. No
        mimicry, no overhead, just a straightforward desktop for anyone coming
        from Windows.
      </p>
      <div class="cta-buttons">
        <RouterLink to="/download" class="btn btn-orange">
          <Icon icon="ic:baseline-download" aria-hidden="true" />Download Now
        </RouterLink>
        <RouterLink to="/about" class="btn btn-cta">Learn More</RouterLink>
        <a href="https://github.com/Prototype-Linux" class="btn btn-cta">
          <icon icon="fa-brands:github" />Go to GitHub</a
        >
      </div>
    </div>
    <img src="/prototype-logo.svg" class="logo" alt="Prototype Logo" />
  </section>
  <section class="features round">
    <article>
      <h2>
        <Icon icon="ic:baseline-rocket-launch" aria-hidden="true" />
        Efficient and lightweight
      </h2>
      <p>
        Built on Debian with Xfce, Prototype Linux is light on memory and quick
        to boot — great for modern and low-resource systems alike.
      </p>
    </article>
    <article>
      <h2>
        <Icon icon="ic:baseline-monitor" aria-hidden="true" />
        A clean, no-nonsense desktop
      </h2>
      <p>
        A minimal setup with no unnecessary services or visual clutter, so the
        desktop stays out of your way and focused on what you actually use it
        for.
      </p>
    </article>
    <article>
      <h2>
        <Icon icon="ic:baseline-security" aria-hidden="true" />
        Secure & Reliable
      </h2>
      <p>
        Built on Debian's rock-solid design and stable package ecosystem,
        Prototype Linux gives you a dependable system for daily use.
      </p>
    </article>
  </section>
  <section class="more-info">
    <h2>Familiar workflow, real Linux underneath</h2>
    <p>
      Prototype Linux takes Debian's stable core and wraps it in a workflow that
      won't feel foreign if you're coming from Windows: familiar habits,
      familiar tools, without giving up what makes Linux fast and reliable.
    </p>
  </section>
  <section class="benefits round">
    <h2>Designed for Performance and Simplicity</h2>
    <ul>
      <li>
        <Icon icon="ic:baseline-check" />
        <strong>Minimal Bloat:</strong>
        Only essential components are included by default, keeping the system
        fast and clean.
      </li>
      <li>
        <Icon icon="ic:baseline-check" />
        <strong>Customizable Desktop:</strong>
        Xfce allows deep customization while remaining lightweight and
        responsive.
      </li>
      <li>
        <Icon icon="ic:baseline-check" />
        <strong>Debian-Based:</strong>
        Benefit from Debian's efficiency and well-maintained APT repos.
      </li>
    </ul>
  </section>
  <section class="final-cta">
    <h2>Give Prototype Linux a try</h2>
    <p>
      A modern desktop built on one of the most stable Linux bases out there —
      see if it fits your workflow.
    </p>
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
li,
p {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
}

.description,
.benefits *,
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

.cta-buttons {
  margin-top: 1.2em;
  display: flex;
  flex-direction: row;
  gap: 0.8em;
}

.features {
  padding: 2em 2em;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 1.5em;
  background-color: #454b57;
}

.features h2 {
  font-size: 1.2em;
  font-weight: bold;
  display: flex;
  gap: 0.6em;
  margin-bottom: 0.5em;
}

.features h2 svg {
  font-size: 1.6em;
  margin-top: 0em;
  color: var(--cta-orange);
}

.features p {
  font-size: 0.9em;
  text-align: justify;
}

.benefits {
  background-color: #454b57;
  padding: 2em 2em;
}

.benefits h2 {
  margin-bottom: 0.5em;
}

.benefits ul {
  list-style: none;
  line-height: 1.9;
  padding: 0;
  margin: 0;
}

.benefits ul li {
  display: flex;
  place-items: center;
  gap: 0.2em;
}

.benefits ul li svg {
  color: var(--cta-orange);
  font-size: 2em;
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
