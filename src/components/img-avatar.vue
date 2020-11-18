<template lang="pug">
  img.avatar(v-tooltip="user.name", :src="(user && user.avatar) || defaultAvatar")
</template>

<script>
  import { VTooltip } from 'v-tooltip'
  import defaultAvatar from '../assets/avatar.png'

  export default {
    name: 'ImgAvatar',
    directives: { tooltip: VTooltip },
    data: () => ({
      defaultAvatar
    }),
    props: {
      user: Object
    }
  }
</script>

<style lang="sass">
  .tooltip
    display: block !important
    z-index: 10000

    .tooltip-inner
      background: #fff
      color: #000
      border-radius: 12px
      padding: .5em 1em
      border: 1px solid #000

    .tooltip-arrow
      width: 0
      height: 0
      border-style: solid
      position: absolute
      margin: 5px
      border-color: white
      z-index: 1

    &[x-placement^="top"]
      margin-bottom: 5px

      .tooltip-arrow
        border-color: #000
        border-width: 1px
        border-left-color: transparent
        border-top-color: transparent
        bottom: -8px
        width: 6px
        height: 6px
        transform: rotate(45deg)
        background-color: #fff

    &[x-placement^="bottom"]
      margin-top: 5px

      .tooltip-arrow
        border-width: 0 5px 5px 5px
        border-left-color: transparent !important
        border-right-color: transparent !important
        border-top-color: transparent !important
        top: -5px
        left: calc(50% - 5px)
        margin-top: 0
        margin-bottom: 0

    &[x-placement^="right"]
      margin-left: 5px

      .tooltip-arrow
        border-width: 5px 5px 5px 0
        border-left-color: transparent !important
        border-top-color: transparent !important
        border-bottom-color: transparent !important
        left: -5px
        top: calc(50% - 5px)
        margin-left: 0
        margin-right: 0

    &[x-placement^="left"]
      margin-right: 5px

      .tooltip-arrow
        border-width: 5px 0 5px 5px
        border-top-color: transparent !important
        border-right-color: transparent !important
        border-bottom-color: transparent !important
        right: -5px
        top: calc(50% - 5px)
        margin-left: 0
        margin-right: 0

    &.popover
      $color: #000

      .popover-inner
        background: $color
        color: black
        padding: 24px
        border-radius: 5px
        box-shadow: 0 5px 30px rgba(black, .1)

      .popover-arrow
        border-color: $color

    &[aria-hidden='true']
      visibility: hidden
      opacity: 0
      transition: opacity .15s, visibility .15s

    &[aria-hidden='false']
      visibility: visible
      opacity: 1
      transition: opacity .15s
</style>
