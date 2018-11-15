<template>
  <div>
    <home-header />
    <home-swiper />
    <home-icons />
    <home-recommend />
    <home-weekend />

  </div>
</template>

<script>

import homeHeader from './components/header'
import homeSwiper from './components/swiper'
import homeIcons from './components/icons'
import homeRecommend from './components/recommend'
import homeWeekend from './components/weekend'

import axios from 'axios'


export default {
  name: 'Home',
  components: {
  	homeHeader,
  	homeSwiper,
  	homeIcons,
  	homeRecommend,
  	homeWeekend,
  },
  mounted (){
  	this.getHomeInfo()
  },
  methods:{
  	getHomeInfo () {
  		axios.get('/api/index.json')
  			.then(this.getHomeInfoSucc)
  			.catch(function(err){
			    console.log(err);
			  });
  	},
  	getHomeInfoSucc (res){
  		console.log(res)
  	}
  }
}
</script>

<style>
</style>
