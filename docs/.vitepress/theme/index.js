import LanguageSwitch from './components/LanguageSwitch.vue'

export default {
  enhanceApp({ app }) {
    app.component('LanguageSwitch', LanguageSwitch)
  }
}
