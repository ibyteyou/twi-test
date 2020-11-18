<template lang="pug">
  #content-layout
    #post-input
      input(v-model="newPost" placeholder="О чём вы думаете" @keypress.enter="_addPost")
      button(:disabled="!newPost.length" @click="_addPost") Поделиться
    h3(v-if="!posts.length") Постов нет
    content-post(v-else v-for="(p, k) in posts", :key="k", :post="p")
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import ContentPost from '../components/content-post'

  export default {
    data: () => ({
      newPost: ''
    }),
    components: {
      ContentPost
    },
    computed: {
      ...mapGetters(['posts'])
    },
    methods: {
      ...mapActions(['addPost']),
      _addPost () {
        if (!this.newPost.length) return

        this.addPost(this.newPost)
        this.newPost = ''
      }
    }
  }
</script>

<style lang="sass">
  #app.theme-dark
    .content-post .content-post-body
      border-color: #fff
  #content-layout
    margin-right: 3em
    h3
      font-weight: 300
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
      margin-bottom: .25em
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
