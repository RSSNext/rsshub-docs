<template>
  <aside class="VPDocAsideCarbonAds FoloAsideAd">
    <div class="folo-card">
      <div class="folo-card__halo"></div>
      <div class="folo-card__grid"></div>

      <div class="folo-card__header">
        <div class="folo-brand" aria-label="Folo">
          <svg class="folo-brand__icon" viewBox="0 0 24 24" role="img" aria-hidden="true">
            <title>Folo</title>
            <path
              fill="#FF5C00"
              d="M5.382 0h13.236A5.37 5.37 0 0 1 24 5.383v13.235A5.37 5.37 0 0 1 18.618 24H5.382A5.37 5.37 0 0 1 0 18.618V5.383A5.37 5.37 0 0 1 5.382.001Z"
            />
            <path
              fill="#fff"
              d="M13.269 17.31a1.813 1.813 0 1 0-3.626.002 1.813 1.813 0 0 0 3.626-.002m-.535-6.527H7.213a1.813 1.813 0 1 0 0 3.624h5.521a1.813 1.813 0 1 0 0-3.624m4.417-4.712H8.87a1.813 1.813 0 1 0 0 3.625h8.283a1.813 1.813 0 1 0 0-3.624z"
            />
          </svg>
          <span class="folo-brand__name">Folo</span>
        </div>
      </div>

      <div class="folo-card__content">
        <h3 class="folo-card__title">{{ copy.title }}</h3>
        <p class="folo-card__description">{{ copy.description }}</p>
        <p class="folo-card__footnote">{{ copy.footnote }}</p>
      </div>

      <div class="folo-card__actions">
        <a class="folo-button folo-button--primary" href="https://folo.is/" target="_blank" rel="noopener noreferrer">
          {{ copy.primaryAction }}
        </a>
        <a class="folo-button folo-button--secondary" href="https://github.com/RSSNext/Folo" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { useLocale } from '../composables/useLocale';

const { localized } = useLocale();

const copy = computed(() => ({
  title: localized({
    en: 'The AI RSS Reader',
    'zh-Hans': 'AI RSS 阅读器',
  }),
  description: localized({
    en: 'Built-in, more reliable RSSHub instances for cleaner reading and smarter discovery.',
    'zh-Hans': '内置更稳定的 RSSHub 实例，订阅发现与阅读体验都更省心。',
  }),
  footnote: localized({
    en: 'Built for deep, noise-free reading with contextual AI.',
    'zh-Hans': '为深度、去噪的上下文 AI 阅读而生。',
  }),
  primaryAction: localized({
    en: 'Try Folo',
    'zh-Hans': '体验 Folo',
  }),
}));
</script>

<style scoped>
.FoloAsideAd {
  width: 100%;
}

.folo-card {
  --folo-accent: #ff5c00;
  position: relative;
  overflow: hidden;
  padding: 18px;
  border: 1px solid rgba(255, 92, 0, 0.16);
  border-radius: 24px;
  background:
    radial-gradient(circle at top left, rgba(255, 92, 0, 0.22), transparent 36%),
    linear-gradient(160deg, rgba(255, 255, 255, 0.96), rgba(255, 247, 242, 0.98));
  box-shadow:
    0 18px 44px rgba(17, 24, 39, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.9);
}

.folo-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.44), transparent 34%, rgba(255, 92, 0, 0.04));
  pointer-events: none;
}

.folo-card__halo {
  position: absolute;
  right: -42px;
  top: -42px;
  width: 132px;
  height: 132px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 92, 0, 0.26), rgba(255, 92, 0, 0));
  filter: blur(6px);
  pointer-events: none;
}

.folo-card__grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 92, 0, 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 92, 0, 0.06) 1px, transparent 1px);
  background-size: 18px 18px;
  mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0.34), transparent 55%);
  pointer-events: none;
}

.folo-card__header,
.folo-card__content,
.folo-card__actions {
  position: relative;
  z-index: 1;
}

.folo-card__header {
  display: flex;
  align-items: center;
}

.folo-brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
}

.folo-brand__icon {
  width: 28px;
  height: 28px;
  flex: none;
  border-radius: 8px;
  box-shadow: 0 10px 24px rgba(255, 92, 0, 0.24);
}

.folo-brand__name {
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #111827;
}

.folo-card__content {
  margin-top: 16px;
}

.folo-card__title {
  margin: 0;
  color: #111827;
  font-size: 21px;
  line-height: 1.1;
  letter-spacing: -0.035em;
  font-weight: 700;
  white-space: nowrap;
}

.folo-card__description {
  margin: 10px 0 0;
  color: rgba(17, 24, 39, 0.72);
  font-size: 13px;
  line-height: 1.55;
}

.folo-card__footnote {
  margin: 10px 0 0;
  color: rgba(17, 24, 39, 0.54);
  font-size: 11px;
  line-height: 1.55;
}

.folo-card__actions {
  display: flex;
  gap: 10px;
  margin-top: 18px;
}

.folo-button {
  display: inline-flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  min-height: 38px;
  padding: 0 12px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
  text-decoration: none;
  transition:
    transform 0.18s ease,
    box-shadow 0.18s ease,
    border-color 0.18s ease,
    background-color 0.18s ease,
    color 0.18s ease;
}

.folo-button:hover {
  transform: translateY(-1px);
}

.folo-button--primary {
  background: linear-gradient(135deg, #ff5c00, #ff8743);
  color: #fff;
  box-shadow: 0 12px 28px rgba(255, 92, 0, 0.28);
}

.folo-button--primary:hover {
  box-shadow: 0 16px 36px rgba(255, 92, 0, 0.32);
}

.folo-button--secondary {
  border: 1px solid rgba(17, 24, 39, 0.1);
  background: rgba(255, 255, 255, 0.72);
  color: #111827;
}

.folo-button--secondary:hover {
  border-color: rgba(255, 92, 0, 0.24);
  color: #9a3412;
}

:global(.dark) .folo-card {
  border-color: rgba(255, 92, 0, 0.22);
  background:
    radial-gradient(circle at top left, rgba(255, 92, 0, 0.28), transparent 38%),
    linear-gradient(160deg, rgba(21, 24, 33, 0.98), rgba(16, 18, 26, 0.98));
  box-shadow:
    0 18px 44px rgba(0, 0, 0, 0.34),
    inset 0 1px 0 rgba(255, 255, 255, 0.03);
}

:global(.dark) .folo-card::before {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.06), transparent 34%, rgba(255, 92, 0, 0.08));
}

:global(.dark) .folo-brand__name,
:global(.dark) .folo-card__title {
  color: rgba(255, 255, 255, 0.92);
}

:global(.dark) .folo-card__description {
  color: rgba(255, 255, 255, 0.72);
}

:global(.dark) .folo-card__footnote {
  color: rgba(255, 255, 255, 0.52);
}

:global(.dark) .folo-button--secondary {
  border-color: rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.04);
  color: rgba(255, 255, 255, 0.86);
}

:global(.dark) .folo-button--secondary:hover {
  border-color: rgba(255, 92, 0, 0.34);
  color: #ffb089;
}
</style>
