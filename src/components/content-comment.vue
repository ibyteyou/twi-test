<template lang="pug">
  .content-comment
    img-avatar(:user="user")
    p {{ text }}
</template>

<script>
  export default {
    props: {
      text: {
        type: String,
        default: '%CommentContent%'
      },
      user: Object
    }
  }
</script>
