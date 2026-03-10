<script setup>
const props = defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: ""
  }
});
</script>

<template>
  <div class="image-component">
    <div class="image-frame">
      <img :src="props.src" :alt="props.alt" />
    </div>
    <div v-if="props.alt" class="image-alt">{{ props.alt }}</div>
  </div>
</template>

<style lang="scss" scoped>
.image-component {
  .image-frame {
    border-radius: 8px;
    overflow: hidden;
    img {
      width: 100%;
      background: #f0f0f0;
      transition: all 0.3s ease;
      object-fit: cover;
    }
  }
  .image-alt {
    font-size: 16px;
    color: #666;
    text-align: center;
    margin-top: 8px;
  }
}
</style>
