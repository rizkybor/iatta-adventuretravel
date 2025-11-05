<template>
  <section
    :class="[
      'relative overflow-hidden',
      fullBleed ? 'w-full' : 'w-full'
    ]"
    role="region"
    :aria-label="ariaLabel"
  >
    <!-- background image -->
    <div
      class="absolute inset-0 bg-center bg-cover"
      :style="bgStyle"
      aria-hidden="true"
    ></div>

    <!-- optional dark overlay -->
    <div
      class="absolute inset-0"
      :style="{ backgroundColor: overlayColor }"
      aria-hidden="true"
    ></div>

    <!-- content -->
    <div class="relative z-10">
      <div :class="contentWrapperClass">
        <div class="text-center max-w-3xl mx-auto">
          <p v-if="kicker" class="mb-3 text-sm font-semibold text-emerald-100 uppercase tracking-wider">
            {{ kicker }}
          </p>

          <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-white drop-shadow-sm">
            <span v-html="titleHtml"></span>
          </h1>

          <p v-if="subtitle" class="mt-4 text-lg sm:text-xl text-emerald-100">
            {{ subtitle }}
          </p>

          <!-- CTA group -->
          <div v-if="ctas && ctas.length" class="mt-8 flex flex-wrap justify-center gap-3">
            <component
              v-for="(c, i) in ctas"
              :is="c.as || 'NuxtLink'"
              :key="i"
              :to="c.to"
              :href="c.href"
              class="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-medium transition transform active:scale-[.98]"
              :class="ctaClasses(c.variant)"
              @click="$emit('cta-click', c)"
              v-bind="c.attrs || {}"
            >
              <span v-if="c.icon" class="text-xl leading-none">{{ c.icon }}</span>
              <span>{{ c.label }}</span>
            </component>
          </div>

          <!-- default slot for extra content (e.g. small search bar, badges) -->
          <div class="mt-6" v-if="$slots.default">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useRuntimeConfig } from '#imports'

/**
 * Props
 * - title: string | HTML (will be rendered as HTML via v-html)
 * - subtitle: string
 * - kicker: small label above title
 * - image: url string
 * - overlayOpacity: number 0..1 (default 0.35)
 * - overlayColorHex: color hex for overlay, defaults to black
 * - ctas: array of { label, to, href, variant, icon, as, attrs }
 * - fullBleed: whether hero should visually occupy full width (kept for future)
 * - ariaLabel: accessible label
 */
const props = defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  kicker: { type: String, default: '' },
  image: { type: String, default: '' },
  overlayOpacity: { type: Number, default: 0.36 },
  overlayColorHex: { type: String, default: '#052e16' }, // dark green-ish
  ctas: { type: Array, default: () => [] },
  fullBleed: { type: Boolean, default: true },
  ariaLabel: { type: String, default: 'Hero section' },
  contentWide: { type: Boolean, default: false }
})

const emit = defineEmits(['cta-click'])

const titleHtml = computed(() => props.title || '')
const bgStyle = computed(() => {
  return props.image
    ? { backgroundImage: `url('${props.image}')` }
    : { backgroundColor: 'transparent' }
})

const overlayColor = computed(() => {
  // rgba from hex + opacity
  const hex = props.overlayColorHex.replace('#', '')
  const r = parseInt(hex.substring(0, 2), 16) || 5
  const g = parseInt(hex.substring(2, 4), 16) || 46
  const b = parseInt(hex.substring(4, 6), 16) || 22
  return `rgba(${r}, ${g}, ${b}, ${props.overlayOpacity})`
})

const contentWrapperClass = computed(() =>
  props.contentWide
    ? 'px-6 py-24'
    : 'px-4 sm:px-6 lg:px-8 py-20'
)

function ctaClasses(variant = 'primary') {
  if (variant === 'secondary') {
    return 'bg-white/10 text-white border border-white/30 hover:bg-white/20'
  }
  if (variant === 'ghost') {
    return 'bg-transparent text-white/90 border border-white/10 hover:bg-white/5'
  }
  // default primary
  return 'bg-white text-green-700 hover:shadow-lg'
}
</script>

<style scoped>
/* subtle gradient overlay fallback if no image */
section { min-height: 52vh; display: block; }
@media (min-width: 1024px) {
  section { min-height: 64vh; }
}
</style>