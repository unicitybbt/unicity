<script setup>
const props = defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: ""
  },
  aspectRatio: {
    type: String,
    default: "4 / 3"
  }
});
</script>

<template>
  <div class="image-component" :style="`aspect-ratio: ${props.aspectRatio}`">
    <div class="image-frame">
      <img :src="props.src" :alt="props.alt" />
    </div>
    <div v-if="props.alt" class="image-alt">{{ props.alt }}</div>
  </div>
</template>
