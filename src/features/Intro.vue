<script setup>
import { ref, onMounted } from 'vue';
import introLogo from '@images/intro/logo.png';
const isVisible = ref(false); // 인트로 표시 여부
const isFading = ref(false);  // 페이드 아웃 애니메이션 시작 여부
const isActive = ref(false); // 인트로 활성화 여부
const INTRO_KEY = 'hide_intro_until';
const DAY_IN_MS = 24 * 60 * 60 * 1000; // 24시간 (밀리초)

// 인트로를 닫고 로컬스토리지에 시간 저장하는 함수
const closeIntro = () => {
  isFading.value = true;

  // 페이드 아웃 애니메이션 시간(2s) 후에 완전히 제거
  setTimeout(() => {
    isVisible.value = false;
    const expiryDate = new Date().getTime() + DAY_IN_MS;
    localStorage.setItem(INTRO_KEY, expiryDate.toString());
  }, 2000);
};

onMounted(() => {
  // 인트로 활성화
  isActive.value = true;

  const hiddenUntil = localStorage.getItem(INTRO_KEY);
  const now = new Date().getTime();

  // 저장된 시간이 없거나, 현재 시간이 저장된 만료 시간보다 크면 보여줌
  if (!hiddenUntil || now > parseInt(hiddenUntil)) {
  // if (true) {
    isVisible.value = true;


    // 3초 후에 자동으로 닫기 로직 실행
    setTimeout(() => {
      if (isVisible.value) closeIntro();
    }, 3000);
  }
});

defineExpose({
  isVisible
});
</script>
<template>
  <div
    v-if="isVisible"
    class="intro-section"
    :class="{ 'fade-out': isFading }"
  >
    <div class="h-dimm"></div>
    <div class="h-container h-full-height">
      <div class="h-row h-row-direction-column h-row-justify-center h-row-gap-40 h-full-height">
        <div class="h-col h-col-12 col-logo isActive delay-1">
          <img :src="introLogo" alt="unicity" />
        </div>
        <div class="h-col h-col-12 col-text isActive delay-2">2026 UNICITY INTERNATIONAL<br />BIOS LIFE LEADERSHIP TRIP<br />IN SAPPORO</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@keyframes fadeIn {
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.intro-section {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('@images/intro/bg.jpg');
  background-size: cover;
  background-position: center;
  transition: opacity 2s ease-in-out;
  opacity: 1;
  z-index: 1000000;

  &.fade-out {
    opacity: 0;
    pointer-events: none; /* 클릭 방지 */
  }
}
.isActive {
  opacity: 0;
  animation: fadeIn 1s forwards;
  &.delay-1 {
    animation-delay: 0.5s;
  }
  &.delay-2 {
    animation-delay: 1.5s;
  }
  &.delay-3 {
    animation-delay: 2.5s;
  }
}
.col-logo {
  img {
    width: 80%;
    max-width: 580px;;
  }
  text-align: center;
}
.col-text {
  font-size: clamp(2.4rem, 2.8vw, 4.4rem);
  font-weight: bold;
  color: #fff;
  text-align: center;
}
.col-skip {
  text-align: center;
  button {
    font-size: 20px;
    color: #fff;
    padding: 10px 20px;
    border: 1px solid #fff;
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0);
    cursor: pointer;
    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
      transition: background-color 0.3s ease;
    }
  }
}
</style>
