// composables/usePageSeo.js
import { useRuntimeConfig, useSeoMeta } from '#app'
import { computed, watchEffect, unref, isRef } from 'vue'

export function usePageSeo(payload) {
  const cfg = useRuntimeConfig()
  const base = cfg.public.siteUrl || 'https://iatta.or.id'

  // normalize image -> always return absolute url
  function normalizeImage(img) {
    const raw = unref(img)
    if (!raw) return `${base}/meta/og-image.png`
    // trim whitespace
    const s = String(raw).trim()
    if (!s) return `${base}/meta/og-image.png`
    if (/^https?:\/\//i.test(s)) return s
    // ensure leading slash
    return s.startsWith('/') ? `${base}${s}` : `${base}/${s}`
  }

  const meta = computed(() => {
    // support payload being a ref or plain object
    const p = isRef(payload) ? unref(payload) : payload

    if (!p) {
      // fallback default
      const img = normalizeImage(undefined)
      return {
        title: 'IATTA – Indonesia Adventure Travel Trade Association',
        description:
          'Menjadikan destinasi utama wisata petualangan dunia yang berkualitas, berkelanjutan dan berdaya saing global.',
        canonical: base,
        og: {
          title: 'IATTA – Indonesia Adventure Travel Trade Association',
          description:
            'Menjadikan destinasi utama wisata petualangan dunia yang berkualitas, berkelanjutan dan berdaya saing global.',
          url: base,
          image: img,
          type: 'website',
          imageWidth: 1200,
          imageHeight: 630,
        },
        // twitter block
        twitter: {
          card: 'summary_large_image',
          title: 'IATTA – Indonesia Adventure Travel Trade Association',
          description:
            'Menjadikan destinasi utama wisata petualangan dunia yang berkualitas, berkelanjutan dan berdaya saing global.',
          image: img,
        },
      }
    }

    const canonical = p.path ? `${base}${p.path}` : base
    const img = normalizeImage(p.image)

    return {
      title: p.title || 'IATTA – Indonesia Adventure Travel Trade Association',
      description:
        p.description ||
        'Menjadikan destinasi utama wisata petualangan dunia yang berkualitas, berkelanjutan dan berdaya saing global.',
      canonical,
      og: {
        title: p.title || 'IATTA – Indonesia Adventure Travel Trade Association',
        description: p.description,
        url: canonical,
        image: img,
        type: p.type || 'article',
        imageWidth: p.imageWidth || 1200,
        imageHeight: p.imageHeight || 630,
        // optional: add image:type if you know it
        // imageType: 'image/png'
      },
      twitter: {
        card: 'summary_large_image',
        title: p.title,
        description: p.description,
        image: img,
      },
    }
  })

  // apply ke <head> secara reaktif; watchEffect memastikan useSeoMeta dipanggil ulang
  watchEffect(() => {
    useSeoMeta(meta.value)
  })

  return { meta }
}