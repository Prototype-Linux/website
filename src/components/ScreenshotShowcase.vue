<script>
export default {
  name: "ScreenshotShowcase",
  props: ["items", "interval"],
  data() {
    return { index: 0, timer: null }
  },
  computed: {
    current() {
      return this.items[this.index]
    }
  },
  methods: {
    start() {
      clearInterval(this.timer)
      this.timer = setInterval(this.next, this.interval)
    },
    next() {
      this.index = (this.index + 1) % this.items.length
    },
    select(i) {
      this.index = i
      this.start()
    }
  },
  mounted() {
    this.start()
  },
  unmounted() {
    clearInterval(this.timer)
  }
}
</script>

<template>
  <div class="shots">
    <div>
      <Transition name="fade" mode="out-in">
        <div :key="index">
          <h3>{{ current.name }}</h3>
          <p>{{ current.description }}</p>
        </div>
      </Transition>
      <div class="dots">
        <button v-for="(item, i) in items" :key="item.name" :class="{ on: i === index }" :aria-label="item.name" @click="select(i)"></button>
      </div>
      <div class="counter">{{ index + 1 }} / {{ items.length }}</div>
    </div>
    <div class="frame">
      <Transition name="fade" mode="out-in">
        <img :key="index" :src="current.src" :alt="current.name">
      </Transition>
    </div>
  </div>
</template>
