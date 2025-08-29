<script setup>
  import LabelInputBase from '@/components/inputs/LabelInputBase.vue'
  import { BACKSPACE } from '@/utils/constants.js'
  import { currencyProp } from '@/utils/helper.js'


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
        type: Number,
      },
      allowCents: {
        type: Boolean,
        default: true
      },
      handleChange: {
        type: Function
      },
      currency: currencyProp
    }
  )

  function nameKeydown(e) {
    if (e.key === BACKSPACE) {
      return
    }
    if (/\D$/.test(e.key)) {
      e.preventDefault()
    }
  }
</script>

<template>
  <LabelInputBase
    :label="label"
    :handleChange="handleChange"
    :nameKeydown="nameKeydown"
    :name="name"
    :value="value ? $n( allowCents ? value / 100 : value, 'currency' , currency) : null"
  />
</template>
