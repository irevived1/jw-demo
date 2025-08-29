<script setup>
  import { EN, FR, USD, EUR, LANG } from '@/utils/constants.js'
  import { setQueryParam } from '@/utils/helper.js'
  import { currencyProp } from '@/utils/helper.js'

  const props = defineProps(
    {
      handleCurrencyChange: {
        type: Function,
        default: null,
      },
      locale: {
        type: String,
        default: EN,
        validator: function (value) {
          return EN === value || FR === value
        }
      },
      currency: currencyProp
    }
  )

  function handleLocaleChange({target}) {
    setQueryParam(LANG, target.value)
    location.reload()
  }
</script>

<template>
  <select :value="locale" name="locale" @change="handleLocaleChange">
    <option value="" disabled>Language</option>
    <option :value="EN">{{EN}}</option>
    <option :value="FR">{{FR}}</option>
  </select>
  <span />
  <select :value="currency" name="locale" @change="handleCurrencyChange">
    <option value="" disabled>Currency</option>
    <option :value="USD">{{USD}}</option>
    <option :value="EUR">{{EUR}}</option>
  </select>
</template>

<style scoped>
span {
  display: inline-block;
  width: 5px;
}
</style>

