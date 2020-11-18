<template lang="pug">
  .content-comment
    img.avatar(src="../assets/avatar.png")
    p {{ content }}
</template>

<script>
  export default {
    props: {
      content: {
        type: String,
        default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla placerat magna mattis purus tempor maximus. Lorem ipsum dolor sit amet'
      }
    }
  }
</script>

<style lang="sass">
</style>
