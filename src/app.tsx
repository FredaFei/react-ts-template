import * as React from "react";
import {useEffect} from "react";
import { Switch, useLocation } from "react-router-dom";
import classes, {createScopedClasses} from 'utils/classnames'
import rem from 'utils/rem'
import {Footer} from "./components/index";
import routes from './routes/home'

const sc = createScopedClasses('content')

const dataSource = [
  {text: '首页', icon: 'left', path: '/'},
  {text: '产品', icon: 'right', path: '/product'},
  {text: '我的', icon: 'user', path: '/member'}
]


const App = () => {
  let {pathname} = useLocation();
  useEffect(() => {
    rem()
  })
  const renderFooter = () => {
    return dataSource.some(p => p.path === pathname || pathname === '/home') &&
      <Footer dataSource={dataSource} pathname={pathname}/>
  }
  return (
    <div className={classes(sc(''))}>
      <Switch>
        {routes.map(route => route)}
      </Switch>
      {renderFooter()}
    </div>
  );
}
export default App
