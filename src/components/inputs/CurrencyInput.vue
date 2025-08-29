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
        type: Number,
      },
      allowCents: {
        type: Boolean,
        default: true
      },
      handleChange: {
        type: Function
      },
      currency: {
        type: String,
        default: supportedCurrencies.USD,
        validator: function (value) {
          return supportedCurrenciesArray.indexOf(value) !== -1
        }
      }
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
