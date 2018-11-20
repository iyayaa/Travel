<template>
	<div>
		<detailBanner/>
		<detailHeader/>
		<div class="content">
			<detailList :list = "detailList"/>
		</div>	
	</div>
</template>

<script>
import detailBanner from './components/banner'
import detailHeader from './components/header'
import detailList from './components/list'
export default {
	name:'',
	data(){
		return {
			detailList:[
			{
				title:"今天是个好时日1",
				children:[{
					title:"今天是个好时日哈哈哈哈",
				},{
					title:"今天是个好时日哈哈哈哈不不不",
				},{
					title:"今天是个好时日哈哈你猜",
					children:[{
						title:"今天是个好时日再来一局"
					},{
						title:"今天是个好时日再来一局"
					}]
				},
				]
			},
			{
				title:"今天是个好时日2"
			}, {
				title:"今天是个好时日3"
			},
			],
		}
	},
	props:{
	},
	components:{
		detailBanner,
		detailHeader,
		detailList,
	}
}
	
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .content
  	height 50rem
</style>