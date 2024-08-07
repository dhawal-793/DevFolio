import React from 'react'

const GridLayout = ({ children, style }) => {
  return (
    <div className={`grid ${style} px-2 xs:px-4 sm:px-0`}>
      {children}
    </div>
  )
}

export default GridLayout;
