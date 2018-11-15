<template>
  <div>
    <home-header />
    <home-swiper />
    <home-icons />
  </div>
</template>

<script>

import homeHeader from './components/header'
import homeSwiper from './components/swiper'
import homeIcons from './components/icons'

export default {
  name: 'Home',
  components: {
  	homeHeader,
  	homeSwiper,
  	homeIcons
  }
}
</script>

<style>
</style>
