<script setup>
import { ref, getCurrentInstance, computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const props = defineProps({
  content: {
    type: Object,
    default: () => {}
  },
  useCheckbox: {
    type: Boolean,
    default: false
  }
});

const { proxy } = getCurrentInstance();
const route = useRoute();
const router = useRouter();
const emit = defineEmits(['handlePopupClose']);
const isChecked = ref(false);
const handlePopupConfirm = async () => {
  emit('handlePopupClose');
};
const handleRetry = async () => {
  emit('handlePopupClose');
}

</script>
<template>
  <div class="popup default">
    <div class="popup-inner">
      <div class="popup-header">
        <div class="tx-title">
          {{ props.content.title }}
        </div>
      </div>
      <div class="popup-contents">
        <ScrollComponent :padding="'0 50px'" :use-shadow="true">
          <div class="tx-description"><pre>{{ props.content.description }}</pre></div>
        </ScrollComponent>
      </div>
      <div v-if="props.useCheckbox" class="popup-checkbox">
        <Checkbox :label="'다시 보지 않기'" v-model="isChecked" />
      </div>
      <div class="popup-footer">
        <div class="btn-wrap">
          <button v-if="props.content.name === 'dataReceiveError'" type="button" class="btn btn-confirm" @click="handleRetry">다시 시도하기</button>
          <button type="button" class="btn btn-confirm" @click="handlePopupConfirm">이전</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.popup-close {
  width: 40px;
  height: 40px;
  background-color: hotpink;
}
.popup-contents {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  align-self: stretch;
  justify-content: flex-start;
  margin: 0 -50px;
  text-align: center;
  .tx-description {
    flex: 1;
    font-size: 40px;
    color: var(--popup-font-color);
    overflow: hidden;
  }
}
</style>
