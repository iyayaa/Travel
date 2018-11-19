<template>
	<div>
		<div class="search">
	    <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音" />
	  </div>
    <div class="search-content" ref="searchDiv" v-show="keyword">
      <ul>
        <li
          class="search-item border-bottom" v-for= "(item,index) in resultList" :key ="index" @click = "cityClick(item.name)" >
          {{item.name}}
        </li>
        <li class="search-item border-bottom" v-show="noData">
          没有找到匹配数据
        </li>
      </ul>
    </div>
	</div>
</template>
<script>
import BScroll from 'better-scroll' 
export default {
	name:'',
  props:{
    cities:Object,
  },
  data () {
    return {
      keyword:'',
      resultList:[],
      noData:false,
      timer:null,
    }
  },
  methods:{
    cityClick (city){
      this.$store.commit('changeCity',city)
      this.$router.push('/')
    },
  },
  watch:{
    keyword (){
      if(this.timer){
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(()=>{
        if(!this.keyword){
          this.resultList = []
          return false
        }
        let result = []
        for (let key in this.cities ){
          this.cities[key].forEach((item)=>{
            if(item.spell.indexOf(this.keyword) == 0 || 
              item.name.indexOf(this.keyword) == 0 ){
              result.push(item)
            }
          })
          if(!result.length){
            this.noData = true
            this.resultList = []
          }else{
            this.noData = false
            this.resultList = result
          }
        }
      },100)
      
    },

  },
	components:{
	},
  mounted(){
    this.scroll = new BScroll(this.$refs.searchDiv)
  }

}

</script>
<style lang="stylus" scroped>
  @import '~styles/varibles.styl'
  .search
    height: .72rem
    padding: 0 .1rem
    background: $bgColor
    .search-input
      box-sizing: border-box
      width: 100%
      height: .62rem
      padding: 0 .1rem
      line-height: .62rem
      text-align: center
      border-radius: .06rem
      color: #666
  .search-content
    z-index: 1
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    background: #eee
    .search-item
      line-height: .62rem
      padding-left: .2rem
      background: #fff
      color: #666
</style>