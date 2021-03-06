import * as React from 'react'
import classes, {createScopedClasses} from '../../utils/classnames'
import './importSvgs'
import './index.scss'

interface IProps extends IStyledProps {
  name: string
  rotate?: number
  spin?: boolean
  onClick?: () => void
}

const componentName = 'Icon'
const sc = createScopedClasses(`component-${componentName.toLocaleLowerCase()}`)

const Icon: React.FunctionComponent<IProps> = (props: IProps) => {
  const {name, style, rotate, spin, className, onClick, ...rest} = props
  const wrapClasses = classes(sc('', {'spin': spin || name === 'loading'}), className)
  const styles = Object.assign(
    {},
    style,
    rotate && {
      transform: `rotate(${rotate}deg)`,
      transition: `transform .2s ease`
    }
  )
  return (
    <svg className={wrapClasses} style={styles} onClick={onClick} {...rest}>
      <use xlinkHref={`#${name}`}/>
    </svg>
  )
}
Icon.displayName = componentName
export default Icon
