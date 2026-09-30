<script>
import logo from "../assets/logo.svg"

export default {
  name: "DesktopMock",
  data() {
    return { logo }
  }
}
</script>

<template>
  <div class="desk">
    <div class="win"><div class="bar"><i></i><i></i><i></i></div><div class="body"><span v-for="i in 8" :key="i"></span></div></div>
    <div class="win two"><div class="bar"><i></i><i></i><i></i></div><div class="body"><span v-for="i in 4" :key="i"></span></div></div>
    <div class="dock"><img :src="logo" alt=""><i v-for="i in 3" :key="i"></i><em>12:30</em></div>
  </div>
</template>
