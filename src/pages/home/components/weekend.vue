<template>
	<div>
	    <div class="title">周末去哪儿</div>
	    <ul>
	      <li
	        class="item border-bottom"
	        v-for="item of list"
	        :key="item.id"
	      >
	        <div class="item-img-wrapper">
	          <img class="item-img" :src="item.imgUrl" />
	        </div>
	        <div class="item-info">
	          <p class="item-title">{{item.title}}</p>
	          <p class="item-desc">{{item.desc}}</p>
	        </div>
	      </li>
	    </ul>
  </div>
</template>

<script>
export default {
	name:'',
	props:{
		list:Array
	},
	data(){
		return {
			_list:[
				{id:'666',
				title:'高性价比 泰国甲米5日自由行 ',
				desc:'广州直飞/海滨旅游理想胜地--甲米/入住甲米查达度假村',
				imgUrl:'http://pimg.mangocity.com/vimg/line/248268_1450667649093.jpg-169M'},
				{id:'667',
				title:'香港2-12日自由行',
				desc:'铜锣湾华丽精品酒店1晚/送维港夜游或电话卡（2选1）+《带你游港澳手册》',
				imgUrl:'http://wimg.mangocity.com/cms/d/file/2016/04-22/f1f4bdb12d22c4d8b677c8072b9724c7.jpg'},
				{id:'668',
				title:'澳大利亚黄金海岸+布里斯班+悉尼+凯恩斯9日跟团游',
				desc:'深起港止+香港航空+梦幻世界+蓝山国家公园+蓝色海洋路+热带雨林+大堡礁绿岛9天阳光之旅',
				imgUrl:'http://pimg.mangocity.com/vimg/line/10570512_104950541904385.jpg-169S'},
				{id:'669',
				title:'【特价】巴厘岛+蓝梦岛5日跟团游',
				desc:'超值爆款 香港直飞/全程国际四星花园泳池酒店/快艇蓝梦岛一日游（独木舟、环岛游、编发辫或纹身彩绘2选1等）+海神庙+乌布皇宫❤独家赠送精美水晶相册！',
				imgUrl:'http://pimg.mangocity.com/vimg/line/10516644_409641325958372.jpg-169S'},
				{id:'665',
				title:'呼伦贝尔大草原腹地',
				desc:'深圳双飞往返/升级两天丰田越野车+特色风味餐/纯玩/1晚草原房车/升级1晚国际五星香格里拉大酒店',
				imgUrl:'http://pimg.mangocity.com/vimg/line/10561978_033967829918745.jpg-169S'},
			],
		}
	}
}
	
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 37.09%
    .item-img
      width: 100%
  .item-info
    padding: .1rem
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #ccc
      ellipsis()
</style>