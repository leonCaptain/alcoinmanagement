// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import { Button, Layout, Menu, Icon, Avatar, Table, Popconfirm} from "ant-design-vue";
import VueRouter from './router';
Vue.use(Layout);
Vue.use(Menu);
Vue.use(Icon);
Vue.use(Avatar);
Vue.use(Table);
Vue.use(Popconfirm);
Vue.use(Button);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
	router: VueRouter,
	render: h => h(App)
});
