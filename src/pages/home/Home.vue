<template>
  <div>
    <home-header />
    <home-swiper :list = "swiperList" />
    <home-icons :list = "iconList" />
    <home-recommend :list = "recommendList" />
    <home-weekend :list = "weekendList" />

  </div>
</template>

<script>

import homeHeader from './components/header'
import homeSwiper from './components/swiper'
import homeIcons from './components/icons'
import homeRecommend from './components/recommend'
import homeWeekend from './components/weekend'

import axios from 'axios'
import { mapState } from 'vuex'


export default {
  name: 'Home',
  data (){
  	return {
  		iconList:[],
  		recommendList:[],
  		swiperList:[],
  		weekendList:[],
      newCity:'',
  	}
  },
  components: {
  	homeHeader,
  	homeSwiper,
  	homeIcons,
  	homeRecommend,
  	homeWeekend,
  },
  mounted (){
    this.newCity = this.city
  	this.getHomeInfo()
  },
  activated () {
    if(this.newCity !== this.city){
      this.newCity = this.city
      this.getHomeInfo()
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods:{
  	getHomeInfo () {
  		axios.get('/api/index.json?city=' + this.city)
  			.then(this.getHomeInfoSucc)
  			.catch(function(err){
			    console.log(err);
			  });
  	},
  	getHomeInfoSucc (res){
  		res = res.data 
  		if(res.ret&&res.data){
  			this.iconList = res.data.iconList
  			this.recommendList = res.data.recommendList
  			this.swiperList = res.data.swiperList
  			this.weekendList = res.data.weekendList
  		}
  	}
  }
}
</script>

<style>
</style>
