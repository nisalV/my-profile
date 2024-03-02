import './Text.css'

const styles = {
  wrapper: {
    margin: 0,
    padding: 0,
    width: 'fit-content',
    height: 'fit-content',
  },
  oneLineStyles: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    overflowWrap: 'break-word' as const,
    textOverflow: 'ellipsis',
  },
  lineBreak: {
    whiteSpace: 'pre-line',
  },
}

type TextProps = {
  text: string
  id?: string
  fontSize?: number | string
  fontWeight?: number | string
  color?: string
  oneLine?: boolean
  textStyles?: React.CSSProperties
  onClick?: () => void
}

const Text = (props: TextProps) => {
  return (
    <p
      id={props.id}
      className={props.onClick && 'text'}
      style={{
        color: props.color || 'white',
        fontWeight: props.fontWeight || 'normal',
        fontSize: props.fontSize || '15px',
        cursor: props.onClick ? 'pointer' : 'default',
        ...styles.wrapper,
        ...props.textStyles,
        ...(props.oneLine && styles.oneLineStyles),
        ...(!props.oneLine && styles.lineBreak),
      }}
      onClick={() => props.onClick && props.onClick()}
    >
      {props.text}
    </p>
  )
}

export default Text
