import { iconList } from '../../Assets/iconList'

type IconProps = {
  name: string
  width: number
  height: number
  color?: string
  stroke?: string
}

const Icon = ({ name, width, height, color, stroke }: IconProps) => {
  const iconDetails = iconList[name]
  return (
    <svg
      width={`${width}`}
      height={`${height}`}
      viewBox={iconDetails.viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
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
