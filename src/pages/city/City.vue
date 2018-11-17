<template>
	<div>
		<city-header/>
		<city-search/>
		<city-list :cities="cities" :hot="hotCities"/>
		<city-alphabet :cities="cities"/>
	</div>
</template>
<script>
import cityHeader from './components/header'
import citySearch from './components/search'
import cityList from './components/list'
import cityAlphabet from './components/alphabet'

import axios from 'axios'

export default {
	name:'',
	data(){
		return {
			cities: {},
		    hotCities: [],
		    letter: ''
		}
	},
	components:{
		cityHeader,
		citySearch,
		cityList,
		cityAlphabet
	},
	methods:{
		handleGetCityInfoSucc(res){
			console.log(res)
			res = res.data
			if (res.ret && res.data) {
		       const data = res.data
		       this.cities = data.cities
		       this.hotCities = data.hotCities
		       // console.log(this.hotCities)
		    }
		}
	},
	mounted () {
		axios.get('/api/city.json')
		.then(this.handleGetCityInfoSucc)
	}

}

</script>
<style lang="stylus" scoped></style>