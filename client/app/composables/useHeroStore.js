// client/app/composables/useHeroStore.js
import { ref } from 'vue'

const hero = ref(null) // { component, props } atau null

export function useHeroStore() {
  function setHero(payload) {
    // payload = { component: Component, props: { ... } }
    hero.value = payload
  }
  function clearHero() {
    hero.value = null
  }
  return { hero, setHero, clearHero }
}