<template>
	<div>
		<city-header/>
		<city-search/>
		<city-list/>
	</div>
</template>
<script>
import cityHeader from './components/header'
import citySearch from './components/search'
import cityList from './components/list'
export default {
	name:'',
	components:{
		cityHeader,
		citySearch,
		cityList
	}

}

</script>
<style lang="stylus" scroped></style>