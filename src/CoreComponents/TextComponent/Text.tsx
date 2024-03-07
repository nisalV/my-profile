import './Text.css'

const styles = {
  wrapper: {
    margin: 0,
    padding: 0,
    width: 'fit-content',
    height: 'fit-content',
    display: 'block',
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

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  text: string
  id?: string
  fontSize?: number | string
  fontWeight?: number | string
  color?: string
  oneLine?: boolean
  textStyles?: React.CSSProperties
  clickable?: boolean
}

const Text = ({
  text,
  id,
  fontSize,
  fontWeight,
  color,
  oneLine,
  textStyles,
  clickable,
  ...props
}: TextProps) => {
  return (
    <p
      id={id}
      className={clickable ? id || 'text' : undefined}
      style={{
        color: color || 'white',
        fontWeight: fontWeight || 'normal',
        fontSize: fontSize || '15px',
        cursor: clickable ? 'pointer' : 'default',
        ...styles.wrapper,
        ...textStyles,
        ...(oneLine && styles.oneLineStyles),
        ...(!oneLine && styles.lineBreak),
      }}
      {...props}
    >
      {text}
    </p>
  )
}

export default Text
