<template>
  <div class="sponsors-component">
    <div class="container">
      <div class="header">
        <div class="message">
          RSSHub is the world's largest RSS nework, collectively brought by contributors around the globe.
        </div>
      </div>
      <div class="sponsors">
        <object type="image/svg+xml" data="https://opencollective.com/RSSHub/contributors.svg?width=1000"></object>
        <img alt="Sponsors" src="https://raw.githubusercontent.com/DIYgod/sponsors/main/sponsors.simple.svg" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.sponsors-component {
  border-top: 1px solid var(--vp-c-gutter);
  margin: 24px 0;
  padding: 0 64px;
}

.container {
  margin: 0 auto;
  max-width: 1000px;
}

.header {
  color: var(--vp-c-text-2);
}

.message {
  margin: 0 auto;
  padding-top: 10px;
  text-align: center;
  line-height: 24px;
  font-size: 16px;
  font-weight: 500;
}

.sponsors {
  padding-top: 32px;
}

img {
  display: block;
  margin: 0 auto;
  pointer-events: none;
}
</style>
