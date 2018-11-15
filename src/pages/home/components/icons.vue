<template>
  <div class="icons">
  	<swiper :options="swiperOption" ref="mySwiper">
		<!-- slides -->
		<swiper-slide v-for="page in pages">
			<div class="icon" v-for="item in page">
	          <div class='icon-img'>
	            <img class='icon-img-content' :src="item.imgUrl" />
	          </div>
	          <p class="icon-desc">出国路由</p>
	        </div>
		</swiper-slide>
	</swiper>
  </div>
</template>

<script>


export default {
  name: '',
  data () {
  	return {
  		swiperOption: {
        },
        list:[
        {imgUrl:'http://www.mangocity.com/3g/msite/images/msite_vacation.jpg'},
        {imgUrl:'http://www.mangocity.com/3g/msite/images/msite_flight.jpg'},
        {imgUrl:'http://www.mangocity.com/3g/msite/images/msite_hotel.jpg'},
        {imgUrl:'http://www.mangocity.com/3g/msite/images/msite_ship.jpg'},
        {imgUrl:'http://www.mangocity.com/3g/msite/images/msite_ticket.jpg'},
        {imgUrl:'http://webres.mangocity.com/h5/1.0.2/f1188383f0665ff030e8ca95a5d029fb.png'},
        {imgUrl:'http://www.mangocity.com/3g/msite/images/msite_ship.jpg'},
        {imgUrl:'http://www.mangocity.com/3g/msite/images/msite_ticket.jpg'},
        {imgUrl:'http://webres.mangocity.com/h5/1.0.2/f1188383f0665ff030e8ca95a5d029fb.png'},
        ],
  	}
  },
  components: {
  },
  computed:{
  	pages () {
  		const pages =[]
  		this.list.forEach((item,index)=>{
  			let page = Math.floor(index/8);
  			if(!pages[page]){
  				pages[page] = []
  			}
  			pages[page].push(item)
  		})
  		return pages
  	}
  }
}
</script>

<style lang="stylus" scoped>

  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
  .icons
    margin-top: .1rem
    .icon
      position: relative
      overflow: hidden
      float: left
      width: 25%
      height: 0
      padding-bottom: 25%
      .icon-img
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: .44rem
        box-sizing: border-box
        padding: .1rem
        .icon-img-content
          display: block
          margin: 0 auto
          height: 100%
      .icon-desc
        position: absolute
        left: 0
        right: 0
        bottom: 0
        height: .44rem
        line-height: .44rem
        text-align: center
        color: $darkTextColor
        ellipsis()

</style>
