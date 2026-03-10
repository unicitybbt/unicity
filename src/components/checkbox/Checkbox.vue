<script setup>
import { IconComponent } from "@/components/icon";

const props = defineProps({
  modelValue: {
    type: Boolean
  },
  label: {
    type: String,
    default: 'label'
  }
});
const emit = defineEmits();
const handleChange = (e) => {
  emit("update:modelValue", e.target.checked);
}
</script>

<template>
  <label class="input-checkbox-wrap">
    <input
      type="checkbox"
      :checked="modelValue"
      @change="handleChange"
    />
    <div class="checkbox-icon">
      <IconComponent
        :name="modelValue ? 'checkbox_on' : 'checkbox_off'"
      />
    </div>
    <div class="checkbox-name">{{ label }}</div>
  </label>
</template>

<style lang="scss" scoped>
.input-checkbox-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  input[type=checkbox] {
    appearance: none;
    display: none;
    width: 0;
    height: 0;
  }
  .checkbox-icon {
    display: block;
    fill: transparent;
    stroke: var(--input-checkbox-color);
  }
  .checkbox-name {
    color: var(--input-checkbox-label-color);
  }
  input[type=checkbox]:checked + .checkbox-icon {
    stroke: var(--input-checkbox-color-checked);
  }
  input[type=checkbox]:checked ~ .checkbox-name {
    color: var(--input-checkbox-label-color-checked);
  }
}
</style>
