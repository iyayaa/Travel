<template>
  <div>
    <div class="banner" >
      <img class="banner-img" src="http://wimg.mangocity.com/cms/d/file/2016/04-22/669c5543aa25706c18f0cc9d4179bf67.jpg" />
      <div class="banner-info">
        <div class="banner-tittle">
          香港往返/日本个人旅游签证
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe692;</span>
          12
        </div>
      </div>
    </div>
    <gallary/>	
  </div>
</template>

<script>
import gallary from 'common/gallary/gallary'
export default {
	name:'',
	props:{
	},
	components:{
		gallary,
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