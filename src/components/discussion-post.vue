<template lang="pug">
  .discussion-post
    span.counter {{ count }}
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
</style>
