import { HTMLAttributes } from 'react'
import Text from '../TextComponent/Text'
import * as stylex from '@stylexjs/stylex'
import Loader from '../Loader/Loader'

const styles = stylex.create({
  buttonWrapper: {
    margin: 0,
    borderWidth: 0,
    borderRadius: 10,
    boxShadow: {
      default: '0px 0px 5px 0px rgba(0,0,0,0.4)',
      ':hover': '0px 0px 10px 0px rgba(0,0,0,0.4)',
    },
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
  },
  buttonConstantStyles: {
    padding: 0,
    paddingBlock: 0,
    paddingInline: 0,
    position: 'relative' as const,
    display: 'block',
    overflow: 'hidden',
  },
  contentContainerConstantStyles: {
    borderWidth: 0,
    padding: '5px',
    overflow: 'hidden',
  },
  loadingItemStyles: {
    overflow: 'visible',
    height: 'fit-content',
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
  cursorDefault: {
    cursor: 'default',
    backgroundPosition: 'bottom',
  },
  cursorPointer: {
    cursor: 'pointer',
  },
  buttonOverlayStyles: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    display: 'block',
    background: 'linear-gradient(#0000, rgb(0 0 0/10%)) top/100% 800%',
    backgroundPosition: { ':hover': 'bottom' },
    transition: 'all 0.2s ease-in-out',
  },
  hideOverlay: {
    display: 'none',
  },
})

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  id?: string
  type?: 'button' | 'submit' | 'reset'
  text?: string
  hideOverlay?: boolean
  leftElement?: JSX.Element
  centerElement?: JSX.Element
  rightElement?: JSX.Element
  buttonStyles?: stylex.StyleXStyles
  textStyles?: stylex.StyleXStyles
  leftElementStyles?: stylex.StyleXStyles
  centerElementStyles?: stylex.StyleXStyles
  rightElementStyles?: stylex.StyleXStyles
  isDisabled?: boolean
  isLoading?: boolean
  onClick: () => void
}

function Button({
  id,
  type,
  text,
  hideOverlay,
  leftElement: LeftElement,
  centerElement: CenterElement,
  rightElement: RightElement,
  buttonStyles,
  textStyles,
  leftElementStyles,
  centerElementStyles,
  rightElementStyles,
  isDisabled,
  isLoading,
  onClick,
  ...props
}: ButtonProps) {
  return (
    <button
      id={id}
      type={type}
      disabled={isDisabled}
      onClick={() => (isDisabled ? undefined : onClick())}
      {...props}
      {...stylex.props(
        styles.buttonWrapper,
        isDisabled ? styles.cursorDefault : styles.cursorPointer,
        buttonStyles,
        styles.buttonConstantStyles
      )}
    >
      <div
        {...stylex.props(
          styles.buttonOverlayStyles,
          hideOverlay && styles.hideOverlay
        )}
      />
      <div
        {...stylex.props(
          styles.innerItemCommonStyles,
          (LeftElement || RightElement) && styles.spaceBetween,
          styles.contentContainerConstantStyles
        )}
      >
        {LeftElement && (
          <div
            {...stylex.props(leftElementStyles, styles.innerItemCommonStyles)}
          >
            {LeftElement}
          </div>
        )}
        {text || CenterElement ? (
          <div
            {...stylex.props(
              LeftElement && styles.paddingLeft,
              RightElement && styles.paddingRight,
              centerElementStyles,
              styles.innerItemCommonStyles,
              styles.hideOverflow,
              isLoading && styles.loadingItemStyles
            )}
          >
            {isLoading ? (
              <Loader size={'25px'} />
            ) : text ? (
              <Text
                oneLine
                clickable={hideOverlay}
                text={text}
                textStyles={textStyles}
              />
            ) : (
              CenterElement
            )}
          </div>
        ) : isLoading ? (
          <Loader />
        ) : null}
        {RightElement && (
          <div
            {...stylex.props(rightElementStyles, styles.innerItemCommonStyles)}
          >
            {RightElement}
          </div>
        )}
      </div>
    </button>
  )
}

export default Button
