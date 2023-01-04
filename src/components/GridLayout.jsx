import React from 'react'

const GridLayout = ({children,style}) => {
  return (
    <div className={`grid ${style} gap-8 px-12 xs:px-0`}>
      {children}
    </div>
  )
}

export default GridLayout
