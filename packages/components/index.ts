import { type App } from 'vue'
import Button from './src/button/Button.vue'

export { Button }

export default {
  install(app: App) {
    app.component('VButton', Button)
  },
}
