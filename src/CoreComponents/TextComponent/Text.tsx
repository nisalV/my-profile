import * as stylex from '@stylexjs/stylex'

const styles = stylex.create({
  wrapper: {
    margin: 0,
    padding: 0,
    width: 'fit-content',
    height: 'fit-content',
    display: 'block',
    color: 'white',
    fontWeight: 'normal',
    fontSize: '15px',
    cursor: 'default',
  },
  clickableTextStyles: {
    cursor: 'pointer',
    opacity: {
      default: 1,
      ':hover': 0.75,
    },
    transition: 'all 0.5s ease',
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
})

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  text: string
  id?: string
  oneLine?: boolean
  textStyles?: stylex.StyleXStyles
  clickable?: boolean
}

const Text = ({
  text,
  id,
  oneLine,
  textStyles,
  clickable,
  ...props
}: TextProps) => {
  return (
    <p
      id={id}
      className={clickable ? id || 'text' : undefined}
      {...props}
      {...stylex.props(
        styles.wrapper,
        clickable && styles.clickableTextStyles,
        textStyles,
        oneLine && styles.oneLineStyles,
        !oneLine && styles.lineBreak
      )}
    >
      {text}
    </p>
  )
}

export default Text
