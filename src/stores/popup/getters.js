import { computed } from 'vue';

export const getters = (popupState) => ({
  getPopups: computed(() => popupState.popups),
  getPopupById: (id) => popupState.popups.find(popup => popup.id === id)
});