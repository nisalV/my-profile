import { iconList } from '../../Assets/iconList'
import * as stylex from '@stylexjs/stylex'

const styles = stylex.create({
  iconStyles: {
    display: 'block',
    opacity: {
      default: 1,
      ':hover': 0.75,
    },
    transition: 'all 0.5s ease',
  },
  cursorDefault: {
    cursor: 'default',
  },
  cursorPointer: {
    cursor: 'pointer',
  },
})

type IconProps = {
  name: string
  width: number | string
  height: number | string
  color?: string
  stroke?: string
  onPress?: () => void
}

const Icon = ({ name, width, height, color, stroke, onPress }: IconProps) => {
  const iconDetails = iconList[name]
  return (
    <svg
      className={onPress ? 'icon' : undefined}
      width={`${width}`}
      height={`${height}`}
      viewBox={iconDetails.viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onPress}
      {...stylex.props(
        styles.iconStyles,
        onPress ? styles.cursorPointer : styles.cursorDefault
      )}
    >
      {iconDetails.paths.map((path, index) => (
        <path
          key={index}
          d={path.d}
          fill={color || path.fill}
          stroke={stroke || path.stroke}
          strokeWidth={path.strokeWidth}
          strokeLinecap={path.strokeLinecap}
          strokeLinejoin={path.strokeLinejoin}
          style={path.style}
        />
      ))}
    </svg>
  )
}

export default Icon
