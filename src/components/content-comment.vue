<template lang="pug">
  .content-comment
    img.avatar(:src="user.avatar || defaultAvatar")
    p {{ text }}
</template>

<script>
  import defaultAvatar from '../assets/avatar.png'

  export default {
    data: () => ({
      defaultAvatar
    }),
    props: {
      text: {
        type: String,
        default: '%CommentContent%'
      },
      user: {
        type: Object
      }
    }
  }
</script>

<style lang="sass">
</style>
