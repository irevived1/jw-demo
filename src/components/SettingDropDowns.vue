<script setup>
  import { EN, FR, USD, EUR, LANG } from '@/utils/constants.js'
  import { setQueryParam, currencyProp } from '@/utils/helper.js'
  import { useI18n } from 'vue-i18n'
  import { loadLocaleMessages } from "@/i18n"

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

  const { locale, setLocaleMessage } = useI18n()

  async function handleLocaleChange({target}) {
    setQueryParam(LANG, target.value)
    if (locale.value !== target.value) {
      await loadLocaleMessages(setLocaleMessage, target.value)
      locale.value = target.value
    }
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
