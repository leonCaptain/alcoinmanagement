
<template>
  <div id="app">
		<al-layout/>
  </div>
</template>

<script>
import ALLayout from './components/Layout';
import "ant-design-vue/dist/antd.min.css";

export default {
  name: 'App',
	components: {
		'al-layout': ALLayout
	}
};
</script>

