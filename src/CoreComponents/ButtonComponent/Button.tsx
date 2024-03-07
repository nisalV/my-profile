import React, { HTMLAttributes } from 'react'
import Text from '../TextComponent/Text'
import './Button.css'

const styles = {
  buttonWrapper: {
    margin: 0,
    border: 0,
    borderRadius: 8,
    backgroundColor: 'red',
  },
  buttonConstantStyles: {
    padding: 0,
    paddingBlock: 0,
    paddingInline: 0,
    position: 'relative' as const,
    display: 'block',
  },
  contentContainerConstantStyles: {
    border: 0,
    padding: '5px',
  },
  innerItemCommonStyles: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  hideOverflow: {
    overflow: 'hidden',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  paddingLeft: {
    paddingLeft: '5px',
  },
  paddingRight: {
    paddingRight: '5px',
  },
}
interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  width: number | string
  height: number | string
  id?: string
  text?: string
  leftElement?: JSX.Element
  centerElement?: JSX.Element
  rightElement?: JSX.Element
  buttonStyles?: React.CSSProperties
  textStyles?: React.CSSProperties
  leftElementStyles?: React.CSSProperties
  centerElementStyles?: React.CSSProperties
  rightElementStyles?: React.CSSProperties
  isDisabled?: boolean
}

function Button({
  width,
  height,
  text,
  leftElement: LeftElement,
  centerElement: CenterElement,
  rightElement: RightElement,
  buttonStyles,
  textStyles,
  leftElementStyles,
  centerElementStyles,
  rightElementStyles,
  isDisabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className="button"
      style={{
        ...styles.buttonWrapper,
        cursor: isDisabled ? 'default' : 'pointer',
        ...buttonStyles,
        ...styles.hideOverflow,
        ...styles.buttonConstantStyles,
      }}
      disabled={isDisabled}
      {...props}
    >
      <div
        className="button-overlay"
        style={{
          borderRadius:
            buttonStyles?.borderRadius || styles.buttonWrapper.borderRadius,
        }}
      ></div>
      <div
        style={{
          ...styles.innerItemCommonStyles,
          ...((LeftElement || RightElement) && styles.spaceBetween),
          ...styles.hideOverflow,
          ...styles.contentContainerConstantStyles,
          width: width,
          height: height,
        }}
      >
        {LeftElement && (
          <div
            style={{
              ...leftElementStyles,
              ...styles.innerItemCommonStyles,
            }}
          >
            {LeftElement}
          </div>
        )}
        {(text || CenterElement) && (
          <div
            style={{
              ...(LeftElement && styles.paddingLeft),
              ...(RightElement && styles.paddingRight),
              ...centerElementStyles,
              ...styles.innerItemCommonStyles,
              ...styles.hideOverflow,
            }}
          >
            {text ? (
              <Text
                oneLine
                text={text}
                fontSize={15}
                fontWeight={'normal'}
                textStyles={textStyles}
              />
            ) : (
              CenterElement
            )}
          </div>
        )}
        {RightElement && (
          <div
            style={{
              ...rightElementStyles,
              ...styles.innerItemCommonStyles,
            }}
          >
            {RightElement}
          </div>
        )}
      </div>
    </button>
  )
}

export default Button
