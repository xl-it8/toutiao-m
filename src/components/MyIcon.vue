<template>
  <i slot="left-icon" class="toutiao" :class="'toutiao-' + name"></i>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
</style>
