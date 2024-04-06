import * as stylex from '@stylexjs/stylex'

const spin = stylex.keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
})

const styles = stylex.create({
  loader1Container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    borderLeft: '2px solid #f3f3f3',
    animationName: spin,
    animationIterationCount: 'infinite',
    animationDuration: '1s',
    animationTimingFunction: 'linear',
    opacity: 0.9,
    transition: 'opacity 5s ease-in-out',
  },
  loader3Container: {
    position: 'absolute',
    width: '60%',
    height: '60%',
    margin: '20%',
    borderRadius: '50%',
    borderRight: '2px solid #f3f3f3',
    animationName: spin,
    animationIterationCount: 'infinite',
    animationDuration: '0.8s',
    animationTimingFunction: 'linear',
    opacity: 0.8,
    transition: 'opacity 5s ease-in-out',
  },
})

type LoaderProps = {
  size?: number | string
}
const Loader = ({ size }: LoaderProps) => {
  return (
    <div
      style={{
        width: size || '100%',
        height: size || '100%',
        position: 'relative',
      }}
    >
      <div {...stylex.props(styles.loader1Container)} />
      <div {...stylex.props(styles.loader3Container)} />
    </div>
  )
}

export default Loader
