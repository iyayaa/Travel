<template>
  <div class="wrapper">
    <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide v-for="item in list" :key ="item.id"><img class="swiper-img" :src="item.imgUrl">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
  </div>
  
</template>

<script>
  export default {
    name: '',
    props:{
      list:Array
    },
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          autoplay : 3000,
          loop: true,
        },
        _list:[
        {imgUrl:"https://img1.qunarzz.com/p/tts6/1801/98/655aaf033b5f5302.jpg"},
        {imgUrl:"https://img1.qunarzz.com/p/tts0/1809/c8/f3b35bc005b0c502.jpg"},
        {imgUrl:"https://img1.qunarzz.com/p/tts6/1801/98/655aaf033b5f5302.jpg"},
        
        ]
      }
    },
    computed: {
    },
    mounted() {
    }
  }
</script>
<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 31.25%
    background: #eee
    .swiper-img
      width: 100%
      height: 31.25vw
</style>