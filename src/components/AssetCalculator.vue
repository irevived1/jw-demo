<script setup>
  import { ref, watch } from 'vue'
  import CurrencyInput from '@/components/inputs/CurrencyInput.vue'
  import DisplayOnlyInput from '@/components/inputs/DisplayOnlyInput.vue'
  import {
    AMT, CUR, USD, BTC, ETH, LANG,
    supportedCurrencies
  } from '@/utils/constants.js'
  import {
    stripNonDigits,
    getQueryParam,
    setQueryParam,
    fetchAndTrimExchangeData,
    ratesToCryptoValue
  } from '@/utils/helper.js'
  import { debounce, isNumber } from 'lodash'
  import { useI18n } from 'vue-i18n'
  import { loadLocaleMessages } from "@/i18n"

  // uncomment the following line to see config options
  // import SettingDropDowns from '@/components/SettingDropDowns.vue'

  // FEEL FREE TO CHANGE THESE VALUES
  const BTC_ALLOC = 70
  const ETH_ALLOC = 100 - BTC_ALLOC

  const amountFromQueryParam = Number(getQueryParam(AMT))
  const investableAssetValue = ref(isNumber(amountFromQueryParam) ? amountFromQueryParam : 0)
  const rates = ref(null)

  const currencyFromQueryParam = getQueryParam(CUR)
  const currency = ref(supportedCurrencies[currencyFromQueryParam] || USD)

  const localeFromQueryParam = getQueryParam(LANG)

  const changeLanguage = async (lang) => {
    if (!lang) { return }
    const { locale, setLocaleMessage } = useI18n()
    if (locale.value !== lang) {
      await loadLocaleMessages(setLocaleMessage, lang)
      locale.value = lang
    }
  }

  const asyncFetchData = async () => {
    rates.value = await fetchAndTrimExchangeData(currency.value)
  }

  Promise.all([
    changeLanguage(localeFromQueryParam),
    asyncFetchData()
  ])

  function handleChange(event) {
    investableAssetValue.value = Number(stripNonDigits(event.target.value))
  }

  const debouncedUpdate = debounce((newValue) => {
    setQueryParam(AMT, newValue)
  } , 500)

  watch(investableAssetValue, (newValue) => {
    debouncedUpdate(newValue)
  })
</script>

<template>
  <div class="content">
    <!-- Uncomment component below to see SettingDropDowns -->
    <!-- <SettingDropDowns -->
    <!--   :currency="currency" -->
    <!--   :locale="localeFromQueryParam" -->
    <!--   :handleCurrencyChange="({target}) => { -->
    <!--     currency = target.value -->
    <!--     setQueryParam(CUR, target.value) -->
    <!--     asyncFetchData() -->
    <!--   }" -->
    <!-- /> -->
    <h1>{{ $t("site_header") }}</h1>
    <div class="display-fields">
      <div class="currency-input">
        <CurrencyInput
          :label="$t('investable_assets')"
          :value="investableAssetValue"
          name="investableAssetValue"
          :handleChange="handleChange"
          :currency="currency"
        />
        <p v-if="!rates && investableAssetValue">Loading...</p>
      </div>
      <div class="allocations">
        <DisplayOnlyInput
          :label="$t('btc_allocation', { percentage: BTC_ALLOC })"
          :value="ratesToCryptoValue(investableAssetValue * (BTC_ALLOC/100), rates, BTC)"
          name="etc_alloc"
        />
        <br />
        <DisplayOnlyInput
          :label="$t('eth_allocation', { percentage: ETH_ALLOC })"
          :value="ratesToCryptoValue(investableAssetValue * (ETH_ALLOC/100), rates, ETH)"
          name="eth_alloc"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.content {
  h1 {
    font-weight: 800;
  }
  max-width: 1200px;

  .display-fields {
    padding-top: 1.5rem;
    .currency-input {
      min-height: 11.5rem;
      margin-right: 10px;
      flex-grow: 1;
    }
    .allocations {
      margin-right: 10px;
      flex-grow: 1;
    }

    display: flex;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
}
</style>
