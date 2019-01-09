
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
      <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
        <a-menu-item key="1">
          <a-icon type="user" />
					<router-link :style="{ display: 'inline' }" to="/a">投资详情</router-link>
        </a-menu-item>
        <a-menu-item key="2">
		  <a-icon type="alert" />
          <span>警报</span>
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="upload" />
          <span>nav 3</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="()=> collapsed = !collapsed"
        />
				 <a-avatar style="margin: 15px 30px; float: right" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
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
