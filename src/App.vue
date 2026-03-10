<script setup>
import { h, ref} from 'vue';
import { usePopupStore } from '@/stores/popup';
import { PopupComponent } from '@/components/popup';
import Headers from '@/features/Headers.vue';
import Footers from '@/features/Footers.vue';
import Navs from './features/Navs.vue';
import Intro from './features/Intro.vue';
import NotiPopup from './features/NotiPopup.vue';

const popupStore = usePopupStore();
const renderPopups = () => {
  return popupStore.getPopups.map((popup) =>
    h(PopupComponent, {
      key: popup.id,
      id: popup.id,
      type: popup.type,
      content: popup.content,
      isOpen: popup.isOpen,
      useCheckbox: popup.useCheckbox
    })
  );
};
const notiRef = ref(null);
const introRef = ref(null);

</script>
<template>
  <Intro ref="introRef"/>
  <NotiPopup ref="notiRef" />
  <div v-if="!introRef?.isVisible" class="global-outer" :class="notiRef?.isVisible ? 'scrollLocked': ''">
    <div class="global-contaner">
      <Headers />
      <Navs />
      <div class="contents">
        <RouterView />
      </div>
      <Footers />
    </div>
  </div>
  <component :is="renderPopups" />
</template>
