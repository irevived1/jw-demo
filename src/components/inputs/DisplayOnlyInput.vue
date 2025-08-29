<script setup>
  import LabelInputBase from '@/components/inputs/LabelInputBase.vue'
  import { supportedCurrencies, supportedCurrenciesArray, BACKSPACE } from '@/utils/constants.js'
  const props = defineProps(
    {
      name: {
        type: String,
        required: true
      },
      label: {
        type: String,
        required: true,
      },
      value: {
        type: Number
      }
    }
  )
</script>

<template>
  <LabelInputBase
    :readonly="true"
    :label="label"
    :name="name"
    :value="(value ? String(value) : null)"
  />
</template>
