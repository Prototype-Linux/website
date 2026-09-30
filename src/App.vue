<script>
import { content } from "./content.js"
import SiteHeader from "./components/SiteHeader.vue"
import HeroSection from "./components/HeroSection.vue"
import SectionTitle from "./components/SectionTitle.vue"
import FeatureGrid from "./components/FeatureGrid.vue"
import WorkflowTable from "./components/WorkflowTable.vue"
import ScreenshotShowcase from "./components/ScreenshotShowcase.vue"
import BuildSteps from "./components/BuildSteps.vue"
import StableDownload from "./components/StableDownload.vue"
import NightlyDownload from "./components/NightlyDownload.vue"
import CommunityStrip from "./components/CommunityStrip.vue"
import SiteFooter from "./components/SiteFooter.vue"

export default {
  name: "App",
  components: { SiteHeader, HeroSection, SectionTitle, FeatureGrid, WorkflowTable, ScreenshotShowcase, BuildSteps, StableDownload, NightlyDownload, CommunityStrip, SiteFooter },
  data() {
    return { c: content }
  }
}
</script>

<template>
  <SiteHeader :nav="c.nav" />
  <HeroSection :hero="c.hero" />
  <section id="about">
    <div class="wrap">
      <SectionTitle :title="c.about.title" :text="c.about.text" />
      <FeatureGrid :items="c.about.features" />
      <div style="height:56px"></div>
      <SectionTitle :title="c.about.mapTitle" :text="c.about.mapText" />
      <WorkflowTable :rows="c.about.map" />
    </div>
  </section>
  <section id="screenshots" class="alt">
    <div class="wrap">
      <SectionTitle :title="c.screenshots.title" :text="c.screenshots.text" />
      <ScreenshotShowcase :items="c.screenshots.items" :interval="5000" />
    </div>
  </section>
  <section id="build">
    <div class="wrap">
      <SectionTitle :title="c.build.title" :text="c.build.text" />
      <BuildSteps :steps="c.build.steps" />
      <CommunityStrip :data="{ title: 'Source code', text: c.build.sourceText, label: c.build.sourceLabel, href: c.build.sourceHref }" />
    </div>
  </section>
  <section id="downloads" class="alt">
    <div class="wrap">
      <SectionTitle :title="c.downloads.title" :text="c.downloads.text" />
      <div class="dl">
        <StableDownload />
        <NightlyDownload />
      </div>
      <CommunityStrip :data="c.community" />
    </div>
  </section>
  <SiteFooter :data="c.footer" />
</template>
