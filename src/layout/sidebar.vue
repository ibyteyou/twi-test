<template lang="pug">
  #sidebar-layout
    h3 Самые часто обсуждаемые посты
    discussion-post(v-for="(d, k) in discussions", :count="d.count", :key="k", :text="d.text")
</template>

<script>
  import { mapGetters } from 'vuex'
  import DiscussionPost from '../components/discussion-post'

  export default {
    components: {
      DiscussionPost
    },
    computed: {
      ...mapGetters(['discussions'])
    }
  }
</script>

<style lang="sass">
  #sidebar-layout
    h3
      margin-top: 0
</style>
