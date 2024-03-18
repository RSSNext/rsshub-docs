<template>
  <div class="sponsors-component">
    <div class="container">
      <div class="header">
        <div class="love">
          <span class="vpi-heart icon"></span>
        </div>
        <div class="message">RSSHub is free and open source, made possible by wonderful sponsors.</div>
      </div>
      <div class="sponsors">
        <a target="_blank" href="https://github.com/DIYgod/sponsors">
          <img src="https://raw.githubusercontent.com/DIYgod/sponsors/main/sponsors.wide.svg" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.sponsors-component {
  border-top: 1px solid var(--vp-c-gutter);
  padding-top: 88px !important;
  margin: 128px 0;
  padding: 0 64px;
}

.container {
  margin: 0 auto;
  max-width: 1000px;
}

.header {
  color: var(--vp-c-text-2);
}

.love {
  margin: 0 auto;
  width: fit-content;
  font-size: 28px;
}

.icon {
  display: inline-block;
}

.message {
  margin: 0 auto;
  padding-top: 10px;
  max-width: 320px;
  text-align: center;
  line-height: 24px;
  font-size: 16px;
  font-weight: 500;
}

.sponsors {
  padding-top: 32px;
}
</style>