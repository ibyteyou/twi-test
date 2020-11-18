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
  #content-layout
    margin-right: 3em
    #post-input
      margin-bottom: 1em
      display: flex
      justify-content: space-between
      input
        height: 1.5em
        width: calc(100% - 105px - 2em)
      button
        padding: .25em 1em
    .content-post
      .content-post-body
        display: flex
        border: 1px solid #000
        padding: .5em
        img.avatar
          width: 50px
          height: 50px
          border-radius: 50%
          margin-right: 2em
      .content-comment
        display: flex
        padding: .5em
        img.avatar
          width: 35px
          height: 35px
          border-radius: 50%
          margin-right: 1em
</style>
