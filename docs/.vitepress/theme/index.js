import LanguageSwitch from './LanguageSwitch.vue'

export default {
  enhanceApp({ app }) {
    app.component('LanguageSwitch', LanguageSwitch)
  }
}
