<script setup>
import { ref } from "vue";
import { Checkbox } from "@/components/checkbox";

const props = defineProps({
  content: {
    type: Object,
    default: () => {}
  },
  useCheckbox: {
    type: Object,
    default: () => {}
  }
});

const emit = defineEmits(['handlePopupClose']);
const handlePopupClose = () => {
  emit('handlePopupClose');
};

const isChecked = ref(false);

</script>
<template>
  <div class="popup default">
    <div class="popup-inner">
      <div class="popup-header">
        <div class="tx-title">
          {{ content.title }}
        </div>
      </div>
      <div class="popup-contents">
        <ScrollComponent :padding="'0 50px'" :use-shadow="true">
          <div class="tx-description"><pre>{{ content.description }}</pre></div>
        </ScrollComponent>
      </div>
      <div v-if="props.useCheckbox" class="popup-checkbox">
        <Checkbox :label="'테스트 체크박스'" v-model="isChecked" />
      </div>
      <div class="popup-footer">
        <div class="btn-wrap">
          <button type="button" class="btn btn-confirm">확인</button>
          <button type="button" class="btn btn-cancel" @click="handlePopupClose">취소</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.popup-contents {
  padding-top: 40px;
  margin-bottom: 30px;
  .tx-description {
    font-size: 28px;
  }
}
</style>
