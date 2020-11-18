<template lang="pug">
  .discussion-post
    div.counter {{ count }}
    p {{ text }}
</template>

<script>
  export default {
    props: {
      count: [Number, String],
      text: {
        type: String,
        default: '%DiscussionText%'
      }
    }
  }
</script>

<style lang="sass">
  #app.theme-dark
    .discussion-post .counter
      border-color: #fff
  .discussion-post
    display: flex
    .counter
      flex: 0 0 30px
      width: 30px
      height: 30px
      border-radius: 50%
      border: 1px solid #000
      display: block
      margin-right: 1em
      text-align: center
      line-height: 30px
</style>
