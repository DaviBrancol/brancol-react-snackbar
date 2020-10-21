import React from 'react'
import { SnackbarProps, Position, Style } from './SnackbarProps'
import cs from 'classnames'
import styles from './Snackbar.css'

export function Snackbar({
  successColor,
  warningColor,
  dangerColor,
  successIcon,
  warningIcon,
  dangerIcon,
  message,
  style,
  isOpen,
  setIsOpen,
  animationDelay,
  displayIcon,
  displayCloseIcon,
  position,
}: SnackbarProps) {
  function getPositionProperties(pos: Position) {
    if (pos === Position.bottomLeft) return { bottom: '15px', left: '15px' }
    else if (pos === Position.bottomRight) return { bottom: '15px', right: '15px' }
    else if (pos === Position.bottomCenter) return { bottom: '15px', right: '50%', transform: 'translateX(50%)' }
    else if (pos === Position.topLeft) return { top: '15px', left: '15px' }
    else if (pos === Position.topRight) return { top: '15px', right: '15px' }
    else if (pos === Position.topCenter) return { top: '15px', right: '50%', transform: 'translateX(50%)' }
  }

  function getColor(style: Style) {
    if (style === 'success') return successColor
    else if (style === 'warning') return warningColor
    else if (style === 'danger') return dangerColor
  }

  function getIcon(style: Style) {
    if (style === 'success') return successIcon
    else if (style === 'warning') return warningIcon
    else if (style === 'danger') return dangerIcon
  }

  function generateStyle(style: Style) {
    let styleObject: any = {}
    styleObject.transitionDuration = `${animationDelay}ms`
    styleObject.backgroundColor = getColor(style)
    styleObject = { ...styleObject, ...getPositionProperties(position) }

    return styleObject
  }

  return (
    <div
      className={cs(`brancol_snackbar ${styles.snackbarCustom}`, {
        [`${styles.snackbarShowIcon}`]: displayIcon,
        [`${styles.snackbarOpen}`]: isOpen,
      })}
      style={generateStyle(style)}
    >
      <div className={cs(`${styles.snackbarContent}`)}>
        {displayIcon && <i className={cs(`${styles.snackbarIcon} ${getIcon(style)}`)} />}
        <p className={cs(`${styles.snackbarMessage}`)}>{message}</p>
      </div>
      {displayCloseIcon && (
        <i onClick={() => setIsOpen(false)} className={cs(`${styles.snackbarCloseIcon} fa fa-times`)} />
      )}
    </div>
  )
}
