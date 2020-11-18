<template lang="pug">
  #sidebar-layout
    h3 Самые часто обсуждаемые посты
    discussion-post(count="2")
    discussion-post(count="10")
    discussion-post(count="4")
</template>

<script>
  import DiscussionPost from '../components/discussion-post'

  export default {
    components: {
      DiscussionPost
    }
  }
</script>

<style lang="sass">
</style>
