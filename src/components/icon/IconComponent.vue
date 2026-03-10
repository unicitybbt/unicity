<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  direction: {
    type: String,
    default: null
  },
  shadow: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
  <div class="icon-wrap">
    <i
      class="icon"
      :class="`icon-name-${props.name}`"
      :style="{ transform: props.direction ? `rotate(${props.direction}deg)` : '' }"
    />
  </div>
</template>

<style lang="scss" scoped>
@use 'sass:math';
@use 'sass:list';
// $pathInfo: (이름: (x, y, width, height))
$sprite-size: 520;
$icon-native: 52;
$icon-horizontal-count: 10; // math.div($sprite-size, $icon-native); 분자 / 분모
$pathInfo: (
  "arrow": (0, 0),
  "home": (52, 0),
  "user": (104, 104)
);
@function precision-round($number) {
  @return math.div(math.round($number * 100), 100);
}
.icon-wrap {
  width: 100%;
  aspect-ratio: 1 / 1;
  i.icon {
    display: block;
    width: 100%;
    height: 100%;
    background-image: url("@/assets/icons/icon-sprite.svg");
    background-repeat: no-repeat;
    background-size: ($icon-horizontal-count * 100%) auto;
    @each $name, $values in $pathInfo {
      &.icon-name-#{$name} {
        $posX: list.nth($values, 1);
        $posY: list.nth($values, 2);

        $percX: 0%;
        @if $posX != 0 {
          $val: math.div($posX, ($sprite-size - $icon-native)) * 100;
          $percX: precision-round($val) * 1%;
        }

        $percY: 0%;
        @if $posY != 0 {
          $val: math.div($posY, ($sprite-size - $icon-native)) * 100;
          $percY: precision-round($val) * 1%;
        }
        background-position: $percX $percY;
      }
    }
  }
}
</style>
