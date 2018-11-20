<template>
  <div class="container" @click="closeImgs">
    <div class="wrapper">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for= "(item,index) in imgs" :key = "index">
          <img class="gallary-img" :src="item" />
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
	name:'',
	props:{
    imgs:{
      type:Array,
      default(){
        return ["http://pimg.mangocity.com/vimg/line/10561978_033967829918745.jpg-169S",
      "http://pimg.mangocity.com/vimg/line/248268_1450667649093.jpg-169M",
      "http://wimg.mangocity.com/cms/d/file/2016/04-22/050b59936007bb3c06d0ec6b505ac695.jpg",]
      }
    }
	},
  data (){
    return {
      swiperOption:{
        pagination : '.swiper-pagination',
        paginationType : 'fraction',
        observeParents: true,
        observer: true
      },
    }
  },
  methods:{
    closeImgs(){
      this.$emit('closeImgs')
    },
  },
}
	
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow: inherit
  .container >>> .swiper-wrapper
    display: flex
    height:100%
    align-items:center
  .container
    display: flex
    flex-direction: column
    justify-content: center
    z-index: 99
    position: fixed
    left: 0
    right: 0
    top: 0
    bottom: 0
    background: #000
    .wrapper
      height: auto
      width: 100%
      .gallary-img
        width: 100%
      .swiper-pagination
        color: #fff
        bottom: -1rem
</style>