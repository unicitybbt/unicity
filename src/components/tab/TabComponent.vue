<script setup>
import { nextTick, ref, watch } from 'vue';
const props = defineProps({
  tabmenu: {
    type: Array,
    required: true,
  },
  selectedId: {
    type: [Number, String],
    default: "0"
  },
  scrollEnable: {
    type: Boolean,
    default: false
  }
});
const emit = defineEmits(['handleSelectTab']);
const tabList = ref(null);
const canScrollLeft = ref(false);
const canScrollRight = ref(false);

const handleSelectTab = (tabId) => {
  emit("handleSelectTab", tabId);
};

const handleSelectTabScroll = () => {
  const findIndex = props.tabmenu.findIndex(d => d.tabId === props.selectedId);
  const ul = tabList.value;
  const li = ul.querySelectorAll('li')[findIndex];

  if (!ul || !li) return;

  const liCenter = li.offsetLeft + li.offsetWidth / 2;
  const ulHalfWidth = ul.clientWidth / 2;

  const scrollLeft = liCenter - ulHalfWidth;

  ul.scrollTo({
    left: scrollLeft,
    behavior: 'smooth'
  })
}

const handleTabScroll = () => {
  updateScrollStatus();
}

const updateScrollStatus = () => {
  if (!props.scrollEnable) return;
  const ul = tabList.value;
  if (!ul) return;
  const gap = 50;

  canScrollLeft.value = ul.scrollLeft > gap;
  canScrollRight.value = ul.scrollLeft + ul.clientWidth + gap < ul.scrollWidth;
}

// 초기진입시 ul.clientWidth, ul.scrollWidth가 같아 작동안됨으로 해당영역 사이즈 감지하여 작동하게 수정
let tabResizeObserver = null;
nextTick(() => {
  if (props.scrollEnable) {
    tabResizeObserver = new ResizeObserver(updateScrollStatus);
    tabResizeObserver.observe(tabList.value);
  }
})

watch(() => props.selectedId, (newVal) => {
  if (newVal) {
    handleSelectTabScroll();
  }
})

defineExpose({
  tabList,
  canScrollLeft,
  canScrollRight,
});

</script>
<template>
  <div class="tab-component" :class="{'horizontal-scroll-enable': scrollEnable}" >
    <div class="tab-menu">
      <ul
        ref="tabList"
        @scroll="handleTabScroll"
      >
        <li
          v-for="(tab) in props.tabmenu"
          :key="tab.tabId"
          :class="['tab-name', { active: tab.tabId === props.selectedId }]"
          @click="handleSelectTab(tab.tabId)"
        >
          {{ tab.tabName }}
        </li>
      </ul>
      <div v-if="scrollEnable" class="tabMenuDimm dimmLeft" :class="{active: canScrollLeft}" />
      <div v-if="scrollEnable" class="tabMenuDimm dimmRight" :class="{active: canScrollRight}" />
    </div>
  </div>
</template>
<style lang="scss" scoped >
.tab-component {
  &.horizontal-scroll-enable {
    width: 100%;
    .tab-menu {
      position: relative;
      ul {
        overflow-x: scroll;
      }
      .tabMenuDimm {
        position: absolute;
        top: 0;
        width: 15%;
        height: 100%;
        background-image: linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0));
        transition: opacity .4s;
        opacity: 0;
        pointer-events: none;
        &.dimmLeft {
          left: 0;
          background-image: linear-gradient(to right, var(--app-bg-color), rgba(0,0,0,0));
        }
        &.dimmRight {
          right: 0;
          background-image: linear-gradient(to left, var(--app-bg-color), rgba(0,0,0,0));

        }
        &.dimmLeft.active,
        &.dimmRight.active {
          opacity: 1;
        }
      }
    }
  }
}
</style>