<script setup>
import { usePopupStore } from '@/stores/popup';
import DefaultPopup from './DefaultPopup.vue';
import AlertPopup from './AlertPopup.vue';
import QrPopup from './QrPopup.vue';

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'default'
  },
  content: {
    type: Object,
    default: () => {}
  },
  useCheckbox: {
    type: Boolean,
    default: false
  },
  isOpen: {
    type: Boolean,
    default: true
  }
});
const popupStore = usePopupStore();
const popupMap = {
  default: DefaultPopup,
  alert: AlertPopup,
  qr: QrPopup
};

const handlePopupClose = () => {
  popupStore.closePopup(props.id);
};
</script>
<template>
  <teleport to=".global-outer">
    <div v-if="isOpen" class="popup-component" :class="[props.content?.name ? props.content.name : '', props.type]">
      <div class="popup-dimm"></div>
      <component
        :is="popupMap[type]"
        :content="props.content"
        :useCheckbox="props.useCheckbox"
        @handlePopupClose="handlePopupClose"
      />
    </div>
  </teleport>
</template>


