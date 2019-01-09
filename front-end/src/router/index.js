import Vue from 'vue';
import VueRouter from 'vue-router';
import CoinIndexPage from '@/components/CoinIndexPage';
import CoinDetailPage from '@/components/CoinDetailPage';

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'CoinIndexPage',
      component: CoinIndexPage
    },
		{
		  path: '/detail?',
		  name: 'CoinDetailPage',
		  component: CoinDetailPage
		},
  ],
});
