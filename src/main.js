import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { setupRouter } from './router/index'
import { setupStore } from './store/index'
import 'element-plus/dist/index.css'
function initApp() {
  const app = createApp(App)
  setupRouter(app)
  setupStore(app)
  app.mount('#app', true)
}

initApp()
