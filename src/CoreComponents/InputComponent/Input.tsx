import React, { HTMLAttributes, useState } from 'react'
import Icon from '../IconComponent/Icon'
import * as stylex from '@stylexjs/stylex'
import Text from '../TextComponent/Text'

const styles = stylex.create({
  wrapper: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'row' as const,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: '0px',
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(53,90,223,0.7)',
    outline: {
      default: '2px solid transparent',
      ':hover': '2px solid rgba(53,90,223,0.7)',
    },
    transition: 'outline 0.2s ease-in-out',
  },
  focusStyles: {
    outline: '2px solid rgba(53,90,223,0.7)',
  },
  leftIconWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: 'auto',
  },
  rightIconWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: 'auto',
  },
  inputDefaultStyles: {
    borderRadius: 8,
    borderWidth: 0,
    width: '100%',
    height: '100%',
    borderStyle: 'none',
    outline: 'none',
    padding: '0 8px',
    fontSize: '16px',
  },
  paddingLeft: {
    paddingLeft: 8,
  },
  paddingRight: {
    paddingRight: 8,
  },
  wrapperDefultStyles: {
    width: '200px',
  },
  minimizedPlaceholderWrapper: {
    position: 'absolute',
    top: -11,
    left: 10,
    zIndex: 4,
    width: 'fit-content',
  },
  minimizedPlaceholderStyles: {
    zIndex: 4,
    paddingLeft: 1,
    position: 'relative',
    fontSize: '12px',
    color: 'rgba(53,90,223,1)',
  },
  placeholderBackgroundStyles: {
    zIndex: 1,
    height: 5,
    top: 6,
    paddingRight: 1,
    position: 'absolute',
    backgroundColor: 'white',
    width: '100%',
  },
})

type InputIconProps = {
  name: string
  width: number | string
  height: number | string
  color?: string
  stroke?: string
}

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  id?: string
  value?: string
  type?: 'text' | 'number' | 'password'
  placeholder?: string
  leftIconProps?: InputIconProps
  rightIconProps?: InputIconProps
  inputWrapperStyles: stylex.StyleXStyles
  inputStyles?: stylex.StyleXStyles
  leftIconStyles?: stylex.StyleXStyles
  rightIconStyles?: stylex.StyleXStyles
  onChangeText: (text: string) => void
  onPressLeftIcon?: () => void
  onPressRightIcon?: () => void
}

const Input = ({
  id,
  value,
  type,
  placeholder,
  leftIconProps,
  rightIconProps,
  inputWrapperStyles,
  inputStyles,
  leftIconStyles,
  rightIconStyles,
  onChangeText,
  onPressLeftIcon,
  onPressRightIcon,
  ...props
}: InputProps) => {
  const [inputValue, setInputValue] = useState(value || '')

  const [isFocused, setIsFocused] = useState(false)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    return onChangeText(e.target.value)
  }
  return (
    <div
      id={id}
      {...stylex.props(
        styles.wrapper,
        inputWrapperStyles || styles.wrapperDefultStyles,
        isFocused && styles.focusStyles
      )}
    >
      {(isFocused || inputValue?.length > 0) && placeholder && (
        <div {...stylex.props(styles.minimizedPlaceholderWrapper)}>
          <>
            <Text
              text={placeholder}
              textStyles={styles.minimizedPlaceholderStyles}
            />
            <div {...stylex.props(styles.placeholderBackgroundStyles)} />
          </>
        </div>
      )}
      {leftIconProps && (
        <div
          {...stylex.props(
            styles.leftIconWrapper,
            leftIconStyles || {},
            styles.paddingLeft
          )}
        >
          <Icon
            name={leftIconProps?.name}
            width={leftIconProps?.width}
            height={leftIconProps?.height}
            color={leftIconProps?.color}
            stroke={leftIconProps?.stroke}
            onPress={onPressLeftIcon}
          />
        </div>
      )}
      <input
        type={type ? (type as string) : 'text'}
        width="100%"
        height="100%"
        value={inputValue}
        placeholder={!isFocused ? placeholder : ''}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...stylex.props(styles.inputDefaultStyles, inputStyles && inputStyles)}
        {...props}
      />
      {rightIconProps && (
        <div
          {...stylex.props(
            styles.rightIconWrapper,
            rightIconStyles || {},
            styles.paddingRight
          )}
        >
          <Icon
            name={rightIconProps?.name}
            width={rightIconProps?.width}
            height={rightIconProps?.height}
            color={rightIconProps?.color}
            stroke={rightIconProps?.stroke}
            onPress={onPressRightIcon}
          />
        </div>
      )}
    </div>
  )
}

export default Input
