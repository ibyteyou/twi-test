<template lang="pug">
  .content-post
    .content-post-body
      img-avatar(:user="post.user")
      p
        template(v-if="demoImgPreview")
          img.preview(:src="demoImgPreview")
          br
        | {{ postContent }}
    content-comment(v-for="(c, k) in demoLastComments", :key="k", :text="c.text", :user="c.user")
</template>

<script>
  import defaultAvatar from '../assets/avatar.png'
  import ContentComment from '../components/content-comment'

  export default {
    components: {
      ContentComment
    },
    data: () => ({
      defaultAvatar,
      demoImgPreview: null,
      postContentCuted: null
    }),
    props: {
      post: Object
    },
    computed: {
      demoLastComments: ({ post }) => post && post.comments && post.comments.slice(Math.max(0, post.comments.length - 3), post.comments.length),
      postContent: ({ post, postContentCuted }) => postContentCuted || post.content
    },
    methods: {
      validateContent () {
        if (!this.post.content) return

        const matchImages = this.post.content.match(/(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))/)
        if (matchImages) {
          const firstImg = matchImages[0]
          // these must also foreach all images and async validate via new Image()
          this.postContentCuted = this.post.content.replace(firstImg, '')
          this.demoImgPreview = firstImg
        }
      }
    },
    mounted () {
      this.validateContent()
    }
  }
</script>

<style lang="sass">
  img.preview
    width: 100%
</style>
