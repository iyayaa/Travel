<template>
	<div>
		<router-link tag="div" to="/" class="header-abs" v-show = "showAbs" >
	      <div class="iconfont header-abs-back">&#xe624;</div>
	    </router-link>
	    <div class="header-fixed" v-show = "!showAbs" :style="opacityStyle">
	      <router-link to="/">
	        <div class="iconfont header-fixed-back">&#xe624;</div>
	      </router-link>
	      景点详情
	    </div>	
	</div>
</template>

<script>
export default {
	name:'',
	data(){
		return {
			showAbs:true,
			opacityStyle:{
				opacity:0,
			},
		}
	},
	props:{
	},
	components:{
	},
	methods:{
		bodyScroll (){
			let top = document.documentElement.scrollTop
			if(top < 60 ){
				this.showAbs = true
			}else{
				this.showAbs = false
				if(top < 140 ){
					let opacity = top/140 > 1 ? 1 : top/140
					this.opacityStyle = {opacity}
				}
			}
		}
	},
	activated () {
		window.addEventListener('scroll',this.bodyScroll)
	},
	deactivated () {
		window.removeEventListener('scroll',this.bodyScroll)
	},
}
	
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header-abs
    position: absolute
    left: .2rem
    top: .2rem
    width: .8rem
    height: .8rem
    line-height: .8rem
    border-radius: .4rem
    text-align: center
    background: rgba(0, 0, 0, .8)
    .header-abs-back
      color: #fff
      font-size: .4rem
  .header-fixed
    z-index: 2
    position: fixed
    top: 0
    left: 0
    right: 0
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #fff
    background: $bgColor
    font-size: .32rem
    .header-fixed-back
      position: absolute
      top: 0
      left: 0
      width: .64rem
      text-align: center
      font-size: .4rem
      color: #fff
</style>