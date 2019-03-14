
<template>
  <a-layout id="alcoin-layout">
    <a-layout-sider
      :trigger="null"
      collapsible
      v-model="collapsed"
    >
      <div class="logo">
		      <img src="../assets/alcoin-logo.png" alt="alcoin">
		      <span class="@font-size-base text-color">投资之家</span>
	    </div>
      <a-menu theme="dark" mode="inline" 
				:defaultSelectedKeys="['1']"
				:defaultOpenKeys="['']">
        <a-menu-item key="1">
          <a-icon type="home" />
					<router-link :style="{ display: 'inline' }" to="/">概览</router-link>
        </a-menu-item>
        <a-menu-item-group key="sub1">
					  <span slot="title"><a-icon type="pie-chart" /><span>投资组合</span></span>
        		<a-menu-item key="3">投资</a-menu-item>
        		<a-menu-item key="4">统计</a-menu-item>
						<a-menu-item key="5">报警</a-menu-item>
        </a-menu-item-group>
        <a-menu-item key="6">
          <a-icon type="dashbord" />
          <span>数据图标</span>
        </a-menu-item>
				<a-menu-item key="7">
				  <a-icon type="regression_rate" />
				  <span>回归统计</span>
				</a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
				 <a-avatar style="margin: 15px 50px; float: right" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
				 <a-icon type="setting" style="margin: 24px -18px; float: right; font-size: 20px;" />
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  name: 'ALLayout',
  data(){
    return {
      collapsed: false,
    }
  }
}
</script>

<style>
#alcoin-layout {
  height: 100%;
}
#alcoin-layout .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color .3s;
}

#alcoin-layout .trigger:hover {
  color: #1890ff;
}

#alcoin-layout .logo {
  height: 32px;
  margin: 16px;
}
#alcoin-layout .logo img {
	height: 25px;
}
#alcoin-layout .logo .title {
	
}
</style>
