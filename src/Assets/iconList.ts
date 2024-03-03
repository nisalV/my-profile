import React from 'react'

type IconList = {
  [key: string]: {
    viewBox: string
    paths: {
      d: string
      fill?: string
      stroke?: string
      strokeWidth?: string
      strokeLinecap?: 'butt' | 'round' | 'square' | 'inherit'
      strokeLinejoin?: 'round' | 'inherit' | 'bevel' | 'miter'
      style?: React.CSSProperties
    }[]
  }
}

const iconList: IconList = {
  add: {
    viewBox: '0 0 18 18',
    paths: [
      {
        d: 'M7.875 15C7.875 15.2984 7.99353 15.5845 8.2045 15.7955C8.41548 16.0065 8.70163 16.125 9 16.125C9.29837 16.125 9.58452 16.0065 9.7955 15.7955C10.0065 15.5845 10.125 15.2984 10.125 15V10.125H15C15.2984 10.125 15.5845 10.0065 15.7955 9.7955C16.0065 9.58452 16.125 9.29837 16.125 9C16.125 8.70163 16.0065 8.41548 15.7955 8.2045C15.5845 7.99353 15.2984 7.875 15 7.875H10.125V3C10.125 2.70163 10.0065 2.41548 9.7955 2.2045C9.58452 1.99353 9.29837 1.875 9 1.875C8.70163 1.875 8.41548 1.99353 8.2045 2.2045C7.99353 2.41548 7.875 2.70163 7.875 3V7.875H3C2.70163 7.875 2.41548 7.99353 2.2045 8.2045C1.99353 8.41548 1.875 8.70163 1.875 9C1.875 9.29837 1.99353 9.58452 2.2045 9.7955C2.41548 10.0065 2.70163 10.125 3 10.125H7.875V15Z',
      },
    ],
  },
  signOut: {
    viewBox: '0 0 20 20',
    paths: [
      {
        d: 'M7.5 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H7.5',
        strokeWidth: '2',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      },
      {
        d: 'M13.334 14.1666L17.5007 9.99998L13.334 5.83331',
        strokeWidth: '2',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      },
      {
        d: 'M17.5 10H7.5',
        strokeWidth: '2',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      },
    ],
  },
}

export { iconList }
