<template>
  <section
    :class="['w-full bg-gradient-to-b from-slate-800/80 to-transparent text-white overflow-hidden']"
    :aria-label="ariaLabel"
    role="region"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 py-16">
        <!-- LEFT: Text -->
        <div class="relative z-10">
          <p v-if="kicker" class="inline-block text-sm font-semibold text-emerald-300 uppercase tracking-wide mb-3">
            {{ kicker }}
          </p>

          <h1 class="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight" v-html="titleHtml"></h1>

          <p v-if="subtitle" class="mt-4 text-lg text-slate-200 max-w-xl">
            {{ subtitle }}
          </p>

          <!-- CTAs -->
          <div v-if="ctas && ctas.length" class="mt-8 flex flex-wrap gap-3">
            <component
              v-for="(c, i) in ctas"
              :is="c.as || 'NuxtLink'"
              :key="i"
              :to="c.to"
              :href="c.href"
              class="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-transform active:scale-[.98]"
              :class="ctaClasses(c.variant)"
              @click="$emit('cta-click', c)"
              v-bind="c.attrs || {}"
            >
              <span v-if="c.icon" class="text-lg leading-none">{{ c.icon }}</span>
              <span>{{ c.label }}</span>
            </component>
          </div>

          <!-- Optional slot for badges / small search -->
          <div v-if="$slots.default" class="mt-6">
            <slot />
          </div>
        </div>

        <!-- RIGHT: Image -->
        <div class="relative w-full h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg">
          <img
            :src="imageSrc"
            :alt="imageAlt"
            loading="lazy"
            class="w-full h-full object-cover"
            @error="onImgError"
            ref="heroImg"
          />

          <!-- tasteful overlay gradient for legibility and style -->
          <div
            aria-hidden="true"
            class="absolute inset-0 pointer-events-none"
            :style="{
              background: gradientOverlay
            }"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  title: { type: String, required: true },           // supports HTML (v-html)
  subtitle: { type: String, default: '' },
  kicker: { type: String, default: '' },
  image: { type: String, default: '' },              // dynamic image URL
  imageAlt: { type: String, default: 'Adventure image' },
  overlayOpacity: { type: Number, default: 0.35 },
  overlayColorHex: { type: String, default: '#03291F' },
  ctas: { type: Array, default: () => [] },
  ariaLabel: { type: String, default: 'Hero: main' }
})

const emit = defineEmits(['cta-click'])

// fallback Unsplash (adventure) if no image passed
const unsplashFallback = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80'

// reactive src so we can swap to fallback on error
const imageSrc = ref(props.image || unsplashFallback)

// provide a nice alt computed fallback
const imageAlt = computed(() => props.imageAlt || 'Adventure image')

// compute title as HTML-safe passthrough (component intentionally supports HTML)
const titleHtml = computed(() => props.title || '')

// simple gradient overlay for image (fades to transparent)
const gradientOverlay = computed(() => {
  // convert hex to rgba with overlayOpacity
  const hex = props.overlayColorHex.replace('#', '')
  const r = parseInt(hex.substring(0, 2), 16) || 3
  const g = parseInt(hex.substring(2, 4), 16) || 41
  const b = parseInt(hex.substring(4, 6), 16) || 31
  const alpha = props.overlayOpacity
  return `linear-gradient(180deg, rgba(${r}, ${g}, ${b}, ${alpha}) 0%, rgba(0,0,0,0) 60%)`
})

function onImgError() {
  if (imageSrc.value !== unsplashFallback) {
    imageSrc.value = unsplashFallback
  }
}

/* CTA style helper */
function ctaClasses(variant = 'primary') {
  if (variant === 'secondary') {
    return 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
  }
  if (variant === 'ghost') {
    return 'bg-transparent text-white/90 border border-white/10 hover:bg-white/5'
  }
  return 'bg-emerald-500 text-white hover:bg-emerald-600'
}
</script>

<style scoped>
/* ensure section has a minimum visual presence */
section { /* min height to feel like a hero */
  min-height: 48vh;
}
@media (min-width: 1024px) {
  section { min-height: 56vh; }
}
</style>