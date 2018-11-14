<template>
  <div>
    <home-header />
    <home-swiper />
  </div>
</template>

<script>

import homeHeader from './components/header'
import homeSwiper from './components/swiper'

export default {
  name: 'Home',
  components: {
  	homeHeader,
  	homeSwiper
  }
}
</script>

<style>
</style>
