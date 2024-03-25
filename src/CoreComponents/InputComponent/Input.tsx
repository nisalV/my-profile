import React, { HTMLAttributes, useState } from 'react'
import Icon from '../IconComponent/Icon'
import * as stylex from '@stylexjs/stylex'

const styles = stylex.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row' as const,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    overflow: 'hidden',
    padding: '10px 0px',
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#ccc',
    outline: {
      default: '2px solid transparent',
      ':hover': '2px solid #007bff',
    },
    transition: 'outline 0.2s ease',
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
    width: '100%',
    height: '100%',
    borderWidth: 0,
    borderStyle: 'none',
    outline: 'none',
    padding: '0 8px',
  },
  paddingLeft: {
    paddingLeft: 8,
  },
  paddingRight: {
    paddingRight: 8,
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

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    return onChangeText(e.target.value)
  }
  return (
    <div id={id} {...stylex.props(styles.wrapper, inputWrapperStyles)}>
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
        onChange={onChange}
        {...props}
        {...stylex.props(styles.inputDefaultStyles, inputStyles || {})}
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
