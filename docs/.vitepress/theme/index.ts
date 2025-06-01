
import DefaultTheme from 'vitepress/theme'
import { h, defineComponent, nextTick, watch } from 'vue'
import { useRoute } from 'vitepress'
import confetti from 'canvas-confetti'




function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}



export default {
  ...DefaultTheme,
  Layout: defineComponent({
    name: 'CustomLayout',
    setup() {
      const route = useRoute()


      /* 这是点击按钮🎉  */
      const setupConfettiButton = () => {
        const btn = document.getElementById('firework')
        if (btn && !btn.dataset.bound) {
          console.log('[confetti] binding firework button')
          btn.addEventListener('click', () => {
            confetti({
              angle: randomInRange(55, 125),
              spread: randomInRange(50, 70),
              particleCount: randomInRange(50, 100),
              origin: { y: 0.6 }
            })          
          })
          btn.dataset.bound = 'true'
        }
      }

      const setupScrollConfetti = () => {
        let triggered = false
        window.addEventListener('scroll', () => {
          const scrollTop = window.scrollY
          const viewportHeight = window.innerHeight
          const fullHeight = document.body.scrollHeight
          if (!triggered && scrollTop + viewportHeight >= fullHeight - 10) {
            triggered = true
            console.log('[confetti] scroll triggered')
            confetti({
              particleCount: 200,
              spread: 80,
              origin: { y: 0.8 }
            })
          }
        })
      }

      watch(
        () => route.path,
        () => {
          console.log('[route] changed to', route.path)
          nextTick(() => {
            setupConfettiButton()
            /* 这是滑到页面底端显示🎉  */
            if (route.path === '/quickstart.html' || route.path === '/activate.html' || route.path === '/firstscript.html') {
              setupScrollConfetti()
            }
          })
        },
        { immediate: true }
      )

      return () => h(DefaultTheme.Layout)
    }
  })
}

