<script setup>
import AssetCalculator from '@/components/AssetCalculator.vue'
</script>

<template>
  <AssetCalculator/>
</template>

<style>
  html {
    #app > div {
      margin: 4.5rem;
    }

    font-size: 18px;

    @media (max-width: 768px) {
      font-size: 14px;
      #app > div {
        margin: 4rem;
      }
    }

    @media (max-width: 480px) {
      font-size: 10px;
      #app > div {
        margin: 0.65rem;
      }
    }
  }

</style>
