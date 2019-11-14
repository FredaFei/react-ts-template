import * as React from "react";
// import { Cell, Icon } from '@/components/index'
import classes, { createScopedClasses } from 'utils/classnames'
import { RouteComponentProps } from "react-router";
import './index.scss'

const componentName = 'Gold'
const sc = createScopedClasses(componentName)

interface Props extends RouteComponentProps {

}

const Gold: React.FunctionComponent<Props> = props => {

  return (
    <div className={classes(sc('wrapper'))}>
      <div className={classes(sc('content'))}>gold
      </div>
    </div>
  );
}
export default Gold
