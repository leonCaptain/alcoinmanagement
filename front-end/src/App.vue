
<template>
  <div id="app">
		<al-layout/>
  </div>
</template>

<script>
import "ant-design-vue/dist/antd.min.css";
import ALLayout from './components/Layout';

export default {
  name: 'App',
	components: {
		'al-layout': ALLayout
	}
};
</script>

<style>
	#app {
		height: 100%;
	}
</style>
