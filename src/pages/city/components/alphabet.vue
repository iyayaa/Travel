<template>
  <ul class="list">
    <li class="item" v-for="(item,index) in letters" :key="index" @click="itemClick"
    @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd"
     >
      {{item}}
    </li>
  </ul>
</template>
<script>
export default {
	name:'',
  props: {
    cities: Object
  },
  methods:{
    handleTouchStart (e) {
      this.startFlag = true
      // console.log(e.target.offsetTop)
      this.touchTop = e.target.offsetTop

    },
    handleTouchMove (e) {
      if(this.startFlag){
        let disY =  e.targetTouches[0].clientY - e.target.parentNode.offsetTop-this.touchTop
        let index =  Math.floor(disY/e.target.offsetHeight)
        if(index < 0|| index >= this.letters.length){
          return false;
        }
        this.$emit('change',this.letters[index])
      }
    },
    handleTouchEnd () {},
    itemClick (e) {
      // console.log(e.target.innerText)
      this.$emit('change',e.target.innerText)

    }
  },
  create () {
    this.startFlag = false
    this.touchTop = 0
    this.touchMid = 0
    this.touchEnd = 0
  },
  computed:{
    letters (){
      let letters = []
      for(let key in this.cities){
        letters.push(key)
      }
      return letters
    }
  },
	mounted (){
    
	},
	components:{

	}

}

</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    .item
      line-height: .4rem
      text-align: center
      color: $bgColor
</style>