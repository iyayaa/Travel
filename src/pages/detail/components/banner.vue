<template>
  <div>
    <div class="banner" @click="showImgs">
      <img class="banner-img" :src="bannerImg" />
      <div class="banner-info">
        <div class="banner-tittle">
          {{this.sightName}}
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe692;</span>
          {{this.bannerImgs.length}}
        </div>
      </div>
    </div>
    <fadeAnimation>
      <gallary @closeImgs ="toCloseImgs" :imgs="bannerImgs" v-show='gallaryShow' />
    </fadeAnimation>	
  </div>
</template>

<script>
import gallary from 'common/gallary/gallary'
import fadeAnimation from 'common/fade/fadeAnimation'
export default {
	name:'',
	data (){
		return {
			gallaryShow:false,
		}
	},
	methods:{
		showImgs (){
			this.gallaryShow = true
		},
		toCloseImgs(){
			this.gallaryShow = false
		},
	},
	props:{
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
	},
	components:{
		gallary,
    fadeAnimation
	}
}
	
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
      height: 55vw
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #fff
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-tittle
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        height: .32rem
        line-height: .32rem
        margin-top: .14rem
        padding: 0 .4rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .8)
        font-size: .24rem
        .banner-icon
          font-size: .24rem
</style>