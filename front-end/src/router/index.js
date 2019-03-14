import Vue from 'vue';
import VueRouter from 'vue-router';
import CoinIndexPage from '@/components/HomePage';
import CoinDetailPage from '@/components/CoinDetailPage';
//router 注册
Vue.use(VueRouter)

//router 内容
export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: CoinIndexPage
    },
		{
		  path: '/coin/detail',
		  name: 'CoinDetailPage',
		  component: CoinDetailPage
		},
  ],
});
