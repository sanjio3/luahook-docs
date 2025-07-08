<template>
  <div class="language-switch">
    <button 
      v-for="lang in langs" 
      :key="lang.link"
      @click="switchLang(lang.link)"
      :class="{ active: currentLang === lang.link }"
    >
      {{ lang.text }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      langs: [
        { text: '简体中文', link: '/' },
        { text: 'English', link: '/en/' }
      ],
      currentLang: this.$route.path.startsWith('/en/') ? '/en/' : '/'
    }
  },
  methods: {
    switchLang(path) {
      this.$router.push(path)
    }
  }
}
</script>

<style scoped>
.language-switch {
  display: flex;
  gap: 10px;
}
button.active {
  font-weight: bold;
  color: #42b883;
}
</style>
