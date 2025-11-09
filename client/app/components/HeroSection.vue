<template>
  <section
    ref="root"
    class="w-full text-white py-10"
    :style="sectionStyleWithVars"
    :aria-label="ariaLabel"
    role="region"
  >
    <!-- cursor object: shining circle that follows cursor -->
    <div
      v-if="enableCursorHighlight && !prefersReducedMotion"
      aria-hidden="true"
      :class="['cursor-object', cursorShapeClass]"
    />

    <!-- decorative subtle overlay (keeps previous highlight selectable) -->
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
      :class="{ 'opacity-100': highlightVisible, 'opacity-0': !highlightVisible }"
      style="mix-blend-mode: overlay;"
    />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 py-16">
        <!-- LEFT: Text -->
        <div class="relative z-10">
          <p v-if="kicker" class="inline-block text-sm font-semibold text-emerald-300 uppercase tracking-wide">
            {{ kicker }}
          </p>

          <h1
            class="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight"
            v-html="titleHtml"
          ></h1>

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
              style="cursor: pointer;"
              class="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold transition-transform active:scale-[.98] shadow-sm"
              :class="ctaClasses(c.variant)"
              @click="$emit('cta-click', c)"
              v-bind="c.attrs || {}"
            >
              <span v-if="c.icon" class="text-lg leading-none -ml-1">{{ c.icon }}</span>
              <span>{{ c.label }}</span>
            </component>
          </div>

          <!-- Optional slot for badges / small search -->
          <div v-if="$slots.default" class="mt-6">
            <slot />
          </div>
        </div>

        <!-- RIGHT: Image card -->
        <div class="relative w-full h-64 sm:h-auto lg:h-auto rounded-xl overflow-hidden shadow-2xl ring-1 ring-black/10 bg-white/5 backdrop-blur-sm">
          <img
            v-if="imageSrc"
            :src="imageSrc"
            :alt="imageAlt"
            loading="lazy"
            class="w-full h-full object-cover"
            @error="onImgError"
            ref="heroImg"
          />

          <div
            aria-hidden="true"
            class="absolute inset-0 pointer-events-none"
            :style="{
              background: 'linear-gradient(180deg, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0) 40%)'
            }"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref, onMounted, onBeforeUnmount } from 'vue'

/* ---------------------------
   Props
   --------------------------- */
const props = defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  kicker: { type: String, default: '' },
  image: { type: String, default: '' },
  imageAlt: { type: String, default: 'Hero image' },
  backgroundColorHex: { type: String, default: '#071428' },
  accentColorHex: { type: String, default: '#06b6d4' }, // circle color
  accentOpacity: { type: Number, default: 0.18 }, // used for halo
  useGradient: { type: Boolean, default: true },
  enableCursorHighlight: { type: Boolean, default: true },
  cursorObjectSize: { type: Number, default: 96 }, // px diameter
  cursorPulse: { type: Number, default: 1.08 }, // pulse scale
  cursorShape: { type: String, default: 'circle' }, // 'circle' expected
  ctas: { type: Array, default: () => [] },
  ariaLabel: { type: String, default: 'Hero: main' }
})

const emit = defineEmits(['cta-click'])

/* ---------------------------
   Image fallback + text
   --------------------------- */
const unsplashFallback = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80'

const imageSrc = ref(props.image || unsplashFallback)
const heroImg = ref(null)
function onImgError() {
  if (imageSrc.value !== unsplashFallback) imageSrc.value = unsplashFallback
}
const titleHtml = computed(() => props.title || '')

/* ---------------------------
   Background / gradient helpers
   --------------------------- */
function hexToRgb(hex) {
  const clean = (hex || '#000000').replace('#', '')
  const r = parseInt(clean.substring(0,2) || '00', 16)
  const g = parseInt(clean.substring(2,4) || '00', 16)
  const b = parseInt(clean.substring(4,6) || '00', 16)
  return { r, g, b }
}
function hexToRgba(hex, alpha=1) {
  const { r,g,b } = hexToRgb(hex)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}
function mixWithWhite(hex, factor=0.06) {
  const { r,g,b } = hexToRgb(hex)
  const nr = Math.round(r + (255 - r) * factor)
  const ng = Math.round(g + (255 - g) * factor)
  const nb = Math.round(b + (255 - b) * factor)
  return `rgb(${nr}, ${ng}, ${nb})`
}
const sectionStyle = computed(() => {
  const baseHex = props.backgroundColorHex || '#071428'
  const accentHex = props.accentColorHex || '#06b6d4'
  const accentRgba = hexToRgba(accentHex, props.accentOpacity)
  const baseTop = baseHex
  const baseBottom = mixWithWhite(baseHex, 0.06)
  if (!props.useGradient) {
    return { backgroundColor: baseHex, color: '#ffffff' }
  }
  const linear = `linear-gradient(180deg, ${baseTop} 0%, ${baseBottom} 100%)`
  const radial = `radial-gradient(600px 360px at 12% 22%, ${accentRgba}, transparent 28%)`
  const subtle = `linear-gradient(90deg, rgba(255,255,255,0.02) 0%, rgba(0,0,0,0.02) 100%)`
  return {
    backgroundImage: `${radial}, ${linear}, ${subtle}`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    color: '#ffffff',
  }
})

/* ---------------------------
   Cursor object logic (shining circle)
   --------------------------- */
const root = ref(null)
const highlightVisible = ref(false)
const prefersReducedMotion = (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) || false

// CSS variables to inject (x/y as percent, opacity, accent color, size, pulse)
const cursorVars = ref({
  '--cursor-x': '50%',
  '--cursor-y': '50%',
  '--cursor-opacity': '0',
  '--accent': hexToRgba(props.accentColorHex || '#06b6d4', props.accentOpacity || 0.18),
  '--cursor-size': `${props.cursorObjectSize}px`,
  '--cursor-pulse': String(props.cursorPulse)
})

const sectionStyleWithVars = computed(() => {
  return { ...sectionStyle.value, ...cursorVars.value }
})

let rafId = null
let lastEvent = null
let hideTimeout = null

function updateVarsFromEvent(e) {
  if (!root.value) return
  const rect = root.value.getBoundingClientRect()
  let clientX, clientY
  if (e.touches && e.touches[0]) {
    clientX = e.touches[0].clientX
    clientY = e.touches[0].clientY
  } else {
    clientX = e.clientX
    clientY = e.clientY
  }
  const xPct = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100))
  const yPct = Math.max(0, Math.min(100, ((clientY - rect.top) / rect.height) * 100))
  lastEvent = { xPct, yPct }
  scheduleRaf()
}

function scheduleRaf() {
  if (rafId !== null) return
  rafId = requestAnimationFrame(() => {
    rafId = null
    if (!lastEvent) return
    cursorVars.value['--cursor-x'] = `${lastEvent.xPct}%`
    cursorVars.value['--cursor-y'] = `${lastEvent.yPct}%`
    cursorVars.value['--cursor-opacity'] = '1'
    highlightVisible.value = true

    if (hideTimeout) clearTimeout(hideTimeout)
    hideTimeout = setTimeout(() => {
      cursorVars.value['--cursor-opacity'] = '0'
      highlightVisible.value = false
    }, 900)

    lastEvent = null
  })
}

function handleLeave() {
  if (hideTimeout) clearTimeout(hideTimeout)
  cursorVars.value['--cursor-opacity'] = '0'
  highlightVisible.value = false
}

function enableListeners() {
  if (!root.value) return
  root.value.addEventListener('mousemove', updateVarsFromEvent, { passive: true })
  root.value.addEventListener('touchmove', updateVarsFromEvent, { passive: true })
  root.value.addEventListener('mouseleave', handleLeave, { passive: true })
  root.value.addEventListener('touchend', handleLeave, { passive: true })
}

function disableListeners() {
  if (!root.value) return
  root.value.removeEventListener('mousemove', updateVarsFromEvent)
  root.value.removeEventListener('touchmove', updateVarsFromEvent)
  root.value.removeEventListener('mouseleave', handleLeave)
  root.value.removeEventListener('touchend', handleLeave)
}

onMounted(() => {
  if (props.enableCursorHighlight && !prefersReducedMotion) {
    enableListeners()
    cursorVars.value['--cursor-x'] = '50%'
    cursorVars.value['--cursor-y'] = '50%'
    cursorVars.value['--cursor-opacity'] = '0'
  }
})

onBeforeUnmount(() => {
  disableListeners()
  if (rafId) cancelAnimationFrame(rafId)
  if (hideTimeout) clearTimeout(hideTimeout)
})

/* CTA helper */
function ctaClasses(variant = 'primary') {
  if (variant === 'secondary') {
    return 'bg-white/6 text-white border border-white/12 hover:bg-white/10'
  }
  if (variant === 'ghost') {
    return 'bg-transparent text-white/90 border border-white/6 hover:bg-white/4'
  }
  return 'bg-emerald-400 text-slate-900 hover:bg-emerald-500'
}

const cursorShapeClass = computed(() => {
  // currently we only implement 'circle' shining model; keep hook for future shapes
  return props.cursorShape === 'circle' ? 'circle' : 'circle'
})
</script>

<style scoped>
section {
  min-height: 46vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
}

/* shining circle object */
.cursor-object {
  position: absolute;
  left: var(--cursor-x, 50%);
  top: var(--cursor-y, 50%);
  width: var(--cursor-size, 96px);
  height: var(--cursor-size, 96px);
  transform: translate(-50%, -50%) translateZ(0);
  pointer-events: none;
  z-index: 40; /* above content */
  mix-blend-mode: screen;
  opacity: var(--cursor-opacity, 0);
  transition: opacity 180ms ease, transform 140ms ease, left 120ms linear, top 120ms linear;
  will-change: transform, opacity;
}


/* brushy blurred circle (no white center) */
.cursor-object.circle {
  position: absolute;
  left: var(--cursor-x, 50%);
  top: var(--cursor-y, 50%);
  width: var(--cursor-size, 96px);
  height: var(--cursor-size, 96px);
  transform: translate(-50%, -50%) translateZ(0);
  pointer-events: none;
  z-index: 40;
  opacity: var(--cursor-opacity, 0);
  transition: opacity 160ms ease, transform 120ms ease, left 120ms linear, top 120ms linear;
  will-change: transform, opacity;

  background-repeat: no-repeat;
  background-size: 100% 100%;
  
  mix-blend-mode: screen;
  /* subtle depth */
  box-shadow: 0 10px 28px rgba(2,6,23,0.28);
  overflow: visible;
}

/* pseudo-element: blurred brush halo (big, soft) */
.cursor-object.circle::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  width: 220%;
  height: 220%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  pointer-events: none;
  background: radial-gradient(circle at 40% 38%,
    var(--accent-strong, rgba(6,182,212,0.36)) 0%,
    var(--accent, rgba(6,182,212,0.16)) 30%,
    rgba(6,182,212,0.08) 55%,
    transparent 85%);
  filter: blur(22px);
  opacity: 0.95;
  mix-blend-mode: screen;
}

/* pseudo-element: textured brush/edge for organic feeling (subtle) */
.cursor-object.circle::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  width: 160%;
  height: 160%;
  transform: translate(-50%, -50%) rotate(6deg);
  border-radius: 50%;
  pointer-events: none;
  background-image:
    radial-gradient(circle at 30% 30%, rgba(255,255,255,0.02) 0%, transparent 40%),
    radial-gradient(circle at 70% 70%, rgba(0,0,0,0.02) 0%, transparent 45%);
  filter: blur(8px) saturate(1.05);
  opacity: 0.75;
  mix-blend-mode: overlay;
}

/* responsive tweaks: scale down pseudo elements on small screens */
@media (max-width: 640px) {
  .cursor-object.circle { width: calc(var(--cursor-size, 96px) * 0.62); height: calc(var(--cursor-size, 96px) * 0.62); }
  .cursor-object.circle::before { width: 260%; height: 260%; filter: blur(16px); opacity: 0.9; }
  .cursor-object.circle::after { width: 200%; height: 200%; filter: blur(6px); opacity: 0.6; }
}

/* reduced motion: remove heavy blurs/animations */
@media (prefers-reduced-motion: reduce) {
  .cursor-object.circle,
  .cursor-object.circle::before,
  .cursor-object.circle::after {
    transition: none !important;
    animation: none !important;
    filter: none !important;
    display: block;
  }
  .cursor-object.circle::before,
  .cursor-object.circle::after { opacity: 0.6; filter: blur(4px); }
}


/* gentle pulse */
@keyframes cursor-pulse {
  0% { transform: translate(-50%, -50%) scale(1); opacity: var(--cursor-opacity, 1); }
  50% { transform: translate(-50%, -50%) scale(var(--cursor-pulse, 1.08)); opacity: calc(var(--cursor-opacity, 1) * 0.97); }
  100% { transform: translate(-50%, -50%) scale(1); opacity: var(--cursor-opacity, 1); }
}
.cursor-object.circle {
  animation: cursor-pulse 2200ms ease-in-out infinite;
}

/* responsive scaling on small screens */
@media (max-width: 640px) {
  .cursor-object {
    width: calc(var(--cursor-size, 96px) * 0.6);
    height: calc(var(--cursor-size, 96px) * 0.6);
  }
  .cursor-object.circle::after { width: 36%; height: 36%; top: 10%; left: 12%; }
}

/* hides for reduced motion users */
@media (prefers-reduced-motion: reduce) {
  .cursor-object, .cursor-object::before, .cursor-object::after { display: none !important; animation: none !important; }
}

/* improve text wrapping balance */
h1 { text-wrap: balance; }

@media (min-width: 1024px) {
  section { min-height: 54vh; }
}
</style>