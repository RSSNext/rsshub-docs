<template>
  <div class="sponsors-component">
    <div class="container">
      <div class="header">
        <div class="message">RSSHub is the world's largest RSS nework, collectively brought by contributors around the globe.</div>
      </div>
      <div class="sponsors">
        <img alt="Contributors" src="https://camo.githubusercontent.com/c2b516b800e3976ee2efca1244fc373236547c15fd92000d1ef727ea86b72847/68747470733a2f2f6f70656e636f6c6c6563746976652e636f6d2f5253534875622f636f6e7472696275746f72732e7376673f77696474683d383930" />
        <img alt="Sponsors" src="https://raw.githubusercontent.com/DIYgod/sponsors/main/sponsors.simple.svg" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

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
