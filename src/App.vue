<template lang="pug">
  #app
    header
      a(:href="theme === 'light' ? null : '@theme-light'" @click.prevent="setTheme('light')") Светлая тема
      =" "
      a(:href="theme === 'dark' ? null : '@theme-dark'" @click.prevent="setTheme('dark')") Тёмная тема
    content-layout
    sidebar-layout
</template>

<script>
  import ContentLayout from './layout/content'
  import SidebarLayout from './layout/sidebar'

  export default {
    name: 'App',
    components: {
      ContentLayout, SidebarLayout
    },
    data: () => ({
      theme: 'light'
    }),
    methods: {
      setTheme (theme) {
        this.theme = theme
      }
    }
  }
</script>

<style lang="sass">
  p
    margin: 0
  #app
    display: flex
    flex-flow: row wrap
    justify-content: space-around
    padding: 1em 3em
    font-family: Avenir, Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    color: #2c3e50
    > header
      flex: 0 0 100%
      margin-bottom: 1em
    > #content-layout
      flex: 1 0 30%
    > #sidebar-layout
      flex: 0 0 25%
</style>
