<template lang="pug">
  .content-post
    .content-post-body
      img-avatar(:user="post.user")
      p {{ post.content }}
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
      defaultAvatar
    }),
    props: {
      post: Object
    },
    computed: {
      demoLastComments: ({ post }) => post && post.comments && post.comments.slice(Math.max(0, post.comments.length - 3), post.comments.length)
    }
  }
</script>
