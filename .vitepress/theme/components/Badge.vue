<template>
  <span :class="[ 'badge', type ]">
    <slot></slot>
  </span>
</template>

<script setup lang="ts">
import { ref } from 'vue';

let type = ref('tip');
</script>