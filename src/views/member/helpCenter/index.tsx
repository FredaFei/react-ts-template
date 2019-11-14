import * as React from "react";
import { Cell, Header } from 'components/index'
import { withRouter, RouteComponentProps } from "react-router";
import classes, { createScopedClasses } from 'utils/classnames'
import './index.scss'

const componentName = 'HelpCenter'
const sc = createScopedClasses(componentName)

interface Props extends RouteComponentProps {}

interface NavItem {
  name: string,
  type: string,
  icon: string
}

const navs = {
  base: [
    { name: '常见问题', type: 'FAQ', icon: '' },
    { name: '注册登录', type: 'reg_login', icon: '' },
    { name: '绑卡实名', type: 'card_real', icon: '' },
    { name: '投资', type: 'invest', icon: '' },
    { name: '提现', type: 'cash', icon: '' },
  ],
  vip: [
    { name: '黄金说明', type: 'huangjin', icon: '' },
    { name: '优惠券说明', type: 'youhuiquanshuoming', icon: '' },
    { name: '推荐好友', type: 'inviter', icon: '' },
    { name: '奖励', type: 'award', icon: '' },
    { name: '会员说明', type: 'about_vip', icon: '' },
    { name: '积分说明', type: 'about_point', icon: '' },
    { name: '任务说明', type: 'about_mission', icon: '' },
  ]
}


const HelpCenter: React.FunctionComponent<Props> = props => {
  const onSkipClick = (type: string) => {
    props.history.push(`/helpCenter/detail/${type}`);
  }
  const isDetail = props.location.pathname.includes("/helpCenter/detail/")
  const toggleClass = isDetail ? 'hide' : 'show'
  const renderNav = (data: Array<NavItem>) => data.map(i => <Cell iconLeft="left" leftText={i.name} key={i.name}
                                                                  onClick={() => {onSkipClick(i.type)}}></Cell>);
  return (
    <div className={classes(sc('wrapper'))}>
      <Header className={classes(toggleClass)}>帮助中心列表</Header>
      <div className={classes(sc('content'), toggleClass)}>
        <div className={sc('section')}>{renderNav(navs['base'])}</div>
        <div className={sc('section')}>{renderNav(navs['vip'])}</div>
      </div>
      {props.children}
    </div>
  );
}
export default withRouter(HelpCenter)
