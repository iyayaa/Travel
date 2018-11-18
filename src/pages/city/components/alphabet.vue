<template>
  <ul class="list" ref="list">
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

    },
    handleTouchMove (e) {
      if(this.startFlag){
        if (this.timer) {
            clearTimeout(this.timer)
          }
        this.timer = setTimeout(()=>{
          let disY = e.targetTouches[0].clientY - this.ulTop - this.letterTop
          let index =  Math.floor(disY/this.letterHeight)
          
          if(index < 0 || index >= this.letters.length){
            return false;
          }
          this.$emit('change',this.letters[index])
        },16)
      }
    },
    handleTouchEnd () {
      this.startFlag = false
    },
    itemClick (e) {
      this.$emit('change',e.target.innerText)

    }
  },
  create () {
    this.startFlag = false
    this.letterHeight = 0
    this.timer = null
  },
  updated () {
    this.letterTop = this.$refs.list.children[0].offsetTop
    this.letterHeight = this.$refs.list.children[0].offsetHeight
    this.ulTop = this.$refs.list.offsetTop
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