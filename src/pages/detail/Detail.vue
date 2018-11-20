<template>
	<div>
		<detailBanner :sightName="sightName" :bannerImg="bannerImg" :bannerImgs="gallaryImgs"/>
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
import axios from 'axios'
export default {
	name:'detail',
	data(){
		return {
			sightName: '',
		    bannerImg: '',
		    gallaryImgs: [],
		    detailList: [],
		}
	},
	props:{
	},
	methods:{
		getDetailInfo (){
			axios.get('/api/detail.json',{
				params:{id:this.$route.params.id}
			}).then(this.handleGetDataSucc)
		},
		handleGetDataSucc(res){
			res = res.data
		    if (res.ret && res.data) {
		        const data = res.data
		        this.sightName = data.sightName
		        this.bannerImg = data.bannerImg
		        this.gallaryImgs = data.gallaryImgs
		        this.detailList = data.categoryList
		    }
		    
		},
	},
	components:{
		detailBanner,
		detailHeader,
		detailList,
	},
	mounted(){
		this.getDetailInfo()
	}
}
	
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .content
  	height 50rem
</style>