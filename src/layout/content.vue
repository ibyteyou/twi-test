<template lang="pug">
  #content-layout
    #post-input
      input(placeholder="О чём вы думаете")
      button Поделиться
    content-post(v-for="(p, k) in posts", :key="k", :post="p")
</template>

<script>
  import { mapGetters } from 'vuex'
  import ContentPost from '../components/content-post'

  export default {
    components: {
      ContentPost
    },
    computed: {
      ...mapGetters(['posts'])
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
  .content-post
    .content-post-body
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
