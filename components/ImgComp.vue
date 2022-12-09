<template>
      <img :src="require('@/assets/img/' + photo + '')" alt="" />
</template>

<script>
export default {
  props: ["photo"]
}
</script>

<style>

</style>
