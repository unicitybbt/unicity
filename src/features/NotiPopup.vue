<script setup>
import { ref, onMounted, watch } from 'vue';
import { scrollLock } from '@/js/utils/utils';
const isVisible = ref(false);
const NOTI_POPUP_KEY = 'hide_noti_popup';

const closePopupToday = () => {
  const expiryDate = new Date().getTime() + (24 * 60 * 60 * 1000)
  localStorage.setItem(NOTI_POPUP_KEY, expiryDate.toString())
  closePopup();
};

const closePopup = () => {
  isVisible.value = false;
};

onMounted(() => {
  const hiddenUntil = localStorage.getItem(NOTI_POPUP_KEY);
  const now = new Date().getTime();

  if (!hiddenUntil || now > parseInt(hiddenUntil)) {
    isVisible.value = true;
  }
});

watch(isVisible, (newValue) => {
  scrollLock(newValue);
});

</script>
<template>
  <div
    v-if="isVisible"
    class="popup-component noti"
  >
    <div class="h-dimm"></div>
    <div class="popup">
      <div class="popup-contents"><img src="../assets/images/noti.png" alt="unicity" class="img-noti" /></div>
      <div class="popup-footer">
        <button @click="closePopupToday">오늘 하루동안 보지 않기</button>
        <button @click="closePopup">닫기</button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.noti {
  .popup-contents {
    max-width: 100%;
    .img-noti {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .popup-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .checkbox-wrap {
      display: flex;
      align-items: center;
      gap: 8px;

      input[type="checkbox"] {
        width: 16px;
        height: 16px;
      }

      label {
        font-size: 14px;
        color: #333;
      }
    }

    button {
      padding: 8px 16px;
      color: #000;
      cursor: pointer;
      &:hover {
        color: #C2335F;
      }
    }
  }
}


</style>
