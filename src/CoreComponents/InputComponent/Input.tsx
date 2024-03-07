import React, { HTMLAttributes } from 'react'
import Icon from '../IconComponent/Icon'
import './Input.css'

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'row' as const,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    overflow: 'hidden',
    maxHeight: 'fit-content',
    maxWidth: 'fit-content',
    padding: '10px 0px',
    borderRadius: 8,
    border: '1px solid #ccc',
  },
  iconWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: 'auto',
  },
  inputDefaultStyles: {
    width: 'auto',
    height: '100%',
    border: 'none',
    outline: 'none',
    padding: '0 8px',
  },
}

type InputIconProps = {
  name: string
  width: number | string
  height: number | string
  color?: string
  stroke?: string
}

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  value: string
  width?: number | string
  height?: number | string
  type?: 'text' | 'number' | 'password'
  leftIconProps?: InputIconProps
  rightIconProps?: InputIconProps
  inputWrapperStyles?: React.CSSProperties
  inputStyles?: React.CSSProperties
  leftIconStyles?: React.CSSProperties
  rightIconStyles?: React.CSSProperties
  onChangeText: (text: string) => void
  onPressLeftIcon?: () => void
  onPressRightIcon?: () => void
}

const Input = ({
  value,
  width,
  height,
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
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    return onChangeText(e.target.value)
  }
  return (
    <div
      id="input"
      className="input"
      style={{
        ...inputWrapperStyles,
        width,
        height,
        ...styles.wrapper,
      }}
    >
      {leftIconProps && (
        <div
          style={{ ...styles.iconWrapper, ...leftIconStyles, paddingLeft: 8 }}
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
        value={value}
        style={{
          ...styles.inputDefaultStyles,
          ...inputStyles,
        }}
        onChange={onChange}
        {...props}
      />
      {rightIconProps && (
        <div
          style={{ ...styles.iconWrapper, ...rightIconStyles, paddingRight: 8 }}
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
