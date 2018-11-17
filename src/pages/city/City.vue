<template>
	<div>
		<city-header/>
		<city-search/>
		<city-list/>
		<city-alphabet/>
	</div>
</template>
<script>
import cityHeader from './components/header'
import citySearch from './components/search'
import cityList from './components/list'
import cityAlphabet from './components/alphabet'
export default {
	name:'',
	components:{
		cityHeader,
		citySearch,
		cityList,
		cityAlphabet
	}

}

</script>
<style lang="stylus" scoped></style>