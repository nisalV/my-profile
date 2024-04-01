type SpacerProps = {
  width?: number
  height?: number
}
const Spacer = ({ width, height }: SpacerProps) => {
  return (
    <div
      style={{ width: width || 0, height: height || 0, padding: 0, margin: 0 }}
    />
  )
}

export default Spacer
