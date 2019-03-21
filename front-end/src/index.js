import React from 'react';
import ReactDom from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import { Provider } from 'react-redux';
import store from './store/index';
import getRouter from './router/index';


/*初始化*/
// 如果没该步骤，页面会出现空白
renderWithHotReload(getRouter());
/*热更新*/
if (module.hot) {
   module.hot.accept('./router/index.js', () => {
     const getRouter = require('./router/index.js').default;
     renderWithHotReload(getRouter());
   });
}

function renderWithHotReload(RootElement) {
  ReactDom.render(
    <AppContainer>
      <Provider store={store}>
        {RootElement}
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  )
}
