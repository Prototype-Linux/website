import { createApp } from "vue"
import App from "./App.vue"
import "./style.css"

const viewportMeta = document.querySelector('meta[name="viewport"]')
const shortSide = Math.min(screen.width, screen.height)
if (viewportMeta && shortSide >= 600 && shortSide < 1100) {
  viewportMeta.setAttribute("content", "width=1100, viewport-fit=cover")
}

createApp(App).mount("#app")
