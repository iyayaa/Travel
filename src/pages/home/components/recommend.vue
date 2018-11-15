<template>
	<div>
		<div class="title">热销推荐</div>
	    <ul>
	      <div
	        class="item border-bottom"
	        v-for="item of list"
	        :key="item.id"
	      >
	        <img class="item-img" :src="item.imgUrl" />
	        <div class="item-info">
	          <p class="item-title">{{item.title}}</p>
	          <p class="item-desc">{{item.desc}}</p>
	          <button class="item-button">查看详情</button>
	        </div>
	      </div>
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
				title:'最具特色的国菜刺身',
				desc:'香港往返/日本个人旅游签证',
				imgUrl:'http://wimg.mangocity.com/cms/d/file/2016/04-22/050b59936007bb3c06d0ec6b505ac695.jpg'},
				{id:'667',
				title:'颇负盛名的日式抹茶',
				desc:'香港往返/日本个人旅游签证',
				imgUrl:'http://wimg.mangocity.com/cms/d/file/2016/04-22/c95a02d2402d0589674962f8b125271f.jpg'},
				{id:'668',
				title:'闻名世界美食界神户牛肉',
				desc:'香港往返/日本个人旅游签证',
				imgUrl:'http://wimg.mangocity.com/cms/d/file/2016/04-22/3ed2eda6eea4c8970ca910be29ec0392.jpg'},
				{id:'669',
				title:'鲜美爽嫩的烤肉',
				desc:'香港往返/日本个人旅游签证',
				imgUrl:'http://wimg.mangocity.com/cms/d/file/2016/04-22/669c5543aa25706c18f0cc9d4179bf67.jpg'},
				{id:'665',
				title:'滑润清脆的美味鱼蛋',
				desc:'香港往返/日本个人旅游签证',
				imgUrl:'http://wimg.mangocity.com/cms/d/file/2016/04-22/dd2e3bb480403d7d2d4f94610150137a.jpg'},
			],

		}
	}
}
	
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
      .item-button
        line-height: .44rem
        margin-top: .16rem
        background: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
        color: #fff	
</style>