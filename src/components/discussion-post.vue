<template lang="pug">
  .discussion-post
    span.counter {{ count }}
    p {{ text }}
</template>

<script>
  const defaultText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla placerat magna mattis purus tempor maximus.'

  export default {
    props: {
      count: [Number, String],
      text: {
        type: String,
        default: defaultText
      }
    }
  }
</script>

<style lang="sass">
</style>
