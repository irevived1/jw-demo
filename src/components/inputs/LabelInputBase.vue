<script setup>
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
      type: {
        type: String
      },
      placeholder: {
        type: String,
      },
      readonly: {
        type: Boolean,
        default: false
      },
      handleChange: {
        type: Function,
        default: null
      },
      nameKeydown: {
        type: Function,
        default: null
      },
      value: {
        type: String,
      }
    }
  )
</script>

<template>
  <div class="container">
    <label :for="name">{{ label }}</label>
    <input
      :type="type"
      :name="name"
      :id="name"
      :placeholder="placeholder"
      :value="value"
      :readonly="readonly"
      @input="handleChange"
      @keydown="nameKeydown"
    />
  </div>
</template>

<style scoped>
.container {
  label {
    font-weight: 600;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  input {
    font-size: 1.5rem;
    padding: 1.1rem 0.7rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    max-width: 285px;
    -o-text-overflow: ellipsis;
    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;
  }
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
}
</style>
