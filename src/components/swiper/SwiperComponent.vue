<script setup>
// Swiper Vue 컴포넌트 및 모듈 가져오기
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Swiper 스타일 가져오기 (필요한 모듈별로 추가)
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// Props 정의
const props = defineProps({
  items: {
    type: Array,
    required: true,
    default: () => []
  }
});

// 사용할 모듈 등록
const modules = [Navigation, Pagination, Autoplay];
</script>

<template>
  <div class="slider-container">
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="0"
      :navigation="false"
      :pagination="{ clickable: true }"
      :autoplay="{ delay: 3000 }"
      class="my-swiper"
    >
      <swiper-slide v-for="(item, index) in props.items" :key="index">
        <div class="slide-image">
          <img :src="item.image" :alt="item.title" />
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style lang="scss" scoped>
.slider-container {
  width: 100%;
}
.my-swiper {
  :deep(.swiper-pagination) {
    position: relative;
    width: 100%;
    text-align: center;
    padding: 8px 0;
    font-size: 0;
    .swiper-pagination-bullet {
      display: inline-block;
      vertical-align: middle;
      width: 10px;
      height: 10px;
      background-color: #aaa;
      border-radius: 100%;
      margin: 0 4px;
      &.swiper-pagination-bullet-active {
        background-color: var(--common-font-color-highlight);
      }
    }
  }
}

.slide-image {
  width: 100%;
  aspect-ratio: 1 / 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f4f4f4;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

/* 네비게이션 버튼 색상 커스텀 예시 */
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: var(--common-font-color-highlight);
}
</style>