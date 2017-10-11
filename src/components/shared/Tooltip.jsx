import React from 'react'

// Tooltip HOC from css in https://codepen.io/juandjara/pen/rGKwjq
const Tooltip = WrappedComponent => props => {
  const {children, direction = "bottom", className, tooltip, ...otherProps} = props
  return (
    <WrappedComponent 
      data-tooltip={tooltip} 
      className={`tooltip--${direction} ${className}`}
      {...otherProps}>
      {children}
    </WrappedComponent>
  )
}

export default Tooltip
