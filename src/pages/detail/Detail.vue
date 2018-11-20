<template>
	<div>
		<detailBanner/>
		<detailHeader/>
		<div class="test">ff</div>	
	</div>
</template>

<script>
import detailBanner from './components/banner'
import detailHeader from './components/header'
export default {
	name:'',
	props:{
	},
	components:{
		detailBanner,
		detailHeader,
	}
}
	
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .test
  	height 50rem
</style>