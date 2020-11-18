<template lang="pug">
  #content-layout
    #post-input
      input(placeholder="О чём вы думаете")
      button Поделиться
    .content-block
      .content-post
        img.avatar(src="../assets/avatar.png")
        p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla placerat magna mattis purus tempor maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      content-comment
      content-comment
      content-comment
</template>

<script>
  import ContentComment from '../components/content-comment'

  export default {
    components: {
      ContentComment
    }
  }
</script>

<style lang="sass">
  #post-input
    input
      height: 1.5em
      width: calc(100% - 125px)
    button
      padding: .25em 1em
  .content-block
    .content-post
      display: flex
      border: 1px solid #000
      img.avatar
        width: 75px
        height: 75px
        border-radius: 50%
    .content-comment
      display: flex
      img.avatar
        width: 50px
        height: 50px
        border-radius: 50%
</style>
