// 主页入口，配置react-router
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {browserHistory, Router, Route, IndexRoute} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// 以下引入页面的组件
import Main from './components/Main';

import HomePageContainer from './containers/HomePage';
import ResultPageContainer from './containers/ResultPage';
import store from './store';

// 引入react-tap-event-plugin组件避免meter-ui onTouchTap event 会遇到的问题
injectTapEventPlugin();

// 用react-redux的Provider组件把页面的所有组件包裹起来，让每个compoments都可以存取到state
// 这边使用browserHistory 当做history，并使用meterial-ui的MuiThemeProvider包裹整个compoments
/**
 * 由于这边是简易的App我们设计了Main作为母模板，其有两个子组件HomePageContainer和ResultPageContainer，
 * 其中HomePageContainer作为根位置的子组件
 */
// Provider组件需要store
ReactDOM.render(
  <Provider store={store}>
  <MuiThemeProvider>
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={HomePageContainer} />
        <Route path="/result" component={ResultPageContainer} />
      </Route>
    </Router>
  </MuiThemeProvider>
</Provider>, document.getElementById('app'));
