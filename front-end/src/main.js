// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VCharts from 'v-charts'
import axios from 'axios'
import VueAxios from 'vue-axios'

//and design 组件 
import { Button, Layout, Menu, Card, Icon, Avatar, Table, Popconfirm, Form, Input,
Radio, Modal, Select } from "ant-design-vue";
import VueRouter from './router';
import store from './store';

import {} from 'v-charts/lib/line'

//注册
Vue.use(VCharts);
Vue.use(Layout);
Vue.use(Card);
Vue.use(Menu);
Vue.use(Icon);
Vue.use(Avatar);
Vue.use(Table);
Vue.use(Popconfirm);
Vue.use(Button);
Vue.use(Form);
Vue.use(Input);
Vue.use(Radio);
Vue.use(Modal);
Vue.use(Select);
// 
// var instance = axios.create({
// 	baseURL: 'http://localhost:9999/api/',
// 	timeout: 1000
// });
Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
	store,
    el: '#app',
	router: VueRouter,
	render: h => h(App)
});

